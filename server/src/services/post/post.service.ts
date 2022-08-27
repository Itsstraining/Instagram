import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Post, PostDocument, PostSchema } from '../../schemas/post.schema';

@Injectable()
export class PostService {

    constructor(
        // @InjectModel(Post.name) private postModel: Model<PostDocument>
        @InjectModel(Post.name) private postModel: Model<PostDocument>
        ) { }

  async getAllPost() {
    // try {
    //   return await this.postlModel.find();
    // } catch (error) {
    //   return new HttpException(error.message, HttpStatus.BAD_REQUEST);
    // }
  }

  async getPostById(id: string) {
    // try {
    //   const post = await this.postlModel.findById(id);
    //   if (!post) {
    //     throw new HttpException('this post not exist', HttpStatus.BAD_REQUEST);
    //   }
    //   return post;
    // } catch (error) {
    //   return new HttpException(error.message, HttpStatus.BAD_REQUEST);
    // }
  }

  async createPost(post: Post) {
    // try {
    //   let createPost = new this.postlModel(post);
    //   return await createPost.save();
    // } catch (error) {
    //   return new HttpException(error.message, HttpStatus.BAD_REQUEST);
    // }
  }

  async deletePost(id: string) {
    // return await this.postlModel.findByIdAndDelete(id);
  }
}
