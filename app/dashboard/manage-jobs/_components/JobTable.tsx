"use client";
import React from "react";
import JobRow from "./JobRow";
import jobs from "@/utils/data/jobs";
import { useQuery } from "@tanstack/react-query";
import { fetchJobsAction } from "@/utils/actions/jobs/actions";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";

const JobTable = () => {

  const { user } = useSelector((state : RootState) => state.user);

  const { data, isPending } = useQuery({
      queryKey: ["jobs"],
      queryFn: () => fetchJobsAction(user?.companyId ?? ""),
    });

  return (
    <div className="pb-4">
      <section className="grid lg:grid-cols-6 gap-2 px-4 py-4 mb-4 bg-blue-100 text-blue-600 mt-6 text-sm rounded-sm font-semibold">
        <div className="col-span-2 capitalize">Job title</div>
        <div className="col-span-4 grid lg:grid-cols-4 gap-2">
          <span className="col-span-1 capitalize">application</span>
          <span className="col-span-1 capitalize">Created & Expired</span>
          <span className="col-span-1 capitalize">status</span>
          <span className="col-span-1 capitalize">action</span>
        </div>
      </section>
      {data?.map((job) => (
          <JobRow key={job.id} jobTitle={job.jobTitle} jobLocation={job.location} jobType={job.jobType} date={job.endDate} salary={job.salary}/>
      ))}
    </div>
  );
};

export default JobTable;
