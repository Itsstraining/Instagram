import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostController } from 'src/controllers/post/post.controller';
import { Post, PostSchema } from 'src/schemas/post.schema';
import { User, UserSchema } from 'src/schemas/user.schema';
import { PostService } from 'src/services/post/post.service';
import { UserModule } from '../user/user.module';


@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Post.name, schema: PostSchema },
            { name: User.name, schema: UserSchema }]),
        UserModule
    ],
    providers: [PostService],
    controllers: [PostController],
})
export class PostModule { }
