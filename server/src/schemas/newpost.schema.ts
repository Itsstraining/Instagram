import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

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
    @Prop({
        default: Array
    })
    like: [];
    @Prop({
        default: Array
    })
    comment: [];  
    @Prop(
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:'users'
        }
    )
    userId: string;

    


  
   

}
const user = new NewPost();

export const NewPostSchema = SchemaFactory.createForClass(NewPost);