import {Controller, Get, Post, Param, ParseIntPipe, Body} from "@nestjs/common";
import { CategoriesService } from "./categories.service";
import { Category } from "generated/prisma/browser";

@Controller('categories')
export class CategoriesController{
    constructor(private readonly categoriesService: CategoriesService){}

    @Get('list')
    findAll(): Promise<Category[]|null>{
        return this.categoriesService.browseCategories();
    }

    @Get('read/:id')
    findOne(@Param('id', ParseIntPipe) id:number): Promise<Category|null>{
        return this.categoriesService.readCategory(id);
    }

    @Post('create')
    async createCategorie(@Body() body:{name?:string}){
        const content = body;
        if(!content.name){
            return "null"
        }
        return this.categoriesService.addCategory(content.name);
    }
}