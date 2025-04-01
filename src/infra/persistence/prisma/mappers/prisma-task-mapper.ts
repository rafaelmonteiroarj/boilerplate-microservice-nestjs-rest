import { Task } from '@core/entities/task.entity';
import { Task as RawTask } from '@prisma/client';

export class PrismaTaskMapper {
  static toPrisma(task: Task) {
    return {
      id: task.id,
      title: task.title,
      description: task.description,
      createdAt: task.createdAt,
      updatedAt: task.updatedAt,
    };
  }

  static toDomain(raw: RawTask) {
    return new Task(
      {
        title: raw.title,
        description: raw.description,
        createdAt: raw.createdAt,
        updatedAt: raw.updatedAt,
      },
      raw.id,
    );
  }
}
