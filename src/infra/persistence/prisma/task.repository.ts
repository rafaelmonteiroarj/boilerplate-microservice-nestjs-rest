import { Injectable } from '@nestjs/common';

import { Task } from '@core/entities/task.entity';
import { TaskRepository } from '@core/repositories/task.repository';
import { PrismaTaskMapper } from '@infra/persistence/prisma/mappers/prisma-task-mapper';
import { PrismaService } from '@infra/persistence/prisma/prisma.service';

@Injectable()
export class PrismaTaskRepository implements TaskRepository {
  constructor(private prisma: PrismaService) {}

  async create(task: Task): Promise<void> {
    console.debug(`task`, task);
    const data = PrismaTaskMapper.toPrisma(task);
    await this.prisma.task.create({ data });
  }

  async findAll(): Promise<Task[]> {
    const tasks = await this.prisma.task.findMany();

    return tasks.map(PrismaTaskMapper.toDomain);
  }
}
