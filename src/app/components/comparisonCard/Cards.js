
import React from 'react'
import CardDesign from './CardDesign'
import dynamic from 'next/dynamic';

const TrendChart = dynamic(() => import('./trendChart/TrendChart'), { ssr: false });
const TrendChart2 = dynamic(() => import('./trendChart/TrendChart2'), { ssr: false });
const TrendChart3 = dynamic(() => import('./trendChart/TrendChart3'), { ssr: false });
const TrendChart4 = dynamic(() => import('./trendChart/TrendChart4'), { ssr: false });
export default function Cards() {
  return (
    <div className='flex gap-3  pb-4' >
      <CardDesign title='Profit' amount={"Rs. 1,00,000"} percent={"10"} chartComponent={<TrendChart/>} />
      <CardDesign title='Expenses' amount={"Rs. 5,00,000"} percent={"-10"} chartComponent={<TrendChart2/>} />
      <CardDesign title='Total Customer' amount={" 1,000"} percent={"0"} chartComponent={<TrendChart3/>} />
      <CardDesign title='Total Orders' amount={" 5,000"} percent={"40"} chartComponent={<TrendChart4/>} />
    </div>
  )
}
