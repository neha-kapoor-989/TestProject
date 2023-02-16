-- DropIndex
DROP INDEX `Sales_orderId_fkey` ON `Sales`;

-- AddForeignKey
ALTER TABLE `Sales` ADD CONSTRAINT `Sales_orderId_fkey` FOREIGN KEY (`orderId`) REFERENCES `Order`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
