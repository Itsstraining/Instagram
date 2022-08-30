import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NewPostController } from 'src/controllers/newpost/newpost.controller';
import { NewPost, NewPostSchema } from 'src/schemas/newpost.schema';
import { NewPostService } from 'src/services/newpost/newpost.service';


@Module({
    imports: [MongooseModule.forFeature([{ name: NewPost.name, schema: NewPostSchema }])],
    controllers: [NewPostController],
    providers: [NewPostService],
})
export class NewPostModule {}