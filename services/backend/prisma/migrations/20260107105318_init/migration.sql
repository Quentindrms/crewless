-- CreateTable
CREATE TABLE "user" (
    "id_user" TEXT NOT NULL,
    "last_name" VARCHAR(100) NOT NULL,
    "first_name" VARCHAR(100) NOT NULL,
    "username" VARCHAR(100) NOT NULL,
    "mail" VARCHAR(255) NOT NULL,
    "hashed_password" VARCHAR(250) NOT NULL,
    "is_deleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id_user")
);

-- CreateTable
CREATE TABLE "category" (
    "id_category" INTEGER NOT NULL,
    "name" VARCHAR(100) NOT NULL,

    CONSTRAINT "category_pkey" PRIMARY KEY ("id_category")
);

-- CreateTable
CREATE TABLE "task_categories" (
    "id_task_category" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,

    CONSTRAINT "task_categories_pkey" PRIMARY KEY ("id_task_category")
);

-- CreateTable
CREATE TABLE "projects" (
    "id_project" TEXT NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "status" VARCHAR(100) NOT NULL,
    "type" VARCHAR(100) NOT NULL,
    "passed_time" INTEGER NOT NULL,
    "description" VARCHAR(1000) NOT NULL,
    "is_deleted" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,
    "user_id" TEXT NOT NULL,
    "category_id" INTEGER NOT NULL,

    CONSTRAINT "projects_pkey" PRIMARY KEY ("id_project")
);

-- CreateTable
CREATE TABLE "links" (
    "id_links" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "url" VARCHAR(500) NOT NULL,
    "is_deleted" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,
    "project_id" TEXT NOT NULL,

    CONSTRAINT "links_pkey" PRIMARY KEY ("id_links")
);

-- CreateTable
CREATE TABLE "tasks" (
    "id_task" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "description" VARCHAR(1000) NOT NULL,
    "estimed_time" INTEGER NOT NULL,
    "is_realised" BOOLEAN NOT NULL DEFAULT false,
    "is_deleted" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,
    "link_id" INTEGER NOT NULL,
    "category_id" INTEGER NOT NULL,

    CONSTRAINT "tasks_pkey" PRIMARY KEY ("id_task")
);

-- CreateTable
CREATE TABLE "notes" (
    "id_note" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "description" VARCHAR(500) NOT NULL,
    "content" VARCHAR(1000) NOT NULL,
    "is_deleted" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,
    "task_id" INTEGER,
    "project_id" TEXT NOT NULL,

    CONSTRAINT "notes_pkey" PRIMARY KEY ("id_note")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_id_user_key" ON "user"("id_user");

-- CreateIndex
CREATE UNIQUE INDEX "user_username_key" ON "user"("username");

-- CreateIndex
CREATE UNIQUE INDEX "user_mail_key" ON "user"("mail");

-- CreateIndex
CREATE UNIQUE INDEX "category_id_category_key" ON "category"("id_category");

-- CreateIndex
CREATE UNIQUE INDEX "task_categories_id_task_category_key" ON "task_categories"("id_task_category");

-- CreateIndex
CREATE UNIQUE INDEX "projects_id_project_key" ON "projects"("id_project");

-- CreateIndex
CREATE INDEX "projects_user_id_idx" ON "projects"("user_id");

-- CreateIndex
CREATE INDEX "projects_category_id_idx" ON "projects"("category_id");

-- CreateIndex
CREATE INDEX "projects_is_deleted_idx" ON "projects"("is_deleted");

-- CreateIndex
CREATE INDEX "projects_status_idx" ON "projects"("status");

-- CreateIndex
CREATE UNIQUE INDEX "links_id_links_key" ON "links"("id_links");

-- CreateIndex
CREATE INDEX "links_project_id_idx" ON "links"("project_id");

-- CreateIndex
CREATE INDEX "links_is_deleted_idx" ON "links"("is_deleted");

-- CreateIndex
CREATE UNIQUE INDEX "tasks_id_task_key" ON "tasks"("id_task");

-- CreateIndex
CREATE INDEX "tasks_link_id_idx" ON "tasks"("link_id");

-- CreateIndex
CREATE INDEX "tasks_category_id_idx" ON "tasks"("category_id");

-- CreateIndex
CREATE INDEX "tasks_is_deleted_idx" ON "tasks"("is_deleted");

-- CreateIndex
CREATE INDEX "tasks_is_realised_idx" ON "tasks"("is_realised");

-- CreateIndex
CREATE UNIQUE INDEX "notes_id_note_key" ON "notes"("id_note");

-- CreateIndex
CREATE INDEX "notes_task_id_idx" ON "notes"("task_id");

-- CreateIndex
CREATE INDEX "notes_project_id_idx" ON "notes"("project_id");

-- CreateIndex
CREATE INDEX "notes_is_deleted_idx" ON "notes"("is_deleted");

-- AddForeignKey
ALTER TABLE "projects" ADD CONSTRAINT "projects_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id_user") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "projects" ADD CONSTRAINT "projects_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "category"("id_category") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "links" ADD CONSTRAINT "links_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "projects"("id_project") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tasks" ADD CONSTRAINT "tasks_link_id_fkey" FOREIGN KEY ("link_id") REFERENCES "links"("id_links") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tasks" ADD CONSTRAINT "tasks_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "task_categories"("id_task_category") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notes" ADD CONSTRAINT "notes_task_id_fkey" FOREIGN KEY ("task_id") REFERENCES "tasks"("id_task") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notes" ADD CONSTRAINT "notes_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "projects"("id_project") ON DELETE RESTRICT ON UPDATE CASCADE;
