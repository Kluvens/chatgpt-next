/*
  Warnings:

  - You are about to drop the column `refreshToken` on the `Account` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Account" DROP COLUMN "refreshToken",
ADD COLUMN     "id_token" TEXT,
ADD COLUMN     "refresh_token" TEXT;
