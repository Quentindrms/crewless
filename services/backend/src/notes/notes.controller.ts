import {Body, Controller, Get, Param, Post} from '@nestjs/common'
import { NotesService } from './notes.service'
import { Notes } from 'generated/prisma/browser'

@Controller('notes')
export class NotesController {

    constructor(private readonly notesServices: NotesService){}

    @Get('browse/:projectUuid')
    browseAllNotes(@Param('projectUuid') projectUuid:string):Promise<Notes[]|null>{
        return this.notesServices.browseProjectNotes(projectUuid)
    }

    @Get('read/:notesUuid')
    readNote(@Param('noteUuid') noteUuid:string):Promise<Notes|null>{
        return this.notesServices.readNote(noteUuid)
    }

    @Post('update')
    editNote(@Body() body:{noteUuid:string, name:string, content:string,}):Promise<Notes|null>{
        return this.notesServices.editNote(body.noteUuid, body.name, body.content);
    }

    @Post('create')
    addNote(@Body() body:{name:string, content:string, projectUuid:string}):Promise<Notes|null>{
        return this.notesServices.addNote(body.name, body.content, body.projectUuid)
    }
}