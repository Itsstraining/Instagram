import { Module, Post } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StoriesController } from 'src/controllers/stories/stories.controller';
import { PostSchema } from 'src/schemas/post.schema';
import { Stories, StoriesSchema } from 'src/schemas/stories.schemas';
import { User, UserSchema } from 'src/schemas/user.schema';
import { StoriesService } from 'src/services/stories/stories.service';
@Module({
    imports: [MongooseModule.forFeature([
        { name: Stories.name, schema: StoriesSchema }, 
    ]), MongooseModule.forFeature([
        { name: User.name, schema: UserSchema }, 
    ])],
    controllers: [StoriesController],
    providers: [StoriesService],
})
export class StoriesModule {}