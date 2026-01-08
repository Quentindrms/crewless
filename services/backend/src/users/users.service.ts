import { Injectable } from "@nestjs/common";
import { User } from "generated/prisma/browser";
import prisma from "src/database/Prisma";

@Injectable()
export class UsersService {
    
async readUser(uuid: string):Promise<User|null>{
    const data = await prisma.user.findUnique({
        where:{
            idUser: uuid,
        }
    })
    return data;
}

async editUser(uuid:string):Promise<User|null>{
    const data = await prisma.user.update({
        where:{
            idUser: uuid,
        },
        data:{

        }
    })
    return data;
}

async addUser(lastname: string, firstName: string, username: string, mail:string, password: string):Promise<User|null>{
    const data = await prisma.user.create({
        data:{
            lastName: lastname,
            firstName: firstName,
            username: username,
            mail: mail,
            hashedPassword: password,
        }
    })
    return data;
}



}