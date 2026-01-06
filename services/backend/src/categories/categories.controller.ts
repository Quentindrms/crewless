import {Controller, Get, Post} from "@nestjs/common";

@Controller('categories')
export class CategoriesController{
    @Get()
    findAll(): string{
        return 'categories'
    }
}