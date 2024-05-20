import React from 'react'
import SubNavigationTab from './SubNavigationTab'
import Search from './Search'

export default function SubNavigation() {
  return (
    <div className='px-6 py-9 flex justify-between' >
       <div className='flex gap-3' >
       <SubNavigationTab title={"Overview"} />
        <SubNavigationTab title={"Orders"} />
        <SubNavigationTab title={"Invoice"} />
        <SubNavigationTab title={"Customers"} />
        <SubNavigationTab title={"Sessions"} />
        <SubNavigationTab title={"Table Layout"} />
        <SubNavigationTab title={"Feedback"} />
       </div>
        <Search/>
    </div>
  )
}
