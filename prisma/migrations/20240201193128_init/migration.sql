-- CreateTable
CREATE TABLE "Servicios" (
    "idCatTipoServicio" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "service" TEXT NOT NULL,
    "description" TEXT NOT NULL DEFAULT ''
);
