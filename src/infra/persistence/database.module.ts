import { Module } from '@nestjs/common';

import { TaskRepository } from '@core/repositories/task.repository';
import { PrismaService } from '@infra/persistence/prisma/prisma.service';
import { PrismaTaskRepository } from '@infra/persistence/prisma/task.repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: TaskRepository,
      useClass: PrismaTaskRepository,
    },
  ],
  exports: [TaskRepository],
})
export class DatabaseModule {}
