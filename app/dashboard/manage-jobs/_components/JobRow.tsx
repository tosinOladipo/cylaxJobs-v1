import { Button } from "@/components/ui/button";
import {
  Clock,
  Eye,
  Headset,
  LocateIcon,
  MapPin,
  PenLine,
  Trash,
  Wallet,
} from "lucide-react";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";

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
    <section className="grid lg:grid-cols-6 gap-2 px-4 py-6 text-sm border-b-1 border-gray-200  items-center">
      <div className="col-span-2 capitalize flex flex-col gap-1">
        <h4 className="font-semibold">{jobTitle}</h4>
        <div className="flex gap-2 text-xs text-gray-500">
          <article className="flex gap-1 items-center">
            <MapPin size={15} />
            {jobLocation}
          </article>
          <article className="flex gap-1 items-center">
            <Clock size={15} />
            {jobType}
          </article>
          <article className="flex gap-1 items-center">
            <Wallet size={15} />
            NGN {salary}
          </article>
        </div>
      </div>
      <div className="col-span-4 grid lg:grid-cols-4 gap-2  items-center">
        <span className="col-span-1 capitalize">4 applications</span>
        <span className="col-span-1 capitalize">{date}</span>
        <span className="col-span-1 capitalize">active</span>
        <span className="col-span-1 capitalize flex gap-2">
          <Button
            size="icon"
            className="bg-blue-100 text-blue-600 cursor-pointer hover:bg-blue-600 hover:text-white"
          >
            <Eye />
          </Button>
          <Button
            size="icon"
            className="bg-blue-100  text-blue-600 cursor-pointer"
          >
            <PenLine />
          </Button>
          <Button
            size="icon"
            className="bg-blue-100  text-blue-600 cursor-pointer"
          >
            <Trash />
          </Button>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                size="icon"
                className="bg-blue-100  text-blue-600 cursor-pointer"
                asChild
              >
                <Link href="/dashboard/interviews/create-interview/abc"><Headset /></Link>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p className="capitalize">Create an interview</p>
            </TooltipContent>
          </Tooltip>
        </span>
      </div>
    </section>
  );
};

export default JobRow;
