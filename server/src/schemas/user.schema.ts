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
        required: true,
        default: "https://vnn-imgs-a1.vgcloud.vn/image1.ictnews.vn/_Files/2020/03/17/trend-avatar-1.jpg"
    })
    photoURL?: string;


    @Prop({
        default: Array,
        type: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'posts'
            }
        ]
    })
    posts?: Post[]

    @Prop({
        default: Array,
        type: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'stories'
            }
        ]
    })
    stories?: Stories[]

    @Prop({
        default: Array,
    })
    followers?: User[]

    @Prop({
        default: Array
    })
    followings?: User[]
}
const user = new User();

export const UserSchema = SchemaFactory.createForClass(User);