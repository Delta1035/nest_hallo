import { Controller, Post } from '@nestjs/common';
import { UserService } from 'src/service';

@Controller('login')
export class LoginController {
  constructor(private userService: UserService) {}
  @Post('')
  login() {
    return '';
  }
}
