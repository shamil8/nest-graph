import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { AppService } from '../app.service';

@Controller({
  path: 'users',
  // host: '127.0.0.1',
})
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly appService: AppService,
  ) {}

  @Get()
  async index(): Promise<any> {
    return await this.userService.findAll();
  }

  @Get('hello')
  sayHello(): string {
    return this.appService.getHello();
  }
}
