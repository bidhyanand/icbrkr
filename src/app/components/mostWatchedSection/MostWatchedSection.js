import React from 'react'
import RecentOrders from './recentOrders/RecentOrders'
import TopSellingFoods from './topSellingFoods.js/TopSellingFoods'
import TopTables from './topTables/TopTables'
export default function MostWatchedSection() {
  return (
    <div className='w-full flex gap-5 justify-between py-9 ' >
        <RecentOrders/>
       
        <TopSellingFoods/>
        <TopTables/>
    </div>
  )
}
