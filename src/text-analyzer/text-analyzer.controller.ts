import { Controller, Get, Param } from '@nestjs/common';
import { TextAnalyzerService } from './text-analyzer.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Text Analyzer')
@Controller('text-analyzer')
export class TextAnalyzerController {
  constructor(private readonly textAnalyzerService: TextAnalyzerService) {}

  @Get('/words-count')
  wordsCount() {
    return this.textAnalyzerService.wordsCount();
  }

  @Get('/characters-count')
  charactersCount() {
    return this.textAnalyzerService.charactersCount();
  }

  @Get('/sentences-count')
  sentencesCount() {
    return this.textAnalyzerService.sentencesCount();
  }

  @Get('/paragraphs-count')
  paragraphsCount() {
    return this.textAnalyzerService.paragraphsCount();
  }

  @Get('/longest-words-in-paragraphs')
  longestWordsInParagraphs() {
    return this.textAnalyzerService.longestWordsInParagraphs();
  }
}
