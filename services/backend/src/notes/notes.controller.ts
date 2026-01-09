import {Controller, Get} from '@nestjs/common'
import { NotesService } from './notes.service'

@Controller('notes')
export class NotesController {

    @Get('/browse/:')
    browseAllNotes(){

    }
}