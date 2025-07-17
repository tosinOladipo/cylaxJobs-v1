


type CategoryType = {
  id: number;  
  icon: string;
  label: string;
  total: number;
};

const categories: CategoryType[] = [
  {
    id: 1,
    icon: '<GrMoney />',
    label: 'Banking & Finance',
    total: 12,
  },
  {
    id: 2,
    icon: '<MdOutlineRealEstateAgent />',
    label: 'Marketing',
    total: 37,
  },
  {
    id: 3,
    icon: '<GrMoney />',
    label: 'Real Estate',
    total: 17,
  },
    {
    id: 4,
    icon: '<MdHeadsetMic />',
    label: 'Sales Agent',
    total: 50,
  },
   {
    id: 5,
    icon: '<GrMoney />',
    label: 'Teller',
    total: 23,
  },
   {
    id: 6,
    icon: '<MdHeadsetMic />',
    label: 'Customer Service',
    total: 14,
  },
];

export default categories;
