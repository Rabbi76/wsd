import { Injectable } from '@nestjs/common';
import { textSeparator } from './text-analyzer.function';

const text = `The quick brown fox jumps over the lazy dog. The lazy dog slept in the sun.
`;

@Injectable()
export class TextAnalyzerService {
  async wordsCount() {
    const word = await textSeparator(text, /\s+/);
    return word.length;
  }

  async charactersCount() {
    const regex = /[a-zA-Z0-9]/g;
    return text.match(regex).length;
  }

  async sentencesCount() {
    const sentences = await textSeparator(text, /[.|!|?]\s/gi);
    return sentences.length;
  }

  async paragraphsCount() {
    const paragraphs = await textSeparator(text, /\n/);
    return paragraphs.length;
  }

  async longestWordsInParagraphs() {
    const word = await textSeparator(text, /\s+/);
    return word.sort((a, b) => b.length - a.length)[0];
  }
}
