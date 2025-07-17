import React, { Children } from 'react'
import Sidebar from './_components/Sidebar';

function DashboardLayout({children} : { children: React.ReactNode;}) {
  return (
    
    <section className='container mx-auto grid lg:grid-cols-6 gap-4 h-screen'>
        <aside className='col-span-1'>
          <Sidebar/>
        </aside>
        <article className='col-span-5 pt-30 px-6 bg-gray-50'>
          {children}
          <footer className='text-center mt-20 pb-10 text-xs text-gray-500'> All right reserved. Cylax 2025</footer>
        </article>
        </section>
  )
}

export default DashboardLayout