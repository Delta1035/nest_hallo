import { Module } from '@nestjs/common';

import {
  AppController,
  ArticleController,
  BannerController,
  CategoryController,
  CommentController,
  LoginController,
  ReplyController,
  RoleController,
  UserController,
} from './controller';
import {
  LoginService,
  UserService,
  ArticleService,
  RoleService,
  ReplyService,
  CommentService,
  BannerService,
  CategoryService,
  AppService,
} from './service';

@Module({
  imports: [],
  controllers: [
    AppController,
    LoginController,
    UserController,
    ArticleController,
    BannerController,
    CategoryController,
    CommentController,
    ReplyController,
    RoleController,
    UserController,
  ],
  providers: [
    AppService,
    LoginService,
    UserService,
    ArticleService,
    RoleService,
    ReplyService,
    CommentService,
    BannerService,
    CategoryService,
  ],
})
export class AppModule {}
