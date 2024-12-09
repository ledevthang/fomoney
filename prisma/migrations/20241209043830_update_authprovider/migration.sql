/*
  Warnings:

  - Added the required column `name` to the `season` table without a default value. This is not possible if the table is not empty.
  - Added the required column `provider` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "AuthProvider" AS ENUM ('solana', 'sonicx');

-- AlterTable
ALTER TABLE "season" ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "user" ADD COLUMN     "provider" "AuthProvider" NOT NULL;
