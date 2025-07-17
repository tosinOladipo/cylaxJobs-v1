import Container from "@/components/container";
import React from "react";
import JobInfo from "../_components/jobInfo";
import { Button } from "@/components/ui/button";
import { FaRegHeart } from "react-icons/fa6";
import JobDescDetails from "../_components/JobDescDetails";
import JobDescSidebar from "../_components/JobDescSidebar";

function JobDetailPage() {
  return (
    <section>
      <div className="bg-[url(/heroBg.png)] bg-center bg-cover py-20">
        <Container>
          <div className="w-full grid lg:grid-cols-4 gap-4 mt-20">
            <div className="col-span-1 lg:col-span-3">
              <JobInfo />
            </div>
            <div className="col-span-1 flex gap-3 items-center lg:justify-end">
              <Button>Apply for job</Button>
              <Button
                size="icon"
                className="rounded-full bg-blue-400 cursor-pointer"
              >
                <FaRegHeart />
              </Button>
            </div>
          </div>
        </Container>
      </div>
      <Container>
        <article className=" grid lg:grid-cols-4 gap-4 mt-4">
          <div className="col-span-1 lg:col-span-3">
            <JobDescDetails />
          </div>
          <div className="col-span-1 lg:col-span-1">
            <JobDescSidebar />
          </div>
        </article>
      </Container>
    </section>
  );
}

export default JobDetailPage;
