/*
  Warnings:

  - You are about to drop the column `productId` on the `Sales` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Sales` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `Sales` DROP FOREIGN KEY `Sales_productId_fkey`;

-- DropForeignKey
ALTER TABLE `Sales` DROP FOREIGN KEY `Sales_userId_fkey`;

-- AlterTable
ALTER TABLE `Sales` DROP COLUMN `productId`,
    DROP COLUMN `userId`,
    ADD COLUMN `customerId` VARCHAR(191) NULL,
    ADD COLUMN `orderId` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `Sales` ADD CONSTRAINT `Sales_customerId_fkey` FOREIGN KEY (`customerId`) REFERENCES `Customer`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Sales` ADD CONSTRAINT `Sales_orderId_fkey` FOREIGN KEY (`orderId`) REFERENCES `Order`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
