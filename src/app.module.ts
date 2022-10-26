import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
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
import { Article, User } from './entities';
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
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '124.221.95.189',
      port: 3306,
      username: 'blog_dev',
      password: 'blog3363787543',
      database: 'blog_dev',
      entities: [User, Article],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([User, Article]),
  ],
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
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
