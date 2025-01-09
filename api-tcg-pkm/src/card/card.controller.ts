import { Controller, Get, Param, Query } from '@nestjs/common';
import { CardService } from './card.service';
import { Card } from './entities/card.entity';

@Controller('card')
export class CardController {
  constructor(private readonly cardService: CardService) {}

  @Get(':setId')
  async getCardBySetId(
    @Param('setId') setId: string,
    @Query('rarity') rarity?: string,
    @Query('type') type?: string,
    @Query('subtype') subtype?: string,
  ): Promise<Card[]> {
    const filters = { rarity, type, subtype };
    return this.cardService.getCardBySetId(setId, filters);
  }

  @Get(':id')
  async getCardById(@Param('id') id: string): Promise<Card> {
    return this.cardService.getCardById(id);
  }
}
