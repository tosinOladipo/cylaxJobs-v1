import React from 'react'

function Container({children} : {children: React.ReactNode}) {
  return (
    <div className='container mx-auto px-4 lg:px-0'>{children}</div>
  )
}

export default Container