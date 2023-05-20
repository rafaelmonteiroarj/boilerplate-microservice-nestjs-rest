import { Module } from '@nestjs/common';

import { PrismaService } from '@infra/database/prisma/prisma.service';
import { TaskRepository } from '@core/repositories/task.repository';
import { PrismaTaskRepository } from '@infra/database/prisma/task.repository';

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
