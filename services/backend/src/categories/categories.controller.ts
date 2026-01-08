import {Controller, Get, Param, ParseIntPipe} from "@nestjs/common";
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
}