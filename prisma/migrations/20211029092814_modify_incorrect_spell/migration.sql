/*
  Warnings:

  - You are about to drop the `comment_iamges` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `comment_iamges`;

-- CreateTable
CREATE TABLE `comment_images` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `comment_image_url` VARCHAR(2000) NOT NULL,
    `comment_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
