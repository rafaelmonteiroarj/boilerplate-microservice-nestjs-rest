import { Injectable } from '@nestjs/common';

import { Task } from '@core/entities/task.entity';
import { TaskRepository } from '@core/repositories/task.repository';

@Injectable()
export class GetAllTasks {
  constructor(private taskRepository: TaskRepository) {}

  async execute(): Promise<Task[]> {
    return await this.taskRepository.findAll();
  }
}
