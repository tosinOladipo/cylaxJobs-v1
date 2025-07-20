import React from 'react'

const DashboardTitle = ({pageTitle, pageDesc, userFirstName} : {pageTitle: string, pageDesc: string, userFirstName?: string}) => {
  return (
    <header>
        <h1 className="text-2xl font-semibold capitalize">
            {pageTitle} <span className="text-blue-400">{userFirstName}</span>
          </h1>
          <p className="text-sm text-gray-500">{pageDesc}</p>
    </header>
  )
}

export default DashboardTitle