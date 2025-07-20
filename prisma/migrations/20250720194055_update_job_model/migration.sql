/*
  Warnings:

  - You are about to drop the column `jobindustry` on the `jobs` table. All the data in the column will be lost.
  - Added the required column `jobIndustry` to the `jobs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "jobs" DROP COLUMN "jobindustry",
ADD COLUMN     "jobIndustry" TEXT NOT NULL;
