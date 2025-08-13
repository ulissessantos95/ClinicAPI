/*
  Warnings:

  - You are about to drop the column `observacai` on the `consulta` table. All the data in the column will be lost.
  - Added the required column `observacao` to the `Consulta` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `consulta` DROP COLUMN `observacai`,
    ADD COLUMN `observacao` VARCHAR(191) NOT NULL;
