import jobs from "@/utils/data/jobs";
import React from "react";
import { Button } from "@/components/ui/button";
import JobCard from "./jobCard";

function JobGrids() {
  return (
    <>
    <section className="grid lg:grid-cols-3 gap-6">
      {jobs.map((job) => (
        <JobCard
          key={job.id}
          jobTitle={job.jobTitle}
          jobDesc={job.jobDesc}
          jobLocation={job.jobLocation}
          salary={job.salary}
          date={job.date}
          company={job.company}
        />
      ))}
    </section>
    <div className="flex justify-center py-8"><Button>Pagnation</Button></div>
    </>
  )
}

export default JobGrids