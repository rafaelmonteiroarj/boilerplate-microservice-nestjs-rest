import { Task } from '@core/entities/task.entity';

export abstract class TaskRepository {
  abstract create(task: Task): Promise<void>;
  abstract findAll(): Promise<Task[]>;
}
