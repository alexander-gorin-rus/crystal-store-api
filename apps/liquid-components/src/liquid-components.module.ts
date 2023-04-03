import { Module } from '@nestjs/common';
import { LiquidComponentsController } from './liquid-components.controller';
import { LiquidComponentsService } from './liquid-components.service';

@Module({
  imports: [],
  controllers: [LiquidComponentsController],
  providers: [LiquidComponentsService],
})
export class LiquidComponentsModule {}
