import { Body, Controller, Get, Post } from '@nestjs/common';
import { StoriesService } from 'src/services/stories/stories.service';

@Controller('stories')
export class StoriesController {
    constructor(private stories: StoriesService){}

    @Post()
    createStories(@Body() body: any){
        return this.stories.insertStories(body);
    }

    @Get('all')
    getAllStories(){
        return this.stories.getAllStories();
    }
    @Get('id')
    getByIdStories(@Body() id: any){
        return this.stories.getByIdStories(id.id);
    }

}

