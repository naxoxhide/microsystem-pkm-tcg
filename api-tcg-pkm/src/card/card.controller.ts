import { Controller, Get, Param, Query } from '@nestjs/common';
import { CardService } from './card.service';
import { Card } from './entities/card.entity';
import { ApiOperation, ApiTags, ApiResponse } from '@nestjs/swagger';

@ApiTags('Card')
@Controller('card')
export class CardController {
  constructor(private readonly cardService: CardService) {}

  @Get(':setId')
  @ApiResponse({
    status: 200,
    description:
      'Trae las cartas según el setid agregando query param para filtrar el resultado ',
    type: Card,
  })
  @ApiOperation({
    summary:
      'Trae las cartas según el setid agregando query param para filtrar el resultado ',
  })
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
