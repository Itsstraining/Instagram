import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from 'src/controllers/user/user.controller';
import { Post, PostSchema } from 'src/schemas/post.schema';
import { User, UserSchema } from 'src/schemas/user.schema';
import { UserService } from 'src/services/user/user.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }, { name: Post.name, schema: PostSchema }])],
    controllers: [UserController],
    providers: [UserService],
    exports: [UserService]
})
export class UserModule { }
