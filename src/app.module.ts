import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { HttpModule } from '@infra/http/http.module';
import { CacheModule } from '@nestjs/cache-manager';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { HttpCacheInterceptor } from './infra/interceptors/http-cache.interceptor';

@Module({
  imports: [CacheModule.register({ isGlobal: true }), HttpModule],
  controllers: [AppController],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: HttpCacheInterceptor,
    },
  ],
})
export class AppModule {}
