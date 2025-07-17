import { BadgeCheck } from 'lucide-react'
import React from 'react'

const DashboardShortlistCard = () => {
  return (
    <div className=' flex items-center justify-between p-4 bg-white shadow-sm rounded-md'>
      <div className='w-[50px] h-[50px] bg-green-100 rounded-sm flex items-center justify-center text-green-500'>
        <BadgeCheck />
      </div>
      <div className='flex flex-col gap-1 text-right'>
        <h4 className='text-lg font-semibold text-green-500'>53</h4>
        <span className='text-xs text-gray-600'>Shortlists</span>
      </div>
    </div>
  )
}

export default DashboardShortlistCard