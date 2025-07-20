import { Button } from '@/components/ui/button'
import React from 'react'
import JobTable from './_components/JobTable'
import DashboardTitle from '../_components/DashboardTitle'
import Link from 'next/link'

const ManageJobs = () => {
  return (
    <>
    <DashboardTitle pageTitle='Manage jobs' pageDesc='Ready to jump back in'/>
      <div className='w-full bg-white rounded-md shadow-md p-5 mt-4'>
            <div className='flex justify-between items-center'>
                <h3 className='font-bold'>My job listings</h3>
                <div className='flex gap-3'>
                    <Button variant='outline' className='capitalize'>30 Days</Button>
                     <Button asChild className='capitalize'><Link href="/dashboard/manage-jobs/add-job">Add new job</Link></Button>
                </div>
            </div>
        <JobTable/>    
      </div>
    </>
  )
}

export default ManageJobs