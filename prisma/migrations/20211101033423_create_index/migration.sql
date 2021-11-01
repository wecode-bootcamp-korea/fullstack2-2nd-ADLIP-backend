-- AlterTable
ALTER TABLE `product_options` MODIFY `start_at` TIME NOT NULL;

-- CreateIndex
CREATE INDEX `products_name_idx` ON `products`(`name`);
