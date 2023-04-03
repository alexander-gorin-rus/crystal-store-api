import { Controller, Get } from '@nestjs/common';
import { LiquidComponentsService } from './liquid-components.service';

@Controller()
export class LiquidComponentsController {
  constructor(
    private readonly liquidComponentsService: LiquidComponentsService,
  ) {}

  @Get()
  getHello(): string {
    return this.liquidComponentsService.getHello();
  }
}
