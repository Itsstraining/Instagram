import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { User } from 'src/schemas/user.schema';
import { UserService } from '../../services/user/user.service'
@Controller('user')
export class UserController {

    constructor(private UserService: UserService) { }

    @Post('register')
    createUser(@Body() user: any) {

        const _user: User = {
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
        }

        if (user.displayName == null || user.displayName == "") {
            _user.displayName = this.refillDisplayName(user.email);
        }

        return this.UserService.createUser(_user);
    }

    refillDisplayName(email: string) {
        let arr = email.split("@");
        return arr[0];
    }

    @Get('profile/:email')
    getUserByEmail(@Param('email') email: string) {
        return this.UserService.getUserByEmail(email);
    }

    @Get('search')
    searchUser(@Query('keyword') keyword) {
        return this.UserService.searchUser(keyword);
    }

    @Get('get-all')
    getAll() {
        return this.UserService.getUsers();
    }

    @Get("suggestion")
    getSuggestion() {
        return this.UserService.getSuggestion();
    }

    @Put("follow")
    follow(@Body() body) {
        return this.UserService.follow(body.userId, body.followId);
    }

    @Put("unfollow")
    unfollow(@Body() body) {
        return this.UserService.unfollow(body.userId, body.followId);
    }

}
