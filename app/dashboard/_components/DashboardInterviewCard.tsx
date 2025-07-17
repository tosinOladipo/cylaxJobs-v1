import { Headset } from 'lucide-react'
import React from 'react'

const DashboardInterviewCard = () => {
  return (
   <div className=' flex items-center justify-between p-4 bg-white shadow-sm rounded-md'>
      <div className='w-[50px] h-[50px] bg-orange-100 rounded-sm flex items-center justify-center text-orange-500'>
        <Headset/>
      </div>
      <div className='flex flex-col gap-1 text-right'>
        <h4 className='text-lg font-semibold text-orange-300'>10</h4>
        <span className='text-xs text-gray-600'>Interviews</span>
      </div>
    </div>
  )
}

export default DashboardInterviewCard