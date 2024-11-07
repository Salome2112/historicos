-- CreateTable
CREATE TABLE "Historicos" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "year" INTEGER NOT NULL,

    CONSTRAINT "Historicos_pkey" PRIMARY KEY ("id")
);
