import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateTextSavingDto } from './dto/create-text-saving.dto';
import { UpdateTextSavingDto } from './dto/update-text-saving.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TextSaving } from './entities/text-saving.entity';

@Injectable()
export class TextSavingService {
  constructor(
    @InjectRepository(TextSaving)
    private textSavingRepository: Repository<TextSaving>,
  ) {}

  create(createTextSavingDto: CreateTextSavingDto) {
    return this.textSavingRepository.save(createTextSavingDto);
    // .catch((e) => {
    //   console.log(e)
    //   return {
    //     statusCode: 'UNKNOWN_ERROR',
    //     details: e,
    //   };
    // });
  }

  findAll() {
    return this.textSavingRepository.find();
  }

  async findOne(id: number) {
    return await this.getTextInfo(id, true);
  }
  UpdateTextSavingDto;
  async update(id: number, updateTextSavingDto: UpdateTextSavingDto) {
    await this.textSavingRepository.update(id, updateTextSavingDto);
    return await this.getTextInfo(id);
  }

  remove(id: number) {
    return this.textSavingRepository.delete(id);
  }

  async getTextInfo(id: number, rel: boolean = false): Promise<TextSaving> {
    let relation = [];
    if (rel) {
      relation = [];
    }

    const textInfo: TextSaving = await this.textSavingRepository.findOne({
      where: {
        id: id,
      },
      relations: relation,
    });

    if (textInfo) {
      return textInfo;
    }

    throw new HttpException('Text not found', HttpStatus.NOT_FOUND);
  }
}
