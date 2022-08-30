import { Body, Controller, Get, Post,  } from '@nestjs/common';
import { NewPost } from 'src/schemas/newpost.schema';
import { NewPostService } from '../../services/newpost/newpost.service'

@Controller('newpost')
export class NewPostController {
    constructor(private NewPostService:NewPostService){}

    @Get('/All')
    public async getAll(){
        return await this.NewPostService.findAll();
    }

    @Post('/')
    public async createNewPost(@Body() newpost: NewPost){
        return await this.NewPostService.createNewPost(newpost);
    }

}
