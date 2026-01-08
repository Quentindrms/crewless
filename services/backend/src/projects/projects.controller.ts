import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common'
import { ProjectsService } from './project.service'
import { Projects } from 'generated/prisma/browser'

@Controller('projects')
export class ProjectsController {

    constructor(private readonly projectsService: ProjectsService) {}

    @Get('browse/:userUuid')
    browseUserProjects(@Param('userUuid') userUuid:string):Promise<Projects[]|null>{
        return this.projectsService.browseUserProject(userUuid);
    }

    @Get('read/:userUuid/:projectUuid')
    readUserProjects(@Param('userUuid') userUuid:string, @Param('projectUuid') projectUUid:string):Promise<Projects|null>{
        return this.projectsService.readUserProject(userUuid, projectUUid);
    }

    @Post('create')
    createUserProject(@Body() body:{userUuid:string, name:string, projectStatus:string, projectType:string, passedTime:string, description:string, categoryId: string}):Promise<Projects|null>{
        return this.projectsService.createUserProject(body.userUuid, body.name, body.projectStatus, body.projectType, parseInt(body.passedTime), body.description, parseInt(body.categoryId))
    }
}