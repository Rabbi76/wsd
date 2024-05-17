import { Module } from '@nestjs/common';
import { TextAnalyzerService } from './text-analyzer.service';
import { TextAnalyzerController } from './text-analyzer.controller';

@Module({
  controllers: [TextAnalyzerController],
  providers: [TextAnalyzerService],
})
export class TextAnalyzerModule {}
