import { Module, Post } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NewPostController } from 'src/controllers/newpost/newpost.controller';
import { PostSchema } from 'src/schemas/post.schema';
import { NewPostService } from 'src/services/newpost/newpost.service';
import { PostService } from 'src/services/post/post.service';
import { PostController } from '../../controllers/post/post.controller';
@Module({
    imports: [MongooseModule.forFeature([{ name: Post.name, schema: PostSchema }])],
    controllers: [NewPostController],
    providers: [NewPostService],
})
export class PostModule {}
