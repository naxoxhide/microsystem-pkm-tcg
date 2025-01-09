import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AvailableSetDto } from './dto/find-avalaible-sets.dto';
import { Set } from './entities/set.entity';

@Injectable()
export class SetService {
  constructor(
    @InjectRepository(Set)
    private setRepository: Repository<Set>,
  ) {}

  findAll(): Promise<Set[]> {
    return this.setRepository.find();
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} set`;
  // }
}
