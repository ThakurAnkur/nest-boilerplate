import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly configServices: ConfigService,
  ) {}

  @Get()
  getHello(): string {
    console.log(
      this.configServices.get('database'),
      this.configServices.get('isDev'),
    );
    return this.appService.getHello();
  }
}
