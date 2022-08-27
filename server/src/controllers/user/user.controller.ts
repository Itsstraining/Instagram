import { Controller, Get } from '@nestjs/common';
import { UserService } from '../../services/user/user.service'
@Controller('user')
export class UserController {

    constructor(private UserService:UserService){}
    @Get()
    getUsers(){
        return this.UserService.getUsers();
    }
}
