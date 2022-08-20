import { Controller, Get, Request, Body, Post, Delete, Query, Put } from '@nestjs/common';
import { Animal } from 'src/models/user.model';
import { AnimalService } from 'src/services/animal/animal.service';

@Controller('animal')
export class AnimalController {
    constructor(private animalService: AnimalService) { }

    // @Post('/send')
    // public async sendAnimal(@Body() animal:Animal){
    //     return await this.animalService.create(animal);
        
    // }
    // @Put('/')
    // public async updateAnimal(@Body('_id')id ,@Body('content')Animal){
    //     return await this.animalService.up

    // }
   
    // @Delete('/')
    // public async deleteAnimal(@Query("id") id:string){
    //     return await this.animalService.deleteAnimal(id);
    // }
    


    @Get('get-all')
    async getAnimals() {
        return await this.animalService.getAnimals();
    }

    @Get('example')
    getExample(@Request() p) {
        const payload = p.payload;
        console.log(payload);
        return ['Hello', 'World'];
    }

    

   
}
