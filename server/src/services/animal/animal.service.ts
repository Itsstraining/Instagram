import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Animal, AnimalDocument, AnimalSchema } from '../../schemas/animal.schema';

@Injectable()
export class AnimalService {
    constructor(@InjectModel(Animal.name) private animalModel: Model<AnimalDocument>) { }


//     async create(animal: AnimalModel){
//         animal.createAt = Date.now();
//         let createdAnimal = new this.animalModel(animal);
//         await createdAnimal.save();

//     }
//     async findAll(){
//         return await this.animalModel.find().exec();
    
//     }
//     async updateAnimal(id , content:string){
//         let updateAnimal = await this.animalModel.findByIdAndDelete(id,{content :Animal})
//     }
  
//    async deleteAnimal(id:string){
//     return await this.animalModel.findByIdAndDelete(id).exec();
//    }

    async getAnimals() {    
        try {
            return await this.animalModel.find();
        } catch (error) {
            return new HttpException(error.message, HttpStatus.BAD_REQUEST);
        }
    }
}
