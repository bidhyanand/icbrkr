import AreaChartUsageExampleWithCustomTooltip from '@/app/components/areaCard/Card'
import SubNavigation from '@/app/components/subNavigation/SubNavigation'
import React from 'react'

export default function Page() {
  return (
    <div className='bg-gray-100' >
      <SubNavigation/>
      <AreaChartUsageExampleWithCustomTooltip/>
    </div>
  )
}
