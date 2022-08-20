import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AnimalDocument = Animal & Document;

@Schema({
    timestamps: true,
})
export class Animal {

    @Prop({
        required: true
    })
    name: string;   
   
    

}
const animal = new Animal();

export const AnimalSchema = SchemaFactory.createForClass(Animal);