import { Injectable } from '@nestjs/common';

import { Task } from '@core/entities/task.entity';
import { TaskRepository } from '@core/repositories/task.repository';
import { PrismaService } from '@infra/database/prisma/prisma.service';
import { PrismaTaskMapper } from '@infra/database/prisma/mappers/prisma-task-mapper';

@Injectable()
export class PrismaTaskRepository implements TaskRepository {
  constructor(private prisma: PrismaService) {}

  async create(task: Task): Promise<void> {
    const data = PrismaTaskMapper.toPrisma(task);
    await this.prisma.task.create({ data });
  }

  async findAll(): Promise<Task[]> {
    const tasks = await this.prisma.task.findMany();

    return tasks.map(PrismaTaskMapper.toDomain);
  }
}
