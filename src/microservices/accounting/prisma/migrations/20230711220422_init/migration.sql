-- CreateTable
CREATE TABLE "User" (
    "publicKey" VARCHAR(786) NOT NULL,
    "privateKeydigest" VARCHAR(128) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_publicKey_key" ON "User"("publicKey");
