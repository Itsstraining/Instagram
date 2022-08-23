import { Module, Post } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostController } from 'src/controllers/post/post.controller';
import { PostSchema } from 'src/schemas/post.schema';
import { PostService } from 'src/services/post/post.service';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Post.name, schema: PostSchema }]),
        
    ],
    controllers: [PostController],
    providers: [PostService],
})
export class PostModule {}
