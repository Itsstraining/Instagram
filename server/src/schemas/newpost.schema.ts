import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type NewPostDocument = NewPost & Document;

@Schema({
    timestamps: true,
})
export class NewPost {

    @Prop({
        required: true
    })
    content: string;   

    @Prop({
        required: true
    })
    photoURL: string; 
  
   

}
const user = new NewPost();

export const NewPostSchema = SchemaFactory.createForClass(NewPost);