import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Post } from './post.schema';
import { Stories } from './stories.schemas';

export type UserDocument = User & Document;

@Schema({
    timestamps: true,
})
export class User {

    @Prop({
        required: true
    })
    displayName: string;

    @Prop({
        required: true
    })
    email: string;

    @Prop({
        required: true
    })
    photoURL: string;


    @Prop({
        default: Array,
        type: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'posts'
            }
        ]
    })
    posts: Post[]

    @Prop({
        default: Array,
        type: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'stories'
            }
        ]
    })
    stories: Stories[]

    @Prop({
        default: Array,
    })
    usersFollow: User[]
}
const user = new User();

export const UserSchema = SchemaFactory.createForClass(User);