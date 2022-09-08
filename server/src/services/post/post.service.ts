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

    async getAllPosts(userFollowings: string[]) {
        try {
            return await this.postModel.aggregate(
                [
                    {
                        "$lookup": {
                            "from": "users",
                            "localField": "userId",
                            "foreignField": "_id",
                            "as": "userId"
                        }
                    },
                    {
                        $unwind: '$userId'
                    },
                    {
                        $sort: {
                            createdAt: -1
                        }
                    },
                    {
                        $match: {
                            "userId.email": {
                                $in: userFollowings
                            }
                        }
                    }
                ]
            )
            // return await this.postModel
            //     .find(
            //         {
            //             // email: {
            //             //     $eq: "trong.phamtranduc@gmail.com"
            //             // }
            //         }
            //     )
            //     .sort({
            //         createdAt: -1
            //     })
            //     .populate('userId', 'displayName email photoURL -_id', this.userModel)

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

    async likePost(postId: string, user: any) {
        try {
            let post: any = await this.postModel.findById(postId);
            let isLiked = post.likes.includes(user.email);

            if (isLiked) {
                await this.postModel.findByIdAndUpdate(
                    postId,
                    {
                        $pull:
                            { likes: user.email }
                    },
                    { new: true }
                );
            } else {
                await this.postModel.findByIdAndUpdate(
                    postId,
                    {
                        $push:
                            { likes: user.email }
                    },
                    { new: true }
                );
            }

            return {
                message: "Post liked successfully"
            }

        } catch (error) {
            return new HttpException(error.message, HttpStatus.BAD_REQUEST);
        }
    }

    async commentPost(postId: string, user: any, content: string) {
        try {
            let comment = {
                displayName: user.name,
                email: user.email,
                content,
                photoURL: user.picture
            }

            await this.postModel.findByIdAndUpdate(
                postId,
                {
                    $push:
                        { comments: comment }
                },
                { new: true }
            );

            return {
                message: "Post commented successfully"
            }

        } catch (error) {
            return new HttpException(error.message, HttpStatus.BAD_REQUEST);
        }
    }

}
