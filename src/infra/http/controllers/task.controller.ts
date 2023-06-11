import { Controller, Post, Body, Res, HttpStatus, Get } from '@nestjs/common';
import { Task } from '@prisma/client';

import { CreateTaskDto } from '@infra/http/dtos/create-task-dto';
import { CreateTask } from '@core/use-cases/create-task';
import { HttpTaskMapper } from '@infra/http/mappers/http-task-mapper';
import { GetAllTasks } from '@core/use-cases/list-task';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('tasks')
@Controller('tasks')
export class TaskController {
  constructor(
    private createTask: CreateTask,
    private getAllTasks: GetAllTasks,
  ) {}

  @Post()
  @ApiOperation({
    summary: 'Create task',
  })
  @ApiOkResponse({ description: 'Task created.', type: HttpTaskMapper })
  async create(@Res() res, @Body() data: CreateTaskDto): Promise<Task> {
    try {
      const task = await this.createTask.execute(data);
      return res.status(HttpStatus.OK).json(HttpTaskMapper.toHTTP(task));
    } catch (err) {
      return res
        .status(err.status)
        .json({ message: err.message, status: err.status });
    }
  }

  @Get()
  @ApiOperation({
    summary: 'Find all tasks',
  })
  @ApiOkResponse({ description: 'All task`s fetched.', type: [HttpTaskMapper] })
  async getMany(@Res() res): Promise<Task[]> {
    try {
      const tasks = await this.getAllTasks.execute();
      return res.status(HttpStatus.OK).json(tasks.map(HttpTaskMapper.toHTTP));
    } catch (err) {
      return res
        .status(err.status)
        .json({ message: err.message, status: err.status });
    }
  }
}
