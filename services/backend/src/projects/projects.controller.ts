import {Controller, Get, Post} from '@nestjs/common'

@Controller('projects')
export class ProjectsController {
    @Get()
    findAll():string{
        return 'projects'
    }
}