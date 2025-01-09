import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Card } from './entities/card.entity';

@Injectable()
export class CardService {
  constructor(
    @InjectRepository(Card)
    private cardRepository: Repository<Card>,
  ) {}

  async getCardBySetId(
    setId: string,
    filters?: { rarity?: string; type?: string; subtype?: string },
  ): Promise<Card[]> {
    const query = this.cardRepository
      .createQueryBuilder('c')
      .innerJoin('c.set', 's')
      .innerJoin('image', 'i', 'i.card_id = c.id')
      .select([
        'c.id AS card_id',
        'c.name AS card_name',
        'c.supertype',
        'c.subtypes',
        'c.types',
        'c.rarity',
        's.id AS set_id',
        's.name AS set_name',
        'i.url AS image_url',
        'i.id',
      ])
      .where('s.id = :setId', { setId });
    if (filters?.rarity) {
      query.andWhere('c.rarity = :rarity', { rarity: filters.rarity });
    }
    if (filters?.type) {
      query.andWhere(':type = ANY(c.types)', { type: filters.type });
    }
    if (filters?.subtype) {
      query.andWhere('c.subtype = :subtype', { subtype: filters.subtype });
    }
    query.andWhere('i.type = :type', { type: 'small' });
    return query.getRawMany();
  }

  findAll() {
    return `This action returns all card`;
  }

  async getCardById(cardId: string): Promise<Card> {
    const card = await this.cardRepository.findOne({ where: { id: cardId } });
    if (!card) {
      throw new Error('Card not found');
    }
    return card;
  }
}
