import React from 'react'

import links from "@/utils/data/links"
import Link from 'next/link';

function Nav() {
  return (
    <nav className='flex gap-14'>
         {links.map((link) => {
          return (
              <Link key={link.href} href={link.href} className='flex items-center gap-x-2 '>
                <span className='capitalize'>{link.label}</span>
              </Link>
          );
        })}
    </nav>
  )
}

export default Nav