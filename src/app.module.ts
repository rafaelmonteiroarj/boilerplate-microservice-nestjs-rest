import { Module } from '@nestjs/common';

import { HttpModule } from '@infra/http/http.module';
import { AppController } from './app.controller';

@Module({
  imports: [HttpModule],
  controllers: [AppController],
})
export class AppModule {}
