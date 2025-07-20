"use server";

import { currentUser } from "@clerk/nextjs/server";

import { CommpanyType, profileType, UserType } from "@/utils/types";
import {
  createAndEditCompanySchema,
  CreateAndEditCompanyType,
} from "@/utils/schema";
import { prisma } from "../../db";
import { fetchUserInfo } from "../users/actions";

const getAuthUser = async () => {
  const user = await currentUser();
  if (!user) {
    throw new Error("You must be logged in to access this route");
  }
  return user;
};

export const createRoleAction = async (
  email: any,
  companyId: string,
  userId: any
) => {
  const role = await prisma.role.create({
    data: {
      email: email,
      userRole: "admin",
      companyId: companyId,
      userId: userId,
    },
  });
  if (!role) {
    throw new Error("You must be logged in to access this route");
  }
  return role;
};

export async function createCompanyAction(
  values: CreateAndEditCompanyType
): Promise<CommpanyType | null> {
  const user = await getAuthUser();
  try {
    // Validate the values on the backend;
    createAndEditCompanySchema.parse(values);
    const company: CommpanyType = await prisma.company.create({
      data: {
        ...values,
        companyLogo: "sample-logo",
      },
    });
    if (company) {
      const userInfo: profileType | null = await fetchUserInfo();
      await createRoleAction(userInfo?.email, company.id, userInfo?.id);
    }
    return company;
  } catch (error) {
    console.error(error);
    return null;
  }
}
