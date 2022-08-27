import {Prop,Schema,SchemaFactory} from '@nestjs/mongoose'
import { Document } from 'mongoose';


export type PostDocument = Post & Document;

@Schema({
    timestamps: true
})
export class Post{
    @Prop({
        required: true,
    })
    title:string;
    @Prop({
        required: true,
    })
    content:string;
    @Prop({
        required: true,
    })
    comments:[];
    @Prop({
        required: true,
    })
    likes:[];
    @Prop({
        required: true,
    })
    status:string;
    
    @Prop()
    image: string
}
export const PostSchema = SchemaFactory.createForClass(Post);

