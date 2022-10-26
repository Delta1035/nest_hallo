import { Module } from '@nestjs/common';
import { AppController } from './controller/app.controller';
import { AppService } from './service/app.service';
import { LoginController } from './controller/login/login.controller';
import { LoginService } from './service/login/login.service';

@Module({
  imports: [],
  controllers: [AppController, LoginController],
  providers: [AppService, LoginService],
})
export class AppModule {}
