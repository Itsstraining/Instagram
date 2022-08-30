import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from '../../services/user/user.service'
@Controller('user')
export class UserController {

    constructor(private UserService:UserService){}

    @Get()
    getUsers(){
        return this.UserService.getUsers();
    }

    @Post('register')
    createUser(@Body() user: any){
        return this.UserService.createUser(user);
    }


}
