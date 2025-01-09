import { Controller, Get } from '@nestjs/common';
import { SetService } from './set.service';

@Controller('set')
export class SetController {
  constructor(private readonly setService: SetService) {}

  @Get()
  findAll() {
    return this.setService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.setService.findOne(+id);
  // }
}
