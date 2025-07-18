'use server';

import prisma from '@/utils/db';
import { auth } from "@clerk/nextjs/server";

import { redirect } from 'next/navigation';
import { Prisma } from '@prisma/client';
import dayjs from 'dayjs';
import { UserType } from '@/utils/types';
import { createAndEditUserSchema, CreateAndEditUserType } from '@/utils/schema';


async function authenticateAndRedirect(): Promise<string | null> {
  const { userId } = await auth()
  if (!userId) {
    redirect('/');
  }
  return userId;
}

export async function createUserAction(
  values: CreateAndEditUserType
): Promise<UserType | null> {
  
  const userId = authenticateAndRedirect();
  try {
    // Validate the values on the backend;
    createAndEditUserSchema.parse(values);
    const user: UserType = await prisma.user.create({
      data: {
        ...values,

        clerkId: userId,
      },
    });
    return user;
  } catch (error) {
    console.error(error);
    return null;
  }
}