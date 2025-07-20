import { Button } from "@/components/ui/button";
import { Clock, Eye, LocateIcon, MapPin, PenLine, Trash, Wallet } from "lucide-react";
import React from "react";

const JobRow = ({
  jobTitle,
  jobLocation,
  jobType,
  date,
  salary,
}: {
  jobTitle: string;
  jobLocation: string;
  jobType: string;
  date: string;
  salary: string;
}) => {
  return (
    <section className="grid lg:grid-cols-5 gap-2 px-4 py-6 text-sm border-b-1 border-gray-200  items-center">
      <div className="col-span-2 capitalize flex flex-col gap-1">
        <h4 className="font-semibold">{jobTitle}</h4>
        <div className="flex gap-2 text-xs text-gray-500">
          <article className="flex gap-1 items-center"><MapPin size={15}/>{jobLocation}</article>
          <article className="flex gap-1 items-center"><Clock size={15}/>{jobType}</article>
          <article className="flex gap-1 items-center"><Wallet size={15}/>NGN {salary}</article>
        </div>
      </div>
      <div className="col-span-3 grid lg:grid-cols-4 gap-2  items-center">
        <span className="col-span-1 capitalize">4 applications</span>
        <span className="col-span-1 capitalize">{date}</span>
        <span className="col-span-1 capitalize">active</span>
        <span className="col-span-1 capitalize flex gap-2">
          <Button size="icon" className="bg-blue-100 text-blue-600">
            <Eye />
          </Button>
          <Button size="icon" className="bg-blue-100  text-blue-600">
            <PenLine />
          </Button>
          <Button size="icon" className="bg-blue-100  text-blue-600">
            <Trash />
          </Button>
        </span>
      </div>
    </section>
  );
};

export default JobRow;
