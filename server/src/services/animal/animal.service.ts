import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Animal, AnimalDocument, AnimalSchema } from '../../schemas/animal.schema';

@Injectable()
export class AnimalService {
    constructor(@InjectModel(Animal.name) private animalModel: Model<AnimalDocument>) { }

    async getAnimals() {    
        try {
            return await this.animalModel.find();
        } catch (error) {
            return new HttpException(error.message, HttpStatus.BAD_REQUEST);
        }
    }
}


