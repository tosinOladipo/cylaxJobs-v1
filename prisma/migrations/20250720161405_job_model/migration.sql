-- CreateTable
CREATE TABLE "jobs" (
    "id" TEXT NOT NULL,
    "companyId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "jobTitle" TEXT NOT NULL,
    "jobDesc" TEXT NOT NULL,
    "jobindustry" TEXT NOT NULL,
    "jobCategory" TEXT NOT NULL,
    "jobType" TEXT NOT NULL,
    "experience" TEXT NOT NULL,
    "qualification" TEXT NOT NULL,
    "salary" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "featured" BOOLEAN NOT NULL,
    "endDate" TEXT NOT NULL,
    "job_userId" TEXT NOT NULL,

    CONSTRAINT "jobs_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "jobs_companyId_idx" ON "jobs"("companyId");

-- AddForeignKey
ALTER TABLE "jobs" ADD CONSTRAINT "jobs_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "companies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
