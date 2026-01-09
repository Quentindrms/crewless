import { Injectable } from "@nestjs/common";
import { Category } from "generated/prisma/client";
import prisma from "src/database/Prisma";

@Injectable()
export class CategoriesService{

    async browseCategories():Promise<Category[]|null>{
        const data = await prisma.category.findMany();
        return data;
    }

    async readCategory(id:string):Promise<Category|null>{
        const data = await prisma.category.findUnique({
            where: {
                idCategory: id,
            }
        });
        return data;
    }

    async editCategory(id: string){

    }

    async addCategory(categoryName:string, userUuid:string):Promise<Category|null>{
        return await prisma.category.create(
            {
                data : {
                    userId: userUuid,
                    name: categoryName,
                }
            }
        )
    }

    async deleteCategory(categoryUuid: string):Promise<Category>{
        const deleteCategory = await prisma.category.delete({
            where: {
                idCategory: categoryUuid,
            }
        }
        )
        return deleteCategory;
    }



}