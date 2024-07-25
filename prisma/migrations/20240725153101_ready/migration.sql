/*
  Warnings:

  - Made the column `response` on table `Message` required. This step will fail if there are existing NULL values in that column.
  - Made the column `avatar` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Message" ALTER COLUMN "response" SET NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "avatar" SET NOT NULL;
