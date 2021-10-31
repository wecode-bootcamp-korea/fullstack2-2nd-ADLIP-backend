/*
  Warnings:

  - Added the required column `title` to the `limited_period_discount_products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `monthly_theme_products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `limited_period_discount_products` ADD COLUMN `title` VARCHAR(100) NOT NULL;

-- AlterTable
ALTER TABLE `monthly_theme_products` ADD COLUMN `title` VARCHAR(100) NOT NULL;

-- AlterTable
ALTER TABLE `product_options` MODIFY `start_at` TIME NOT NULL;
