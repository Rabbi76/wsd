import { Test, TestingModule } from '@nestjs/testing';
import { TextSavingService } from './text-saving.service';

describe('TextSavingService', () => {
  let service: TextSavingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TextSavingService],
    }).compile();

    service = module.get<TextSavingService>(TextSavingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
