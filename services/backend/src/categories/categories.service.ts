import { Injectable } from "@nestjs/common";
import { Category } from "generated/prisma/client";
import prisma from "src/database/Prisma";

@Injectable()
export class CategoriesService{

    async browseCategories():Promise<Category[]|null>{
        const data = await prisma.category.findMany();
        return data;
    }

    async readCategory(id:number):Promise<Category|null>{
        const data = await prisma.category.findUnique({
            where: {
                idCategory: id,
            }
        });
        return data;
    }

    async editCategory(id: number){

    }

    async addCategory(){

    }

    async deleteCategory(id: number){

    }



}