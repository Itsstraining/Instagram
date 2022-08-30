import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Stories, StoriesDocument } from 'src/schemas/stories.schemas';
import { User, UserDocument } from 'src/schemas/user.schema';

@Injectable()
export class StoriesService {
    constructor(
        @InjectModel(Stories.name) private storiesModel: Model<StoriesDocument>,
        @InjectModel(User.name) private userModel: Model<UserDocument>,
        ){}
    insertStories(body:any){
        let storiesModel = new this.storiesModel(body);
        console.log(storiesModel)
        storiesModel.save();
        return "successfull!"
    }
    getAllStories(){
        return this.storiesModel.find().exec();
    }   
    async getByIdStories(id: string){
        return await this.storiesModel.findById(id).populate("userId", '-id',this.userModel).exec();
        
    }

}
