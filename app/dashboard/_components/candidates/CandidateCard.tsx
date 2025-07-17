import { Button } from '@/components/ui/button'
import { Heart } from 'lucide-react'
import React from 'react'
import CandidateTags from './CandidateTags'

const CandidateCard = ({fullname, location, state, desc, tags}: {
fullname: string,
location: string,
state: string,
desc: string,
tags: string[]
}) => {
  return (
    <div className='flex flex-col gap-4 p-4 rounded-md bg-blue-50 text-sm shadow-sm'>
        <div className='flex justify-between'>
            <div className='flex gap-3 items-center'>
                <div className='w-[50px] h-[50px] rounded-full bg-gray-200'></div>
                <div className='flex flex-col gap-1'>
                    <h3 className='font-semibold'>{fullname}</h3>
                    <span className='flex gap-2 text-xs'>
                        {location}, {state}
                    </span>
                </div>
            </div>
            <Button className='bg-blue-300 text-white' size='icon'><Heart/></Button>
        </div>
        <p className='text-xs text-gray-500'>{desc.slice(0,80)}</p>
        <CandidateTags tags={tags}/>
    </div>
  )
}

export default CandidateCard