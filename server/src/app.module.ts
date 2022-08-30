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
import { NewPostModule } from './modules/newpost/newpost.module';
@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    AnimalModule,
    MongooseModule.forRoot("mongodb+srv://congpham:123@cluster0.e3gxoqz.mongodb.net/instagram?retryWrites=true&w=majority"),
    UserModule,
    StoriesModule,
    NewPostModule
  ],
  controllers: [AppController],
  providers: [AppService],
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


