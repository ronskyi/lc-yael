import { Controller, Get, Post } from '@nestjs/common';
import { UserService } from '../../domain/services/user.service';

@Controller('users')
export class AppController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getList(): string {
    return this.userService.getList();
  }

  @Post()
  create(): string {
    return this.userService.getList();
  }
}
