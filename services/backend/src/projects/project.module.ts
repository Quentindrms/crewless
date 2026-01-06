import { Injectable, Module } from "@nestjs/common";
import { ProjectsController } from "./projects.controller";
import { ProjectsService } from "./project.service";

@Module({
    imports: [],
    controllers: [ProjectsController],
    providers: [ProjectsService],
})
export class ProjectsModule {}