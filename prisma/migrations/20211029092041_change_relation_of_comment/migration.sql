/*
  Warnings:

  - You are about to drop the column `commentId` on the `comments` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[parent_id]` on the table `comments` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `comments` DROP FOREIGN KEY `comments_commentId_fkey`;

-- AlterTable
ALTER TABLE `comments` DROP COLUMN `commentId`;

-- CreateIndex
CREATE UNIQUE INDEX `comments_parent_id_key` ON `comments`(`parent_id`);

-- AddForeignKey
ALTER TABLE `comments` ADD CONSTRAINT `comments_parent_id_fkey` FOREIGN KEY (`parent_id`) REFERENCES `comments`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
