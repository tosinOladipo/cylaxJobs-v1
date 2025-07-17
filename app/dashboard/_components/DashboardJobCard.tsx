import { Briefcase } from 'lucide-react'
import React from 'react'

function DashboardJobCard() {
  return (
    <div className=' flex items-center justify-between p-4 bg-white shadow-sm rounded-md'>
      <div className='w-[50px] h-[50px] bg-blue-100 rounded-sm flex items-center justify-center text-blue-500'>
        <Briefcase/>
      </div>
      <div className='flex flex-col gap-1 text-right'>
        <h4 className='text-lg font-semibold text-blue-300'>15</h4>
        <span className='text-xs text-gray-600'>Posted jobs</span>
      </div>
    </div>
  )
}

export default DashboardJobCard