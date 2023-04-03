import { NestFactory } from '@nestjs/core';
import { LiquidComponentsModule } from './liquid-components.module';

async function bootstrap() {
  const app = await NestFactory.create(LiquidComponentsModule);
  await app.listen(3000);
}
bootstrap();
