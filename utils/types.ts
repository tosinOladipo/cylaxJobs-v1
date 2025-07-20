export type UserType = {
  id: string;
  clerkId: string;
  firstname: string;
  lastname: string;
  email: string;
  phonenumber: string;
  employer: boolean;
  roles?: RoleType[] | null
};

export type profileType = {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  companyId?: string;
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
  jobIndustry: string;
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