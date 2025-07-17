import * as z from 'zod';

export const createAndEditUserSchema = z.object({
  firstname: z.string().min(2, {
    message: 'firstname must be at least 2 characters.',
  }),
  lastname: z.string().min(2, {
    message: 'lastname must be at least 2 characters.',
  }),
  email: z.string().min(2, {
    message: 'location must be at least 2 characters.',
  }),
  phonenumber: z.string().min(2, {
    message: 'phonenumber must be at least 2 characters.',
  }),
  
});

export type CreateAndEditUserType = z.infer<typeof createAndEditUserSchema>;