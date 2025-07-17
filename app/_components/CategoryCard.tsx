import { Building2, HandCoins, Headset, Megaphone, UserRoundCheck, Wallet } from 'lucide-react'
import React from 'react'

function CategoryCard({label,total}: { label: string, total: number}) {
  return (
    <div className='col-span-1 grid grid-cols-4 p-3 gap-3 rounded-md border-1 border-gray-100'>
        <div className='col-span-1 flex items-center justify-center h-[50] w-[50] bg-blue-100 rounded-lg text-blue-400'>
          {label === "Marketing" && <Megaphone/> || 
          label === "Teller" && <Wallet/> || 
          label === "Banking & Finance" && <HandCoins/> || 
          label === "Customer Service" && <Headset/> || 
          label === "Real Estate" && <Building2/> || 
          label === "Sales Agent" && <UserRoundCheck/>}

        </div>
        <div className='col-span-3 flex items-center'>
            <div className='flex flex-col gap-1'>
                <h4 className='text-sm font-medium'>{label}</h4>
                <span className='text-gray-400 text-xs'>{total} job posts</span>
            </div>
        </div>
    </div>
  )
}

export default CategoryCard