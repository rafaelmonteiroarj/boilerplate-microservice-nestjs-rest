import { Task } from '@core/entities/task.entity';
import { TaskRepository } from '@core/repositories/task.repository';

export class InMemoryTaskRepository implements TaskRepository {
  public tasks: Task[] = [];

  async create(task: Task) {
    this.tasks.push(task);
  }

  async findAll() {
    return this.tasks;
  }
}
