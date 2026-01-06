import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProjectsModule } from './projects/project.module';
import { NotesModules } from './notes/notes.module';
import { LinksModules } from './links/links.module';
import { TasksModule } from './tasks/tasks.module';
import { CategoriesController } from './categories/categories.controller';

@Module({
  imports: [UsersModule,
    ProjectsModule,
    NotesModules,
    LinksModules,
    TasksModule,
    CategoriesController],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
