/*
  Warnings:

  - You are about to drop the column `enqueryId` on the `enqueries` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[parent_id]` on the table `enqueries` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `enqueries` DROP FOREIGN KEY `enqueries_enqueryId_fkey`;

-- AlterTable
ALTER TABLE `enqueries` DROP COLUMN `enqueryId`;

-- CreateIndex
CREATE UNIQUE INDEX `enqueries_parent_id_key` ON `enqueries`(`parent_id`);

-- AddForeignKey
ALTER TABLE `enqueries` ADD CONSTRAINT `enqueries_parent_id_fkey` FOREIGN KEY (`parent_id`) REFERENCES `enqueries`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
