import {Controller, Get} from '@nestjs/common'

@Controller('links')
export class LinksController {
    @Get()
    findAll(): string{
        return 'links'
    }
}