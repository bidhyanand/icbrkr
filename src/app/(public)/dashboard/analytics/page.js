import Cards from '@/app/components/comparisonCard/Cards'
import MainDashboard from '@/app/components/mainDashboard/Dashboard'
import MostWatchedSection from '@/app/components/mostWatchedSection/MostWatchedSection'
import SubNavigation from '@/app/components/subNavigation/SubNavigation'
import React from 'react'



export default function Page() {
  return (
    <div className='bg-gray-100 px-6 ' >
      <SubNavigation/>
      <Cards/>
      <MainDashboard/>
      <MostWatchedSection/>
    </div>
  )
}
