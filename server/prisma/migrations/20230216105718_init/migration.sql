-- DropIndex
DROP INDEX `Sales_productId_fkey` ON `Sales`;

-- DropIndex
DROP INDEX `Sales_userId_fkey` ON `Sales`;

-- AddForeignKey
ALTER TABLE `Sales` ADD CONSTRAINT `Sales_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Sales` ADD CONSTRAINT `Sales_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Product`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
