import jobs from "@/utils/data/jobs";
import React from "react";
import FeaturedJobCard from "./FeaturedJobCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function FeaturedJobs() {
  return (
    <>
    <section className="grid lg:grid-cols-3 gap-6">
      {jobs.map((job) => (
        <FeaturedJobCard
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
    <div className="flex justify-center py-8"><Button asChild><Link href='/jobs'>Browse all jobs</Link></Button></div>
    </>
  );
}

export default FeaturedJobs;
