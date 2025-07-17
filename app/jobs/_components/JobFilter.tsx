import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import JobCategorySelect from "./jobCategorySelect";
import IndustryCategorySelect from "./industryCategorySelect";
import { FiSearch } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import { PiBriefcaseBold } from "react-icons/pi";
import { HiOutlineOfficeBuilding } from "react-icons/hi";


function JobFilter() {
  return (
    <div className="px-6 py-8 grid lg:grid-cols-5 bg-white rounded-lg shadow-lg">
      <div className="flex items-center col-span-1 px-2 h-[50px]">
        <FiSearch />
        <Input type="text" placeholder="Enter job keywords" className="border-0" />
      </div>
      <div className="flex items-center col-span-1 border-l-1 px-2">
        <GrLocation />
        <Input type="text" placeholder="City or state" className="border-0"/>
      </div>
      <div className="flex items-center col-span-1 border-l-1 px-2">
        <PiBriefcaseBold />
        <JobCategorySelect />
      </div>
      <div className="flex items-center col-span-1 border-l-1 px-2">
        <HiOutlineOfficeBuilding />
        <IndustryCategorySelect />
      </div>
      <Button className="flex items-center col-span-1 ml-2 py-6">Find jobs</Button>
    </div>
  );
}

export default JobFilter;
