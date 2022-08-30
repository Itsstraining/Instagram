import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AnimalModule } from './modules/animal/animal.module';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static'
import { AuthMiddleware } from './middlewares/auth.middleware';

import { PostModule } from './modules/post/post.module';
import { UserModule } from './modules/user/user.module';
import { UserService } from './services/user/user.service';
import { UserController } from './controllers/user/user.controller';
import { NewPostController } from './controllers/newpost/newpost.controller';
import { NewPostModule } from './modules/newpost/newpost.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    AnimalModule,
    NewPostModule,
    MongooseModule.forRoot("mongodb+srv://congpham:123@cluster0.e3gxoqz.mongodb.net/instagram?retryWrites=true&w=majority"),
    UserModule,

  ],
  controllers: [AppController, ],
  providers: [AppService, ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes({
        path: 'animal/example', method: RequestMethod.GET
      });
  }
}
