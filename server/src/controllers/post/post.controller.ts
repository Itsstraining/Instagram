import { Body, Controller, Get, Param, Post, Req, UploadedFile, UseInterceptors } from '@nestjs/common';
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

    @Get('detail/:postId')
    async getPostById(
        @Param('postId') postId: any,
        @Req() req: any
    ) {
        return await this.PostService.getPostById(postId);
    }


    @Get('all')
    async getAllPosts(
        @Req() req: any
    ) {
        let user: any = await this.UserService.getUserByEmail(req.payload.email);
        if (!user) return;
        return await this.PostService.getAllPosts(user.followings);
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

    @Post('like')
    async likePost(
        @Body() body: any,
        @Req() req: any
    ) {
        return await this.PostService.likePost(body.postId, req.payload);
    }

    @Post('comment')
    async commentPost(
        @Body() body: any,
        @Req() req: any
    ) {
        return await this.PostService.commentPost(body.postId, req.payload, body.content);
    }

}
