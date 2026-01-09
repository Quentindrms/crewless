import { Injectable } from "@nestjs/common";
import { Projects } from "generated/prisma/browser";
import prisma from "src/database/Prisma";

@Injectable()
export class ProjectsService{

    browseUserProject(userUuid: string): Promise<Projects[]|null>{
        return prisma.projects.findMany({
            where: {
                userId: userUuid,
            }
        }) 
    }

    readUserProject(userUuid: string, projectUuid): Promise<Projects|null>{
        return prisma.projects.findFirst({
            where:{
                userId: userUuid,
                idProject: projectUuid
            }
        })
    }

    createUserProject(userUuid: string, name:string, projectStatus: string, projectType: string, passedTime: number, description: string, categoryId: string): Promise<Projects|null>{
        return prisma.projects.create({
            data : {
                userId: userUuid,
                name: name,
                status: projectStatus,
                type: projectType,
                passedTime: passedTime,
                description: description,
                categoryId: categoryId,
            }
        })
    }

    softDeleteUserProject(userUuid, projectUuid): Promise<Projects|null>{
        return prisma.projects.update({
            where:{
                userId: userUuid,
                idProject: projectUuid,
            },
            data:{
                isDeleted:true,
            }
        })
    }
}