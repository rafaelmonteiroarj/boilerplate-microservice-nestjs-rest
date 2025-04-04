// import { CacheInterceptor } from '@nestjs/cache-manager';
import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { ServerResponse } from 'http';
import { HttpHealthMapper } from './infra/http/mappers/http-health-mapper';
import { HttpMapper } from './infra/http/mappers/http-mapper';

@Controller()
export class AppController {
  @Get()
  @ApiOkResponse({ description: 'api description', type: HttpMapper })
  getHello(@Res() res): ServerResponse {
    return res.status(HttpStatus.OK).json({
      api: 'tasks',
      version: '1.0',
      owner: 'rarjonas',
    });
  }

  @Get('health')
  @ApiOkResponse({ description: 'api health', type: HttpHealthMapper })
  health(@Res() res): ServerResponse {
    return res.status(HttpStatus.OK).json({
      message: 'OK.',
      status: HttpStatus.OK,
    });
  }
}
