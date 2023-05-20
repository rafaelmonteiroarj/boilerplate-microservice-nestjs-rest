import { ApiProperty } from '@nestjs/swagger';

export class HttpMapper {
  @ApiProperty({
    description: 'api name',
    example: 'tasks',
  })
  api: string;

  @ApiProperty({
    description: 'api version',
    example: '1.0',
  })
  version: string;

  @ApiProperty({
    description: 'api owner',
    example: 'john.doe',
  })
  owner: string;
}
