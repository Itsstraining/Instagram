import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { NewPost, NewPostDocument } from 'src/schemas/newpost.schema';
import { User, UserDocument } from 'src/schemas/user.schema';

@Injectable()
export class NewPostService {
    constructor(@InjectModel(NewPost.name) private newpostModel: Model<NewPostDocument>,
                @InjectModel(User.name) private userModel: Model<UserDocument>
                 ){}
  
  async findAll(){
    return await this.newpostModel.find().exec();
  }  
  async findById(id: string){
    return await this.newpostModel.findById(id).populate("userId", '-id',this.userModel).exec();
  }
 


    
  async createNewPost(newpost: NewPost){
    let createNewPost = new this.newpostModel(newpost);
    return await createNewPost.save();    
  }

}
