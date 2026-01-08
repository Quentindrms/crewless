import { Injectable } from "@nestjs/common";
import { User } from "generated/prisma/browser";
import { throwError } from "rxjs";
import prisma from "src/database/Prisma";

@Injectable()
export class UsersService {

    async readUser(uuid: string): Promise<User | null> {
        const data = await prisma.user.findUnique({
            where: {
                idUser: uuid,
            }
        })
        return data;
    }

    async editUser(uuid: string): Promise<User | null> {
        const data = await prisma.user.update({
            where: {
                idUser: uuid,
            },
            data: {

            }
        })
        return data;
    }

    async addUser(lastName: string, firstName: string, username: string, mail: string, password: string): Promise<User | null> {
        const argon2 = require('argon2');
        try {
            const hashPassword = await argon2.hash(password)

            const data = await prisma.user.create({
                data: {
                    lastName: lastName,
                    firstName: firstName,
                    username: username,
                    mail: mail,
                    hashedPassword: hashPassword,
                }
            })
            return data;
        } catch (err) {
            console.error(err);
        }
        return null;
    }



}