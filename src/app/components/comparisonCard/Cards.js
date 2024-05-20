import React from 'react'
import CardDesign from './CardDesign'

export default function Cards() {
  return (
    <div className='flex gap-3  pb-4' >
      <CardDesign title='Profit' amount={"Rs. 1,00,000"} percent={"10"} />
      <CardDesign title='Expenses' amount={"Rs. 5,00,000"} percent={"-10"} />
      <CardDesign title='Total Customer' amount={" 1,000"} percent={"0"} />
      <CardDesign title='Total Orders' amount={" 5,000"} percent={"40"} />
    </div>
  )
}
