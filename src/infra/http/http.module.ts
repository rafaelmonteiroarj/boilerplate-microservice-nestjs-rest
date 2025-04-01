import { Module } from '@nestjs/common';

import { CreateTask } from '@/src/@core/use-cases/create-task';
import { GetAllTasks } from '@/src/@core/use-cases/list-task';
import { TaskController } from '@infra/http/controllers/task.controller';
import { DatabaseModule } from '@infra/persistence/database.module';
import { PrismaService } from '@infra/persistence/prisma/prisma.service';
import { PrismaTaskRepository } from '@infra/persistence/prisma/task.repository';

@Module({
  imports: [DatabaseModule],
  providers: [CreateTask, GetAllTasks, PrismaTaskRepository, PrismaService],
  controllers: [TaskController],
})
export class HttpModule {}
