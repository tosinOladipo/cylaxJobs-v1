'use client';
import React, { Children } from 'react'
import Sidebar from './_components/Sidebar';

import { useSelector } from 'react-redux';
import { RootState } from '@/app/store/store';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

function DashboardLayout({children} : { children: React.ReactNode;}) {

  const { user } = useSelector((state : RootState) => state.user);


  return (
    
    <section className='container mx-auto grid lg:grid-cols-6 gap-4 h-screen'>
        <aside className='col-span-1'>
            <Sidebar/>
        </aside>
        <article className='col-span-5 pt-30 px-6 bg-gray-50'>
          <div className="bg-red-200 rounded-xs">
        {!user && (
            <div className="px-4 py-2 mb-4 flex items-center justify-between text-red-500 text-sm">
              <p className='font-medium'>
                You have not created a profile, your account is not activated
                yet.
              </p>
              <Button asChild size='sm' className="bg-red-700 text-white text-xs capitalize p-2 rounded-sm">
                <Link href="/profile">Create profile</Link>
              </Button>
            </div>
        )}
      </div>
          <article className='flex flex-col gap-2'>
          {children}
          </article>
          <footer className='text-center mt-20 pb-10 text-xs text-gray-500'> All right reserved. Cylax 2025</footer>
        </article>
        </section>
  )
}

export default DashboardLayout