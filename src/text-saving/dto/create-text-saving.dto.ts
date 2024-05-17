import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTextSavingDto {
  @ApiProperty({
    description: 'The Text',
    example:
      'The quick brown fox jumps over the lazy dog. The lazy dog slept in the sun.',
  })
  @IsNotEmpty()
  @IsString()
  text: string;
}
