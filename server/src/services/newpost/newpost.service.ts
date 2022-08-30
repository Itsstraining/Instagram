import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { NewPost, NewPostDocument } from 'src/schemas/newpost.schema';

@Injectable()
export class NewPostService {
    constructor(@InjectModel(NewPost.name) private newpostModel: Model<NewPostDocument>){}
  
  async findAll(){
    return await this.newpostModel.find().exec();
  }  

    
  async createNewPost(newpost: NewPost){
    let createNewPost = new this.newpostModel(newpost);
    return await createNewPost.save();    
  }

}
