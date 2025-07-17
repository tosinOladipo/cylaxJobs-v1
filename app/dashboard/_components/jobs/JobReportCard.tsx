import React from 'react'

const JobReportCard = ({jobTitle, jobType, jobDesc, date} : {jobTitle : string, jobType : string, jobDesc : string, date : string}) => {
  return (
    <div className='p-4 flex flex-col gap-2 text-sm border-b-1 border-gray-200 bg-gray-50'>
        <h4 className='font-semibold'>{jobTitle}</h4>
        <div className='flex gap-3 text-xs'>
            <div className='flex gap-2 text-xs text-orange-300'>{date}</div>
            <div className='flex gap-2 font-medium text-blue-300'>{jobType}</div>
        </div>
        <p className='text-xs mb-2 text-gray-500'>{jobDesc}</p>
        <div className='flex gap-3 text-xs'>
            <div className='flex gap-2'>20 views</div>
            <div className='flex gap-2'>32 applications</div>
            <div className='flex gap-2'>14 Interviews</div>
        </div>
    </div>
  )
}

export default JobReportCard