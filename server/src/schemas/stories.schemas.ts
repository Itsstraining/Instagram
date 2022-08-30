import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { ObjectId } from "mongoose";
import { UserDocument } from "./user.schema";

export type StoriesDocument = Stories & Document;

@Schema()
export class Stories{
    
    @Prop()
    image: string;
  
    @Prop({
        default: null
    })
    audio: string;

    @Prop(
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:'users'
        }
    )
    userId: string;

    @Prop({
        default: "24"
    })
    expireTime: string;
}
export const StoriesSchema = SchemaFactory.createForClass(Stories);