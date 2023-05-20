import { Injectable } from '@nestjs/common';

import { Task } from '@core/entities/task.entity';
import { CreateTaskDto } from '@infra/http/dtos/create-task-dto';
import { TaskRepository } from '@core/repositories/task.repository';

@Injectable()
export class CreateTask {
  constructor(private taskRepository: TaskRepository) {}

  async execute(createTaskDto: CreateTaskDto): Promise<Task> {
    const task = new Task(createTaskDto);
    await this.taskRepository.create(task);
    return task;
  }
}
