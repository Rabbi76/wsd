import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { CreateTextSavingDto } from './dto/create-text-saving.dto';
import { UpdateTextSavingDto } from './dto/update-text-saving.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { TextSavingService } from './text-saving.service';
import { AuthGuard } from '../auth/auth.guard';
import { UserRoles } from '../auth/decorators/role.enum';
import { Roles } from '../auth/decorators/roles.decorator';
import { RolesGuard } from '../auth/roles.guard';

@ApiTags('Text Saving')
@Controller('text-saving')
@UseGuards(AuthGuard)
@UseGuards(RolesGuard)
@Roles(UserRoles.Admin, UserRoles.Staff)
@ApiBearerAuth('bearer')
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
