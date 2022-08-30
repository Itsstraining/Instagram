import { Controller, Get, Request, Body, Post, Delete, Query, Put } from '@nestjs/common';
import { AnimalService } from 'src/services/animal/animal.service';

@Controller('animal')
export class AnimalController {
    constructor(private animalService: AnimalService) { }

    

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
