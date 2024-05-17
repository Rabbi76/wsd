import { Test, TestingModule } from '@nestjs/testing';
import { TextSavingController } from './text-saving.controller';
import { TextSavingService } from './text-saving.service';
import { TextSaving } from './entities/text-saving.entity';
import { CreateTextSavingDto } from './dto/create-text-saving.dto';
import { UpdateTextSavingDto } from './dto/update-text-saving.dto';

const dummyText: TextSaving = {
  id: 1,
  text: 'Test',
  created_at: undefined,
  updated_at: undefined,
};

const createTextDto = {
  text: 'Test',
} as CreateTextSavingDto;

const updateTextDto = {
  text: 'Test',
} as UpdateTextSavingDto;

const id = '1';

const tests = [dummyText];

const mockTextSavingService = {
  create: jest.fn(),
  findAll: jest.fn(),
  findOne: jest.fn(),
  update: jest.fn(),
  remove: jest.fn(),
};

describe('TextSavingController', () => {
  let controller: TextSavingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TextSavingController],
      providers: [
        {
          provide: TextSavingService,
          useValue: mockTextSavingService,
        },
      ],
    }).compile();

    controller = module.get<TextSavingController>(TextSavingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('create => should create a new user by a given data', async () => {
    jest.spyOn(mockTextSavingService, 'create').mockReturnValue(dummyText);

    // act
    const result = await controller.create(createTextDto);

    // assert
    expect(mockTextSavingService.create).toBeCalled();
    expect(mockTextSavingService.create).toBeCalledWith(createTextDto);

    expect(result).toEqual(dummyText);
  });

  it('findAll => should return an array of user', async () => {
    jest.spyOn(mockTextSavingService, 'findAll').mockReturnValue(tests);

    //act
    const result = await controller.findAll();

    // assert
    expect(result).toEqual(tests);
    expect(mockTextSavingService.findAll).toBeCalled();
  });

  it('findOne => should find a user by a given id and return its data', async () => {
    jest.spyOn(mockTextSavingService, 'findOne').mockReturnValue(dummyText);

    //act
    const result = await controller.findOne(id);

    expect(result).toEqual(dummyText);
    expect(mockTextSavingService.findOne).toBeCalled();
    expect(mockTextSavingService.findOne).toBeCalledWith(+id);
  });

  it('update => should find a user by a given id and update its data', async () => {
    jest.spyOn(mockTextSavingService, 'update').mockReturnValue(dummyText);

    //act
    const result = await controller.update(id, updateTextDto);

    expect(result).toEqual(dummyText);
    expect(mockTextSavingService.update).toBeCalled();
    expect(mockTextSavingService.update).toBeCalledWith(+id, updateTextDto);
  });
  it('remove => should find a user by a given id, remove and then return Number of affected rows', async () => {
    jest.spyOn(mockTextSavingService, 'remove').mockReturnValue(dummyText);

    //act
    const result = await controller.remove(id);

    expect(result).toEqual(dummyText);
    expect(mockTextSavingService.remove).toBeCalled();
    expect(mockTextSavingService.remove).toBeCalledWith(+id);
  });
});
