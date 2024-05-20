import Cards from '@/app/components/comparisonCard/Cards'
import MainDashboard from '@/app/components/mainDashboard/Dashboard'
import SubNavigation from '@/app/components/subNavigation/SubNavigation'
import React from 'react'
// import dynamic from 'next/dynamic'

// const DynamicPlot = dynamic(import('../../components/mainDashboard/plot'), {
//   ssr: false
// })

import DynamicPlot from '@/app/components/mainDashboard/plot'

export default function Page() {
  return (
    <div className='bg-gray-100 px-6 ' >
      <SubNavigation/>
      <Cards/>
      {/* <MainDashboard/> */}
      <DynamicPlot/>
    </div>
  )
}
