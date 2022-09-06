import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Post } from 'src/schemas/post.schema';
import { User, UserDocument } from 'src/schemas/user.schema';

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name) private userModel: Model<UserDocument>,
        @InjectModel(Post.name) private postModel: Model<UserDocument>

    ) { }

    async getUsers() {
        try {
            return await this.userModel.find();
        } catch (error) {
            return error;
        }
    }

    async getUserByEmail(email: string) {
        try {
            return await this.userModel.findOne({
                email
            }).populate('posts', '-userId', this.postModel, { sort: { "createdAt": -1 } }).select({});
        } catch (error) {
            return error;
        }
    }

    async createUser(user: User) {
        try {
            const isExist = await this.userModel.findOne({
                email: user.email
            })
            if (isExist) {
                throw new HttpException('User is exits', HttpStatus.BAD_REQUEST);
            }
            const newUser = new this.userModel(user);
            return await newUser.save()

        } catch (error) {
            return error;
        }
    }

}
