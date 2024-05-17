import { PartialType } from '@nestjs/swagger';
import { CreateTextSavingDto } from './create-text-saving.dto';

export class UpdateTextSavingDto extends PartialType(CreateTextSavingDto) {}
