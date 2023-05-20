import { ApiProperty } from '@nestjs/swagger';

export class HttpHealthMapper {
  @ApiProperty({
    description: 'api message',
    example: 'OK.',
  })
  message: string;

  @ApiProperty({
    description: 'api status',
    example: '200',
  })
  status: string;
}
