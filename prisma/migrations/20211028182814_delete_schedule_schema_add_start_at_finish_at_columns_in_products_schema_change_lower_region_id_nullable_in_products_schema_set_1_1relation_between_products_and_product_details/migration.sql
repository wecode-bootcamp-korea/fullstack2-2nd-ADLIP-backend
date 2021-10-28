/*
  Warnings:

  - You are about to drop the column `prcie` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `schedule_id` on the `products` table. All the data in the column will be lost.
  - You are about to drop the `schedules` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[product_id]` on the table `product_details` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `finish_at` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `start_at` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `products` DROP FOREIGN KEY `products_lower_region_id_fkey`;

-- DropForeignKey
ALTER TABLE `products` DROP FOREIGN KEY `products_schedule_id_fkey`;

-- AlterTable
ALTER TABLE `products` DROP COLUMN `prcie`,
    DROP COLUMN `schedule_id`,
    ADD COLUMN `finish_at` DATETIME(3) NOT NULL,
    ADD COLUMN `price` DECIMAL(65, 30) NOT NULL,
    ADD COLUMN `start_at` DATETIME(3) NOT NULL,
    MODIFY `lower_region_id` INTEGER NULL;

-- DropTable
DROP TABLE `schedules`;

-- CreateIndex
CREATE UNIQUE INDEX `product_details_product_id_key` ON `product_details`(`product_id`);

-- AddForeignKey
ALTER TABLE `products` ADD CONSTRAINT `products_lower_region_id_fkey` FOREIGN KEY (`lower_region_id`) REFERENCES `lower_regions`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
