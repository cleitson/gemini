-- CreateTable
CREATE TABLE `measurements` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `customer_code` VARCHAR(191) NOT NULL,
    `measure_datetime` DATETIME(3) NOT NULL,
    `measure_type` VARCHAR(191) NOT NULL,
    `image_url` VARCHAR(191) NULL,
    `measure_value` DOUBLE NULL,
    `measure_uuid` VARCHAR(191) NULL,
    `has_confirmed` BOOLEAN NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
