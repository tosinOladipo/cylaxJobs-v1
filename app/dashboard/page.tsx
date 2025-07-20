import React from "react";
import DashboardJobCard from "./_components/DashboardJobCard";
import DashboardInterviewCard from "./_components/DashboardInterviewCard";
import DashboardApplicationCard from "./_components/DashboardApplicationCard";
import DashboardShortlistCard from "./_components/DashboardShortlistCard";
import DashboardChart from "./_components/DashboardChart";
import { Button } from "@/components/ui/button";
import DashboardFeatJobList from "./_components/DashboardFeatJobList";
import DashboardFeatCandidateList from "./_components/DashboardFeatCandidateList";
import DashboardTitle from "./_components/DashboardTitle";

async function DashboardPage() {
  return (
    <>
      <DashboardTitle pageTitle='Welcome back' pageDesc='Ready to jump back in' userFirstName="Tosin"/>
      {/*Dashboar summary cards*/}
      <div className="grid lg:grid-cols-4 gap-5 pt-3">
          <DashboardJobCard/>
          <DashboardApplicationCard/>
          <DashboardInterviewCard/>
          <DashboardShortlistCard/>
      </div>


      <div className="grid lg:grid-cols-5 gap-5 mt-5">
          <div className="col-span-3 p-4 flex flex-col  bg-white rounded-sm shadow-sm">
              <aside className="flex gap-3 items-center justify-between">
                <h2 className="text-sm font-semibold">Number of applicants</h2>
                <Button variant='outline' className="text-xs">Last 30 days</Button>
              </aside>
              <DashboardChart/>
          </div>
          <div className="col-span-2 p-4 bg-white rounded-sm flex flex-col shadow-sm">
            <aside className="flex gap-3 items-center justify-between">
              <h2 className="text-sm font-semibold">Recent jobs</h2>
              <Button variant="ghost">View all</Button>
            </aside>
            <DashboardFeatJobList/>
          </div>
      </div>

      <h2 className="font-semibold text-lg py-5">Recent applicants</h2>

      <DashboardFeatCandidateList/>

    </>
  );
}

export default DashboardPage;
