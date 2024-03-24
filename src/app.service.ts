import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! I am calling from NestJS. It will be grow up soon. 🍀';
  }
}
