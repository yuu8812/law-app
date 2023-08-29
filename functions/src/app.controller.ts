import { Body, Controller, Get, Logger, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from './auth/guard/auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get()
  @UseGuards(AuthGuard)
  getHello(@Body() param: any) {
    Logger.error(param);
    return this.appService.getHello();
  }
}
