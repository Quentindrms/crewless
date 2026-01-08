import { Controller, Get, Post } from '@nestjs/common'
import { ProjectsService } from './project.service'

@Controller('projects')
export class ProjectsController {

    constructor(private readonly projectsService: ProjectsService) {}


}