import { Users } from 'lucide-react'
import React from 'react'

const DashboardApplicationCard = () => {
  return (
    <div className=' flex items-center justify-between p-4 bg-white shadow-sm rounded-md'>
      <div className='w-[50px] h-[50px] bg-red-100 rounded-sm flex items-center justify-center text-red-500'>
        <Users/>
      </div>
      <div className='flex flex-col gap-1 text-right'>
        <h4 className='text-lg font-semibold text-red-400'>105</h4>
        <span className='text-xs text-gray-600'>Applications</span>
      </div>
    </div>
  )
}

export default DashboardApplicationCard