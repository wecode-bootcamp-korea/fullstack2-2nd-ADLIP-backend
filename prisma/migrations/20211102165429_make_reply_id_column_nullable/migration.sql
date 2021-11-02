-- DropForeignKey
ALTER TABLE `enqueries` DROP FOREIGN KEY `enqueries_reply_id_fkey`;

-- AlterTable
ALTER TABLE `enqueries` MODIFY `reply_id` INTEGER NULL;

-- AlterTable
ALTER TABLE `product_options` MODIFY `start_at` TIME NOT NULL;

-- AddForeignKey
ALTER TABLE `enqueries` ADD CONSTRAINT `enqueries_reply_id_fkey` FOREIGN KEY (`reply_id`) REFERENCES `enqueries`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
