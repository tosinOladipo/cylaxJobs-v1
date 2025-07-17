import { Button } from '@/components/ui/button'
import React from 'react'
import { Input } from "@/components/ui/input"
import { FiSearch } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";

function HeroSearch() {
  return (
    <div className='px-6 py-8 bg-white grid lg:grid-cols-4 gap-4 lg:gap-2 rounded-md'>
        <div className='col-span-3 grid lg:grid-cols-2 gap-4'>
            <div className='col-span-1 flex gap-2'>
                <div className='flex items-center'><FiSearch /> </div>
                <Input type="text" placeholder="Job title, Keywords, or company" className='px-0 h-12 border-0 bg-transparent focus-visible:ring-offset-0 focus-visible:ring-0' />
            </div>
            <div className='col-span-1 flex gap-2 border-gray-500 border-l-1 pl-4'>
                <div className='flex items-center'><GrLocation /> </div>
                <Input type="text" placeholder="City or State" className='h-12 px-0 border-0 bg-transparent focus-visible:ring-offset-0 focus-visible:ring-0' />
            </div>
        </div>
        <Button className='col-span-1 h-12'>Find job</Button>
    </div>
  )
}

export default HeroSearch