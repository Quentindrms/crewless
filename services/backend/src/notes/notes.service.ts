import { Injectable } from "@nestjs/common";
import { Notes } from "generated/prisma/browser";
import { not } from "rxjs/internal/util/not";
import prisma from "src/database/Prisma";

@Injectable()
export class NotesService {
    
    browseProjectNotes(userUuid: string, projectUuid: string): Promise<Notes[]|null>{
        return prisma.notes.findMany({
            where:{
                projectId: projectUuid,
            }
        })
    }

    readNote(noteId: number): Promise<Notes|null>{
        return prisma.notes.findFirst({
            where:{
                idNotes: noteId,
            }
        })
    }

    editNote(noteId:number, noteContent:string): Promise<Notes|null>{
        return prisma.notes.update({
            where:{
                idNotes: noteId
            },
            data:{
                content: noteContent,
            }
        })
    }

    addNote(noteName:string, noteContent:string, projectUuid: string): Promise<Notes|null>{
        return prisma.notes.create({
            data:{
                idNotes: 0,
                name: noteName,
                content: noteContent,
                updateAt: Date.now().toString(),
                description: '',
                projectId: projectUuid,
            }
        })
    }

    deleteNote(projectUuid: string, noteId: number){
        return prisma.notes.delete({
            where:{
                idNotes: noteId,
                projectId: projectUuid,
            }
        })
    }

}