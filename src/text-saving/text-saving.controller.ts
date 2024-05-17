import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CreateTextSavingDto } from './dto/create-text-saving.dto';
import { UpdateTextSavingDto } from './dto/update-text-saving.dto';
import { ApiTags } from '@nestjs/swagger';
import { TextSavingService } from './text-saving.service';

@ApiTags('Text Saving')
@Controller('text-saving')
export class TextSavingController {
  constructor(private readonly textSavingService: TextSavingService) {}

  @Post()
  create(@Body() createTextSavingDto: CreateTextSavingDto) {
    return this.textSavingService.create(createTextSavingDto);
  }

  @Get()
  findAll() {
    return this.textSavingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.textSavingService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTextSavingDto: UpdateTextSavingDto,
  ) {
    return this.textSavingService.update(+id, updateTextSavingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.textSavingService.remove(+id);
  }
}
