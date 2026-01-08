import {Body, Controller, Get, Param, Post, Delete} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from 'generated/prisma/browser';

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService){}

    @Get('read/:uuid')
    readUser(@Param('uuid') uuid:string): Promise<User|null>{
        return this.usersService.readUser(uuid);
    }

    @Post('create')
    createUser(@Body() body:{lastName:string, firstName:string, username:string, mail:string, password:string}): Promise<User|null>{
        return this.usersService.addUser(body.lastName, body.firstName, body.username, body.mail, body.password)    
    }

    @Delete('delete/:uuid')
    softDeleteUser(@Param('uuid') uuid:string):Promise<User|null>{
        return this.usersService.softDeleteUser(uuid);
    }

}