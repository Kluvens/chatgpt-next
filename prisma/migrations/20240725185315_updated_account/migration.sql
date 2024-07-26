/*
  Warnings:

  - You are about to drop the column `accessToken` on the `Account` table. All the data in the column will be lost.
  - You are about to drop the column `accessTokenExpires` on the `Account` table. All the data in the column will be lost.
  - Added the required column `type` to the `Account` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Account" DROP COLUMN "accessToken",
DROP COLUMN "accessTokenExpires",
ADD COLUMN     "access_token" TEXT,
ADD COLUMN     "expires_at" INTEGER,
ADD COLUMN     "scope" TEXT,
ADD COLUMN     "session_state" TEXT,
ADD COLUMN     "token_type" TEXT,
ADD COLUMN     "type" TEXT NOT NULL;
