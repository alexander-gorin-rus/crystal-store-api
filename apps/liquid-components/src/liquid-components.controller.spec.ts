import { Test, TestingModule } from '@nestjs/testing';
import { LiquidComponentsController } from './liquid-components.controller';
import { LiquidComponentsService } from './liquid-components.service';

describe('LiquidComponentsController', () => {
  let liquidComponentsController: LiquidComponentsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [LiquidComponentsController],
      providers: [LiquidComponentsService],
    }).compile();

    liquidComponentsController = app.get<LiquidComponentsController>(
      LiquidComponentsController,
    );
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(liquidComponentsController.getHello()).toBe('Hello World!');
    });
  });
});
