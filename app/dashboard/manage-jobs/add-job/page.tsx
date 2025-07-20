import React from 'react'
import DashboardTitle from '../../_components/DashboardTitle'
import { Banknote, Briefcase, CircleCheck } from 'lucide-react'
import JobForm from '../_components/JobForm'

import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

const AddJob = () => {
  const queryClient = new QueryClient();
  return (
    <>
     <DashboardTitle pageTitle='Post job' pageDesc='Ready to jump back in'/>
     <section className='bg-white p-4 mt-4 rounded-md flex flex-col gap-3'>
        <h2 className='font-semibold capitalize'>Post a job</h2>
        <div className='flex gap-8 my-6 text-gray-500'>
            <div className='flex gap-2 items-center'>
                <div className='h-[70px] w-[70px] rounded-full bg-orange-100 text-orange-700 flex items-center justify-center'><Briefcase size={30}/></div>
                <h3 className='capitalize'>Job details</h3>
            </div>
            <div className='flex gap-2 items-center'>
                <div className='h-[70px] w-[70px] rounded-full bg-blue-100 text-blue-700 flex items-center justify-center'><Banknote size={30}/></div>
                <h3 className='capitalize'>Payment & Package</h3>
            </div>
            <div className='flex gap-2 items-center'>
                <div className='h-[70px] w-[70px] rounded-full bg-green-100 flex items-center justify-center  text-green-700'><CircleCheck size={30}/></div>
                <h3 className='capitalize'>Confirmation</h3>
            </div>
        </div>
        <HydrationBoundary state={dehydrate(queryClient)}>
          <JobForm/>
        </HydrationBoundary>
     </section>
    </>
  )
}

export default AddJob