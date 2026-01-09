/*
  Warnings:

  - The primary key for the `notes` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "notes" DROP CONSTRAINT "notes_pkey",
ALTER COLUMN "id_note" DROP DEFAULT,
ALTER COLUMN "id_note" SET DATA TYPE TEXT,
ADD CONSTRAINT "notes_pkey" PRIMARY KEY ("id_note");
DROP SEQUENCE "notes_id_note_seq";
