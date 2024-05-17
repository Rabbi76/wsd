import { Test, TestingModule } from '@nestjs/testing';
import { TextSavingController } from './text-saving.controller';
import { TextSavingService } from './text-saving.service';

describe('TextSavingController', () => {
  let controller: TextSavingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TextSavingController],
      providers: [TextSavingService],
    }).compile();

    controller = module.get<TextSavingController>(TextSavingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
