import { Injectable } from "@nestjs/common";
import { Notes } from "generated/prisma/browser";
import { not } from "rxjs/internal/util/not";
import prisma from "src/database/Prisma";

@Injectable()
export class NotesService {
    
    browseProjectNotes(projectUuid: string): Promise<Notes[]|null>{
        return prisma.notes.findMany({
            where:{
                projectId: projectUuid,
            }
        })
    }

    readNote(noteUuid: string): Promise<Notes|null>{
        return prisma.notes.findFirst({
            where:{
                idNotes: noteUuid,
            }
        })
    }

    editNote(noteUuid:string, noteName:string, noteContent:string): Promise<Notes|null>{
        return prisma.notes.update({
            where:{
                idNotes: noteUuid
            },
            data:{
                name: noteName,
                content: noteContent,
            }
        })
    }

    addNote(noteName:string, noteContent:string, projectUuid: string): Promise<Notes|null>{
        return prisma.notes.create({
            data:{
                name: noteName,
                content: noteContent,
                updateAt: Date.now().toString(),
                description: '',
                projectId: projectUuid,
            }
        })
    }

    deleteNote(projectUuid: string, noteUuid: string){
        return prisma.notes.delete({
            where:{
                idNotes: noteUuid,
                projectId: projectUuid,
            }
        })
    }

}