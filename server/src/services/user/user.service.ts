import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/schemas/user.schema';

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name) private userModel: Model<UserDocument>
    ){}

    async getUsers(){
        return await this.userModel.find();
    }

    async createUser(user:any){
        const newUser = new this.userModel(user);
        return await newUser.save()
    }
}

