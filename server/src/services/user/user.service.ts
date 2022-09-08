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

    async searchUser(keyword: string) {
        try {
            return await this.userModel.find({
                email: {
                    $regex: keyword
                }
            }).select("displayName email photoURL")

        } catch (error) {
            return error;
        }
    }

    async getUsers() {
        try {
            return await this.userModel.find().select("displayName email photoURL")

        } catch (error) {
            return error;
        }
    }

    async getSuggestion() {
        try {

            var random = Math.floor(Math.random() * 5);

            let users = await this.userModel.
                find()
                // .skip(random)
                .limit(5)
                .select("displayName email photoURL");
            return users;
        } catch (error) {

        }
    }

    async follow(userId: string, followId: string) {
        try {

            await Promise.all([this.userModel.findOneAndUpdate({
                email: userId
            }, {
                $push: {
                    followings: followId
                }
            }),
            this.userModel.findOneAndUpdate({
                email: followId
            }, {
                $push: {
                    followers: userId
                }
            })])

            return {
                message: "Follow success"
            }
        } catch (error) {
            return error;
        }
    }

    async unfollow(userId: string, followId: string) {
        try {
            // const user = await this.userModel.findById(userId);
            // const follow = await this.userModel.findById(followId);
            // if (!user || !follow) {
            //     throw new HttpException('User is not exits', HttpStatus.BAD_REQUEST);
            // }
            // user.following.pull(followId);
            // follow.followers.pull(userId);
            // await user.save();
            // await follow.save();
            return {
                message: "Unfollow success"
            }
        } catch (error) {
            return error;
        }
    }


}

