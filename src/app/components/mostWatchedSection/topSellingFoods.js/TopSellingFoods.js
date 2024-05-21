"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaSortAmountDown, FaSortAmountUp } from "react-icons/fa";
import SelectTool from "./SelectTool";

export default function TopSellingFoods() {
  const [isSortedAscending, setIsSortedAscending] = useState(true);

  const toggleSortOrder = () => {
    setIsSortedAscending(!isSortedAscending);
  };

  const options = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
    { label: "Option 4", value: "option4" },
  ];

  // Define a function to handle the change event
  const handleChange = (event) => {
    console.log("Selected value:", event.target.value);
    // Add your logic here to handle the selected value
  };

  return (
    <div className="w-full h-[429px] space-y-2 bg-white rounded-2xl p-4 items-center  ">
      <div className=" sticky top-0 z-10 flex justify-between gap-2 pb-5 ">
       <div className="flex gap-2" >

       <text className="text-base font-normal">Top Selling Foods</text>
       <icon>
       {isSortedAscending ? (
          <FaSortAmountDown
            onClick={toggleSortOrder}
            className="cursor-pointer mt-1 "
          />
        ) : (
          <FaSortAmountUp
            onClick={toggleSortOrder}
            className="cursor-pointer mt-1 "
          />
        )}
       </icon>
       </div>

        <div className="" >
          <SelectTool options={options} onChange={handleChange} />
        </div>
      </div>

      <div className="w-full h-[343px] overflow-auto  custom-scrollbar space-y-2 ">
        <div className="p-2 w-full h-[78px] bg-slate-100 rounded-lg ">
          <div className="flex justify-between ">
            <div className="flex w-32 h-14 gap-3">
              <Image
                src="/assests/food1.png"
                width={100}
                height={100}
                alt="food"
                className="w-12 h-12 rounded-full  object-cover"
              />
              <div className="grid px-2  gap-1 font-normal">
                <text className="text-xs py-[2px]  whitespace-nowrap  items-center text-center flex justify-center ">
                  Main Course
                </text>
                <text className="text-base">Sushi</text>
              </div>
            </div>

            <div className="text-center items-center flex justify-center ">
              <text className="font-normal text-sm">300 Sold</text>
            </div>

            <div className="text-center items-center flex justify-center ">
              <text className="font-normal text-sm">RS. 20,000</text>
            </div>
          </div>
        </div>

        <div className="p-2 w-full h-[78px] bg-slate-100 rounded-lg ">
          <div className="flex justify-between ">
            <div className="flex w-32 h-14 gap-3">
              <Image
                src="/assests/food1.png"
                width={100}
                height={100}
                alt="food"
                className="w-12 h-12 rounded-full  object-cover"
              />
              <div className="grid px-2  gap-1 font-normal">
                <text className="text-xs py-[2px]  whitespace-nowrap  items-center text-center flex justify-center ">
                  Main Course
                </text>
                <text className="text-base">Sushi</text>
              </div>
            </div>

            <div className="text-center items-center flex justify-center ">
              <text className="font-normal text-sm">300 Sold</text>
            </div>

            <div className="text-center items-center flex justify-center ">
              <text className="font-normal text-sm">RS. 20,000</text>
            </div>
          </div>
        </div>

        <div className="p-2 w-full h-[78px] bg-slate-100 rounded-lg ">
          <div className="flex justify-between ">
            <div className="flex w-32 h-14 gap-3">
              <Image
                src="/assests/food1.png"
                width={100}
                height={100}
                alt="food"
                className="w-12 h-12 rounded-full  object-cover"
              />
              <div className="grid px-2   gap-1 font-normal">
                <text className="text-xs py-[2px]  whitespace-nowrap  items-center text-center flex justify-center ">
                  Main Course
                </text>
                <text className="text-base">Sushi</text>
              </div>
            </div>

            <div className="text-center items-center flex justify-center ">
              <text className="font-normal text-sm">300 Sold</text>
            </div>

            <div className="text-center items-center flex justify-center ">
              <text className="font-normal text-sm">RS. 20,000</text>
            </div>
          </div>
        </div>

        <div className="p-2 w-full h-[78px] bg-slate-100 rounded-lg ">
          <div className="flex justify-between ">
            {/* inside div */}
            <div className="flex w-32 h-14 gap-3">
              <Image
                src="/assests/food1.png"
                width={100}
                height={100}
                alt="food"
                className="w-12 h-12 rounded-full  object-cover"
              />
              <div className="grid px-2  gap-1 font-normal">
                <text className="text-xs py-[2px]  whitespace-nowrap  items-center text-center flex justify-center ">
                  Main Course
                </text>
                <text className="text-base">Sushi</text>
              </div>
            </div>

            <div className="text-center items-center flex justify-center ">
              <text className="font-normal text-sm">300 Sold</text>
            </div>

            <div className="text-center items-center flex justify-center ">
              <text className="font-normal text-sm">RS. 20,000</text>
            </div>
          </div>
        </div>

        <div className="p-2 w-full h-[78px] bg-slate-100 rounded-lg ">
          <div className="flex justify-between ">
            <div className="flex w-32 h-14 gap-3">
              <Image
                src="/assests/food1.png"
                width={100}
                height={100}
                alt="food"
                className="w-12 h-12 rounded-full  object-cover"
              />
              <div className="grid px-2  gap-1 font-normal">
                <text className="text-xs py-[2px]  whitespace-nowrap  items-center text-center flex justify-center ">
                  Main Course
                </text>
                <text className="text-base">Sushi</text>
              </div>
            </div>

            <div className="text-center items-center flex justify-center ">
              <text className="font-normal text-sm">300 Sold</text>
            </div>

            <div className="text-center items-center flex justify-center ">
              <text className="font-normal text-sm">RS. 20,000</text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
