-- AlterTable
ALTER TABLE `product_options` MODIFY `start_at` TIME NOT NULL;

-- AddForeignKey
ALTER TABLE `comment_images` ADD CONSTRAINT `comment_images_comment_id_fkey` FOREIGN KEY (`comment_id`) REFERENCES `comments`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
