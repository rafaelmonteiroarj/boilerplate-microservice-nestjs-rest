import {
  BadRequestException,
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
  RequestTimeoutException,
} from '@nestjs/common';
import { logger } from '@utils/functions';
import { Observable, TimeoutError, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  async intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Promise<Observable<any>> {
    const now = Date.now();
    const request = context.switchToHttp().getRequest();
    logger.log(
      `send request... ${JSON.stringify(request.body)} | [${request.method}] ${
        request.url
      } - ${now}ms`,
    );

    return next.handle().pipe(
      tap(() => {
        const response = context.switchToHttp().getResponse();
        logger.log(
          `response...  statusCode ==> [${response.statusCode}] | [${
            request.method
          }] ${request.url} - ${Date.now() - now}ms`,
        );
      }),
      catchError((err) => {
        logger.error(
          `response error...  ${JSON.stringify(
            err?.response || 'Something went wrong',
          )} | [${request.method}] ${request.url} - ${Date.now() - now}ms`,
        );

        if (err instanceof BadRequestException) {
          return throwError(() => new BadRequestException());
        } else if (err instanceof TimeoutError) {
          return throwError(() => new RequestTimeoutException());
        }

        return throwError(() => new Error());
      }),
    );
  }
}
