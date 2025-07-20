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
   employer: z.boolean()
  
});

export type CreateAndEditUserType = z.infer<typeof createAndEditUserSchema>;



export const createAndEditCompanySchema = z.object({
  companyName: z.string().min(2, {
    message: 'company name must be at least 2 characters.',
  }),

  email: z.string().min(2, {
    message: 'email must be at least 2 characters.',
  }),
  phonenumber: z.string().min(2, {
    message: 'phonenumber must be at least 2 characters.',
  }),
  description: z.string().min(2, {
    message: 'description must be at least 2 characters.',
  }),
  location: z.string().min(2, {
    message: 'location must be at least 2 characters.',
  }),
  
});

export type CreateAndEditCompanyType = z.infer<typeof createAndEditCompanySchema>;




export const createAndEditJobSchema = z.object({
  jobTitle: z.string().min(2, {
    message: 'company name must be at least 2 characters.',
  }),
  companyId: z.string().min(2, {
    message: 'company name must be at least 2 characters.',
  }),
  jobDesc: z.string().min(2, {
    message: 'email must be at least 2 characters.',
  }),
  jobIndustry: z.string().min(2, {
    message: 'phonenumber must be at least 2 characters.',
  }),
  jobCategory: z.string().min(2, {
    message: 'description must be at least 2 characters.',
  }),
  jobType: z.string().min(2, {
    message: 'location must be at least 2 characters.',
  }),
  experience: z.string().min(2, {
    message: 'location must be at least 2 characters.',
  }),
  qualification: z.string().min(2, {
    message: 'location must be at least 2 characters.',
  }),
  salary: z.string().min(2, {
    message: 'location must be at least 2 characters.',
  }),
  email: z.string().min(2, {
    message: 'location must be at least 2 characters.',
  }),
  location: z.string().min(2, {
    message: 'location must be at least 2 characters.',
  }),
  state: z.string().min(2, {
    message: 'location must be at least 2 characters.',
  }),
  featured: z.boolean(),
  endDate: z.string().min(2, {
    message: 'location must be at least 2 characters.',
  }),
  
});

export type CreateAndEditJobType = z.infer<typeof createAndEditJobSchema>;