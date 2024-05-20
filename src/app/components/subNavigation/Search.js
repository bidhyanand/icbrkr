import Image from 'next/image'
import React from 'react'
import search from "../../../../public/icons/search.png"
export default function Search() {
  return (
    <div className='w-80 h-11 bg-white py-2 px-3 border rounded-md ' >

        <div className='flex text-base font-normal gap-2 ' >
            <Image src={search} alt='search' width={20} height={20}/>
            <text>Search</text>
        </div>
    </div>
  )
}
