import Container from "@/components/container";
import React from "react";
import JobFilter from "./_components/JobFilter";
import JobGrids from "./_components/jobGrids";

function JobsPage() {
  return (
    <section>
      <div className="bg-[url(/heroBg.png)] bg-center bg-cover py-20">
        <Container>
          <div className="w-full flex flex-col gap-4 items-center mt-20">
            <h1 className="text-4xl font-extrabold">Find your new job</h1>
            <p className="text-lg text-blue-400">
              <span className="font-semibold">500+ Jobs</span> - <span className="text-gray-400">30 new jobs posted</span>
            </p>
            <JobFilter />
          </div>
        </Container>
      </div>
      <Container>
          <h2 className="text-2xl font-bold pt-14 text-center  text-blue-600">
            Latest Job Openings
          </h2>
          <p className="text-center text-gray-600 text-md py-3 mb-6">
            Find your deserving job to build your career
          </p>
          <JobGrids/>
        </Container>
    </section>
  );
}

export default JobsPage;
