'use server';

import { currentUser } from "@clerk/nextjs/server";

import { UserType } from '@/utils/types';
import { createAndEditUserSchema, CreateAndEditUserType } from '@/utils/schema';
import { prisma } from "../../db";


const getAuthUser = async () => {
  const user = await currentUser();
  if (!user) {
    throw new Error("You must be logged in to access this route")
  }
  return user;
}


export async function createUserAction(
  values: CreateAndEditUserType
): Promise<UserType | null> {
  
  const user = await getAuthUser();
  try {
    // Validate the values on the backend;
    createAndEditUserSchema.parse(values);
    const profile: UserType = await prisma.user.create({
      data: {
        ...values,
        clerkId: user.id,
      },
    });
    return profile;
  } catch (error) {
    console.error(error);
    return null;
  }
}



export const fetchUserInfo = async () => {
  const user = await currentUser();

  if (!user) {
    return null;
  }
  try {
    const userInfo: UserType | null = await prisma.user.findUnique({
      where: {
        clerkId: user.id
      }, include: {
        roles: true,
      }
    });
    if (!userInfo) {
      return null;
    }
    const {id, firstname, lastname, email, roles} = userInfo;
    const companyId = userInfo?.roles?.[0]?.companyId
    return {id, firstname, lastname, email, roles, companyId}
  } catch (error) {
    return null;
  }
};
