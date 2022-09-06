import { Body, Controller, Get, Post, Req, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { storage, uploadImage } from 'src/helpers/storage.helper';
import { PostService } from 'src/services/post/post.service';
import { UserService } from 'src/services/user/user.service';

@Controller('post')
export class PostController {
    constructor(
        private PostService: PostService,
        private UserService: UserService
    ) { }

    @Get('all')
    async getAllPosts() {
        return await this.PostService.getAllPosts();
    }

    @Post('create')
    @UseInterceptors(FileInterceptor('image', {
        storage
    }))
    async createPost(
        @Body() body: any,
        @Req() req: any,
        @UploadedFile() file: Express.Multer.File
    ) {

        let user = await this.UserService.getUserByEmail(req.payload.email);
        let image = await uploadImage(file);

        let post = {
            userId: user._id,
            content: body.content,
            image
        }

        return await this.PostService.createPost(post);
    }


}
