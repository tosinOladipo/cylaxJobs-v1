type jobType = {
  id: number;
  jobTitle: string;
  jobDesc: string;
  jobLocation: string;
  jobType: string;
  salary: string;
  date: string;
  company: string;
};

const jobs: jobType[] = [
  {
    id: 1,
    jobTitle: "Digital marketer",
    jobDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
    jobLocation: "Lekki, Lagos",
    jobType: 'Contract',
    salary: "120,000",
    date: "7days ago",
    company: " Chella",
  },
  {
    id: 2,
    jobTitle: "Frontdesk office",
    jobDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
    jobLocation: "Gbagada, Lagos",
    jobType: 'Fulltime',
    salary: "120,000",
    date: "3hrs ago",
    company: "Google",
  },
  {
    id: 3,
    jobTitle: "Sales agent",
    jobDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
    jobLocation: "Sango Ota, Ogun state",
    jobType: 'Intern',
    salary: "120,000",
    date: "5days ago",
    company: "Samsung",
  },
  {
    id: 4,
    jobTitle: "Nurse & Mid wife",
    jobDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
    jobLocation: "Ajah",
    jobType: 'Fulltime',
    salary: "120,000",
    date: "Ihr ago",
    company: "Royan Hospital",
  },
  {
    id: 5,
    jobTitle: "Customer service",
    jobDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
    jobLocation: "Ikeja, Lagos",
    jobType: 'Contract',
    salary: "120,000",
    date: "30mins ago",
    company: "Delta Airline",
  },
  {
    id: 6,
    jobTitle: "Direct sales agent",
    jobDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
    jobLocation: "Ibadan, Oyo state",
    jobType: 'Intern',
    salary: "120,000",
    date: "2days ago",
    company: "UBA",
  },
];

export default jobs;
