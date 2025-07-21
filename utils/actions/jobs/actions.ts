"use server";

import { currentUser } from "@clerk/nextjs/server";
import { prisma } from "../../db";
import { createAndEditJobSchema, CreateAndEditJobType } from "@/utils/schema";
import { JobType } from "@/utils/types";


const getAuthUser = async () => {
  const user = await currentUser();
  if (!user) {
    throw new Error("You must be logged in to access this route");
  }
  return user;
};


export async function createJobAction(
  values: CreateAndEditJobType
): Promise<JobType | null> {
  const user = await getAuthUser();
  try {
    // Validate the values on the backend;
    createAndEditJobSchema.parse(values);
    const job: JobType = await prisma.job.create({
      data: {
        ...values,
      },
    });
    return job
  } catch (error) {
    console.error(error);
    return null;
  }
}


export const fetchJobsAction = async (companyId: string) => {
  const user = await currentUser();

  if (!user) {
    return null;
  }
  try {
    const jobs: JobType[] | null = await prisma.job.findMany({
      where: {
        companyId: companyId
      }
    });
    if (!jobs) {
      return null;
    }
    return jobs
  } catch (error) {
    return null;
  }
};