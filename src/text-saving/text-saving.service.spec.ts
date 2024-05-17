import { Test, TestingModule } from '@nestjs/testing';
import { TextSavingService } from './text-saving.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { TextSaving } from './entities/text-saving.entity';
import { CreateTextSavingDto } from './dto/create-text-saving.dto';

const dummyText = {
  id: 1,
  text: 'The quick brown fox jumps over the lazy dog. The lazy dog slept in the sun.',
  created_at: undefined,
  updated_at: undefined,
} as TextSaving;

const id = 1;

const createTextDto = {
  text: 'The quick brown fox jumps over the lazy dog. The lazy dog slept in the sun.',
} as CreateTextSavingDto;

const mockTextSavingRepository = {
  save: jest.fn(),
  find: jest.fn(),
  findOne: jest.fn(),
  delete: jest.fn(),
};

describe('TextSavingService', () => {
  let service: TextSavingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TextSavingService,
        {
          provide: getRepositoryToken(TextSaving),
          useValue: mockTextSavingRepository,
        },
      ],
    }).compile();

    service = module.get<TextSavingService>(TextSavingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('create => Should create a new text and return its data', async () => {
    jest.spyOn(mockTextSavingRepository, 'save').mockReturnValue(dummyText);

    // act
    const result = await service.create(createTextDto);

    // assert
    expect(mockTextSavingRepository.save).toBeCalled();
    expect(mockTextSavingRepository.save).toBeCalledWith(createTextDto);

    expect(result).toEqual(dummyText);
  });

  it('findAll => should return an array of text', async () => {
    //arrange

    const texts = [dummyText];
    jest.spyOn(mockTextSavingRepository, 'find').mockReturnValue(texts);

    //act
    const result = await service.findAll();

    // assert
    expect(result).toEqual(texts);
    expect(mockTextSavingRepository.find).toBeCalled();
  });

  it('findOne => should find a text by a given id and return its data', async () => {
    jest.spyOn(mockTextSavingRepository, 'findOne').mockReturnValue(dummyText);

    //act
    const result = await service.findOne(id);

    expect(result).toEqual(dummyText);
    expect(mockTextSavingRepository.findOne).toBeCalled();
    // expect(mockTextSavingRepository.findOne).toBeCalledWith({ where: { id } });
  });

  it('remove => should find a text by a given id, remove and then return Number of affected rows', async () => {
    jest.spyOn(mockTextSavingRepository, 'delete').mockReturnValue(dummyText);

    //act
    const result = await service.remove(id);

    expect(result).toEqual(dummyText);
    expect(mockTextSavingRepository.delete).toBeCalled();
    expect(mockTextSavingRepository.delete).toBeCalledWith(id);
  });
});
