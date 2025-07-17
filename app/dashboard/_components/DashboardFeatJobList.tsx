import React from 'react'
import JobReportCard from './jobs/JobReportCard'
import jobs from '@/utils/data/jobs'

const DashboardFeatJobList = () => {
  return (
    <div className='flex flex-col'>
        {jobs.slice(0, 2).map((job) => (
            <JobReportCard key={job.id} jobTitle={job.jobTitle} jobDesc={job.jobDesc} jobType={job.jobType} date={job.date}/>
        ))}
    </div>
  )
}

export default DashboardFeatJobList