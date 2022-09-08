import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AnimalModule } from './modules/animal/animal.module';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static'
import { AuthMiddleware } from './middlewares/auth.middleware';
import { UserModule } from './modules/user/user.module';
import { StoriesModule } from './modules/stories/stories.module';
import { PostModule } from './modules/post/post.module';
@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    AnimalModule,
    MongooseModule.forRoot("mongodb://localhost:3001/instagram"),
    UserModule,
    StoriesModule,
    PostModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes(
        {
          path: 'animal/example', method: RequestMethod.GET,
        },
        {
          path: 'post/create', method: RequestMethod.POST,
        },
        {
          path: 'post/like', method: RequestMethod.POST,
        },
        {
          path: 'post/comment', method: RequestMethod.POST,
        },
        {
          path: 'post/all', method: RequestMethod.GET,
        }

      );
  }
}
