/*
  Warnings:

  - The primary key for the `category` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `user_id` to the `category` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "projects" DROP CONSTRAINT "projects_category_id_fkey";

-- AlterTable
ALTER TABLE "category" DROP CONSTRAINT "category_pkey",
ADD COLUMN     "user_id" TEXT NOT NULL,
ALTER COLUMN "id_category" SET DATA TYPE TEXT,
ADD CONSTRAINT "category_pkey" PRIMARY KEY ("id_category");

-- AlterTable
ALTER TABLE "projects" ALTER COLUMN "category_id" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "category" ADD CONSTRAINT "category_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id_user") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "projects" ADD CONSTRAINT "projects_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "category"("id_category") ON DELETE RESTRICT ON UPDATE CASCADE;
