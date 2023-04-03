import { Injectable } from '@nestjs/common';

@Injectable()
export class LiquidComponentsService {
  getHello(): string {
    return 'Hello World!';
  }
}
