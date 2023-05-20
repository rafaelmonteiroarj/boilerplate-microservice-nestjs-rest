import { Task } from '@core/entities/task.entity';
import { ApiProperty } from '@nestjs/swagger';

export class HttpTaskMapper {
  @ApiProperty({
    description: 'The id of the task',
    example: 1,
  })
  id: number;

  @ApiProperty({
    description: 'The title of the task',
    example: 'John Doe',
  })
  title: string;

  @ApiProperty({
    description: 'The description of the task',
    example: 'john.doe@gmail.com',
  })
  description: string;

  @ApiProperty({ description: 'The task creation date' })
  createdAt: Date;

  @ApiProperty({ description: 'The date the task was last updated' })
  updatedAt: Date;

  static toHTTP(task: Task) {
    return {
      id: task.id,
      title: task.title,
      description: task.description,
      createdAt: task.createdAt,
      updatedAt: task.updatedAt,
    };
  }
}
