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



}