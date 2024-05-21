import Image from "next/image";
import React from "react";

export default function FoodCard({
  orderStatus,
  foodName,
  tableTitle,
  tableNo,
  alt,
  src,
  cardTitle,
}) {
  return (
    <>
      <div className=" sticky top-0 z-10 flex gap-2 pb-5 ">
        <div className="w-4 h-4 rounded-full bg-green-500 animate-pulse-slow mt-1"></div>
        <text className="text-base font-normal">{cardTitle}</text>
      </div>

      <div className="w-full h-[343px] overflow-auto  custom-scrollbar space-y-2 ">
        <div className="p-2 w-full h-[78px] bg-slate-100 rounded-lg ">
          <div className="flex justify-between ">
            <div className="flex w-32 h-14 gap-3">
              <Image
                src={src}
                alt={alt}
                width={100}
                height={100}
                className="w-12 h-12 rounded-full  object-cover"
              />
              <div className="grid   gap-1 font-normal">
                <text className="text-xs py-[2px] px-2 whitespace-nowrap rounded-[100px] items-center text-center flex justify-center bg-gray-300">
                  {orderStatus}
                </text>
                <text className="text-base">{foodName}</text>
              </div>
            </div>

            <div className="grid px-2  gap-1 font-normal">
              <text className="text-xs py-[2px]  whitespace-nowrap  items-center text-center flex justify-center ">
                {/* { tableNo ? `Table No. ${tableNo}` : "Table No. 4" }   */}
                {tableTitle}
              </text>
              <text className="text-base text-end">{tableNo}</text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
