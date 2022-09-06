import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import mongoose, { Document } from 'mongoose';


export type PostDocument = Post & Document;

@Schema({
    timestamps: true
})
export class Post {

    @Prop({
        required: true,
    })
    content: string;

    @Prop({
        default: Array
    })
    comments: [];

    @Prop({
        default: Array
    })
    likes: [];

    @Prop({
        default: "public"
    })
    status: string;

    @Prop({
        required: true,
    })
    image: string

    @Prop({
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    })
    userId: string;
}
export const PostSchema = SchemaFactory.createForClass(Post);

