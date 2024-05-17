import { Module } from '@nestjs/common';
import { TextSavingController } from './text-saving.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TextSaving } from './entities/text-saving.entity';
import { TextSavingService } from './text-saving.service';

@Module({
  imports: [TypeOrmModule.forFeature([TextSaving])],
  controllers: [TextSavingController],
  providers: [TextSavingService],
})
export class TextSavingModule {}
