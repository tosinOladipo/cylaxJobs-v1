type candidateType = {
  id: number;
  fullname: string;
  email: string;
  phonenumber: string;
  location: string;
  state: string;
  desc: string;
  tags: string[];
};

const candidates: candidateType[] = [
  {
    id: 1,
    fullname: "Toye Briggs",
    email: "toye@mail.com",
    phonenumber: "0900000000",
    location: "Itire, Isolo",
    state: "Lagos",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
    tags: ["Design", "Marketing", "Sales"],
  },
   {
    id: 2,
    fullname: "Susan Ross",
    email: "susan@mail.com",
    phonenumber: "0800000000",
    location: "Ikeja",
    state: "Lagos",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
    tags: ["Customer support", "Communication", "Marketing"],
  },
  {
    id: 3,
    fullname: "Musa Jones",
    email: "musan@mail.com",
    phonenumber: "0700000000",
    location: "Ibadan",
    state: "Oyo",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
    tags: ["Writing", "Finance", "Risk analysis"],
  },
];

export default candidates;
