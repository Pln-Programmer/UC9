/*
  Warnings:

  - Added the required column `perfil` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Perfil" AS ENUM ('Admin', 'Aluno');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "perfil" "Perfil" NOT NULL;
