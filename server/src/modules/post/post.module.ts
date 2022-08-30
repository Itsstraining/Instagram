import { Module, Post } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NewPostController } from 'src/controllers/newpost/newpost.controller';
import { PostSchema } from 'src/schemas/post.schema';
import { NewPostService } from 'src/services/newpost/newpost.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: Post.name, schema: PostSchema }])],
    controllers: [],
    providers: [],
})
export class PostModule {}
