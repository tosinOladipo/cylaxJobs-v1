import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react'
import { FaRegHeart } from "react-icons/fa6";

function FeaturedJobCard({
    jobTitle, 
    jobDesc, 
    jobLocation, 
    salary, 
    date, 
    company}:
    {
    jobTitle: string, 
    jobDesc: string, 
    jobLocation: string, 
    salary: string, 
    date: string, 
    company: string} ) {
  return (
    <div className='col-span-1 flex flex-col justify-between px-6 py-6 border-1 border-gray-100 shadow-sm rounded-md'>
        <div className='flex justify-between'>
            <div className='flex gap-2 items-center'>
                 <div className='rounded-full h-[50px] w-[50px] bg-gray-100'></div>
                 <div className='fles flex-col '>
                    <h3 className='text-sm font-medium'>{company}</h3>
                    <span className='text-xs text-orange-300'>{date}</span>
                 </div>
            </div>
            <aside><FaRegHeart /></aside>
        </div>
        <article className='flex flex-col mt-2'>
            <h2 className='font-bold'>{jobTitle}</h2>
            <span className='text-xs'>{jobLocation}</span>
            <p className='text-sm py-3 text-gray-600'>{jobDesc}</p>
        </article>
        <div className='flex justify-between items-center'>
            <h4 className='text-sm font-medium'>NGN {salary} per month</h4>
            <Button asChild className='text-sm bg-blue-600'><Link href='/jobs/1'>Browse job</Link></Button>
        </div>
    </div>
  )
}

export default FeaturedJobCard