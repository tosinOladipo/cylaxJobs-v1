import { Briefcase, Code, Puzzle, User, UserCheck } from "lucide-react";

export type InterViewType = {
  title: string | any;
  icon: React.ReactNode;
};

const interviewTypeList: InterViewType[] = [
  
  {
    title: 'Technical',
    icon: <Code size={16}/>,
  },
  {
    title: 'Behavioural',
    icon: <User size={16}/>,
  },
  {
    title: 'Experience',
    icon: <Briefcase size={16}/>,
  },
  {
    title: 'Problem Solving',
    icon: <Puzzle size={16}/>,
  },
  {
    title: 'Leadership',
    icon: <UserCheck size={16}/>,
  },
];

export default interviewTypeList;