-- AlterTable
ALTER TABLE `product_options` MODIFY `start_at` TIME NOT NULL;

-- CreateIndex
CREATE INDEX `lower_regions_name_idx` ON `lower_regions`(`name`);

-- CreateIndex
CREATE INDEX `main_categories_main_category_name_idx` ON `main_categories`(`main_category_name`);

-- CreateIndex
CREATE INDEX `product_details_place_of_progress_gathering_place_idx` ON `product_details`(`place_of_progress`, `gathering_place`);

-- CreateIndex
CREATE INDEX `sub_categories_sub_category_name_idx` ON `sub_categories`(`sub_category_name`);

-- CreateIndex
CREATE INDEX `upper_regions_name_idx` ON `upper_regions`(`name`);

-- CreateIndex
CREATE INDEX `users_email_password_nickname_idx` ON `users`(`email`, `password`, `nickname`);
