import React from "react";
import { FiSearch } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import { PiBriefcaseBold } from "react-icons/pi";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { PiMoneyWavyBold } from "react-icons/pi";
import { MdAccessTime } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";

function JobInfo() {
  return (
    <div className="flex flex-col lg:flex-row gap-4">
      <div className="w-[100px] h-[100px]  rounded-md bg-gray-200 text-gray-200">Logo</div>
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold">Frontdesk officer</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
          <div className="col-span-1 flex items-center gap-2">
            <HiOutlineOfficeBuilding />
            Banking & Finance
          </div>
          <div className="col-span-1 flex items-center gap-2">
            <PiBriefcaseBold />
            Customer service
          </div>
          <div className="col-span-1 flex items-center gap-2">
            <GrLocation />
            Ogba, Lagos
          </div>
          <div className="col-span-1 flex items-center gap-2">
            <PiMoneyWavyBold />
            NGN 120,000
          </div>
        </div>
        <div className="flex gap-3">
          <div className="pr-3 text-sm text-orange-300 border-r-1 flex gap-2 items-center">
            <FaRegCalendarAlt />
            3days ago
          </div>
          <div className="text-sm text-gray-600 flex items-center gap-2">
            <MdAccessTime />
            Contract
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobInfo;
