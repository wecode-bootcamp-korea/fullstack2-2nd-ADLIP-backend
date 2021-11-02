/*
  Warnings:

  - Added the required column `product_id` to the `comments` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `comments` ADD COLUMN `product_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `product_options` MODIFY `start_at` TIME NOT NULL;

-- AddForeignKey
ALTER TABLE `comments` ADD CONSTRAINT `comments_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `products`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
