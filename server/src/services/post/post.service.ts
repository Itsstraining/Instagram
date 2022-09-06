import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Post, PostDocument } from 'src/schemas/post.schema';
import { User } from 'src/schemas/user.schema';

@Injectable()
export class PostService {
    constructor(
        @InjectModel(Post.name) private postModel: Model<PostDocument>,
        @InjectModel(User.name) private userModel: Model<PostDocument>,
    ) { }

    async getAllPosts() {
        try {
            return await this.postModel.find().sort({
                createdAt: -1
            }).populate('userId', 'displayName email photoURL -_id', this.userModel);
        } catch (error) {
            return new HttpException(error.message, HttpStatus.BAD_REQUEST);
        }
    }

    async createPost(post: any) {
        try {

            //CREATE POST
            let createPost = new this.postModel(post);
            //UPDATE POST IN USER
            let updatePostInUser = this.userModel.findByIdAndUpdate(
                post.userId,
                {
                    $push:
                        { posts: createPost._id }
                },
                { new: true }
            );

            await Promise.all([createPost.save(), updatePostInUser]);

            return {
                message: "Post created successfully"
            }


        } catch (error) {
            return new HttpException(error.message, HttpStatus.BAD_REQUEST);
        }
    }
}
