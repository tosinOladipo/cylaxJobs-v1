export type UserType = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  clerkId: string;
  firstname: string;
  lastname: string;
  email: string;
  phonenumber: string;
  employer: boolean;
};

export type profileType = {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
};

export type CommpanyType = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  companyName: string;
  companyLogo?: string;
  description: string;
  email: string;
  phonenumber: string;
  location: string;
};

export type RoleType = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  email: string;
  userRole: string;
  companyId: string;
  userId: string;
};

export type JobType = {
  id: string;
  companyId: string;
  jobTitle: string;
  jobDesc: string;
  jobindustry: string;
  jobCategory: string;
  jobType: string;
  experience: string;
  qualification: string;
  salary: string;
  email: string
  location: string;
  state: string;
  featured: boolean;
  endDate: string;
};


export enum qualification {
  BSc = 'BSc',
  OND = 'OND',
  HND = 'HND',
  Masters = 'Masters',
};

export enum jobPostType {
  Fulltime = 'Fulltime',
  Contract = 'Contract',
  Intern = 'Intern',
}