CREATE TABLE "PC" (
    "id" SERIAL NOT NULL,
    "descripcion" TEXT NOT NULL,
    "serie" TEXT,

    CONSTRAINT "Pc_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "Software" (
    "id" SERIAL NOT NULL,
    "idpc" TEXT,

    CONSTRAINT "Software_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "Bitacora" (
    "id" SERIAL NOT NULL,
    "pcId" INTEGER NOT NULL,
    "softwareId" INTEGER NOT NULL,
    "fecha" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Bitacora_pkey" PRIMARY KEY ("id")
);


CREATE UNIQUE INDEX "PC_descripcion_key" ON "PC"("idpc");

ALTER TABLE "Software" ADD CONSTRAINT "Software_pcId_fkey" FOREIGN KEY ("ciudadanoaId") REFERENCES "Ciudadanoa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE "Software" ADD CONSTRAINT "Software_softwareId_fkey" FOREIGN KEY ("preguntaaId") REFERENCES "Preguntaa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
