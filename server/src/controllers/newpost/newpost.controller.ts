import { Body, Controller, Get, Post, Query,  } from '@nestjs/common';
import { NewPost } from 'src/schemas/newpost.schema';
import { NewPostService } from '../../services/newpost/newpost.service'

@Controller('post')
export class NewPostController {
    constructor(private NewPostService:NewPostService){}

    @Get('/all')
    public async getAll(){
        return await this.NewPostService.findAll();
    }
    @Get("/id")
    public async getPostById(@Query("id")id :string){
        return await this.NewPostService.findById(id);

    }

    @Post('/')
    public async createNewPost(@Body() newpost: NewPost){
        return await this.NewPostService.createNewPost(newpost);
    }

}
