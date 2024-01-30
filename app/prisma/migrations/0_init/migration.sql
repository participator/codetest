-- CreateTable
CREATE TABLE "Todo" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(100),
    "description" VARCHAR(500),
    "done" BOOLEAN NOT NULL DEFAULT false,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "dateCreated" DATE NOT NULL DEFAULT CURRENT_DATE,
    "dateModified" DATE NOT NULL DEFAULT CURRENT_DATE,

    CONSTRAINT "Todo_pkey" PRIMARY KEY ("id")
);

