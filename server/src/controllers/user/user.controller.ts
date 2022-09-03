import { Body, Controller, Get, Post } from '@nestjs/common';
import { User } from 'src/schemas/user.schema';
import { UserService } from '../../services/user/user.service'
@Controller('user')
export class UserController {

    constructor(private UserService: UserService) { }

    @Get()
    getUsers() {
        return this.UserService.getUsers();
    }

    @Post('register')
    createUser(@Body() user: any) {
        const _user: User = {
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
        }
        return this.UserService.createUser(_user);
    }


}
