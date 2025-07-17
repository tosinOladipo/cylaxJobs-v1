import { BriefcaseBusiness, Building, FileText, Headset, LayoutGrid, Users, } from "lucide-react";

type NavLink = {
  icon : React.ReactNode  
  href: string;
  label: string;
};

const companylinks: NavLink[] = [
  
  {
    icon: <LayoutGrid size={15} />,
    href: '/dashboard',
    label: 'Dashboard',
  },
  {
    icon: <BriefcaseBusiness size={15}/>,
    href: '/manage-jobs',
    label: 'Manage jobs',
  },
  {
    icon: <Headset size={15}/>,
    href: '/created-interviews',
    label: 'Interviews',
  },
   {
    icon: <Users size={15}/>,
    href: '/all-applicants',
    label: 'All applicants',
  },
  {
    icon: <FileText size={15}/>,
    href: '/shortlisted-resumes',
    label: 'Shortlisted resumes',
  },
  {
    icon: <Building size={15}/>,
    href: '/company-profile',
    label: 'Company profile',
  },

];

export default companylinks;