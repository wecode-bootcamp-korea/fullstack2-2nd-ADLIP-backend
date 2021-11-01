/*
  Warnings:

  - Added the required column `sns_id` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `users_email_password_nickname_idx` ON `users`;

-- AlterTable
ALTER TABLE `product_options` MODIFY `start_at` TIME NOT NULL;

-- AlterTable
ALTER TABLE `users` ADD COLUMN `sns_id` VARCHAR(100) NOT NULL,
    MODIFY `social_platform` VARCHAR(100) NOT NULL DEFAULT 'local';

-- CreateIndex
CREATE INDEX `users_email_password_nickname_sns_id_idx` ON `users`(`email`, `password`, `nickname`, `sns_id`);
