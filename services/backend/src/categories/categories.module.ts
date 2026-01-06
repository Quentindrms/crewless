import { Module } from "@nestjs/common";
import { UsersController } from "src/users/users.controller";
import { UsersService } from "src/users/users.service";
import { CategoriesController } from "./categories.controller";
import { CategoriesService } from "./categories.service";

@Module({
    imports: [],
    controllers: [CategoriesController],
    providers: [CategoriesService]
})
export class CategoriesModule {}