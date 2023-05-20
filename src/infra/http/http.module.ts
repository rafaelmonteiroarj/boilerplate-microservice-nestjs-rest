import { Module } from '@nestjs/common';

import { TaskController } from '@infra/http/controllers/task.controller';
import { CreateTask, GetAllTasks } from '@core/use-cases';
import { DatabaseModule } from '@infra/database/database.module';
import { PrismaTaskRepository } from '@infra/database/prisma/task.repository';
import { PrismaService } from '@infra/database/prisma/prisma.service';

@Module({
  imports: [DatabaseModule],
  providers: [CreateTask, GetAllTasks, PrismaTaskRepository, PrismaService],
  controllers: [TaskController],
})
export class HttpModule {}
