"use client";
import React from "react";
import FirstDashboard from "./FirstDashboard";
import SecondDashboard from "./SecondDashboard";
import SelectTool from "../mostWatchedSection/topSellingFoods.js/SelectTool";
import Anomolies from "../../../../public/svgComponents/Anomolies";

export default function MainDashboard() {
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
    <div className="w-full h-[574px] flex  gap-4 justify-between p-2 bg-gray-100  ">
      <div className="w-1/2  rounded-xl bg-white  ">
        <div className="flex p-4 justify-between">
          <div className="flex gap-3 justify-center items-center text-center ">
            <div className="w-8 h-8 rounded-lg bg-[#f3f4c6]/70 p-2 ">
              <Anomolies />
            </div>
            <text className="text-base font-normal  ">Forecasting</text>
          </div>
          <div className="">
            <SelectTool options={options} onChange={handleChange} />
          </div>
        </div>

        <div className="w-full p-4 flex gap-1   ">
          <div className="w-full h-9 text-base font-norma bg-gray-100 hover:bg-black hover:text-white cursor-pointer  rounded-md justify-center items-center text-center flex ">
            Revenue
          </div>
          <div className="w-full h-9 bg-gray-100 hover:bg-black hover:text-white cursor-pointer  rounded-md justify-center items-center text-center flex ">
            Orders
          </div>
          <div className="w-full h-9 bg-gray-100 hover:bg-black hover:text-white cursor-pointer  rounded-md justify-center items-center text-center flex ">
            Customers
          </div>
        </div>
        <div className="mt-3">
          <FirstDashboard />
        </div>
      </div>
      <div className="w-1/2  rounded-xl bg-white ">
        <div className="flex p-4 justify-between">
          <div className="flex gap-3 justify-center items-center text-center ">
            {/* <div className="w-8 h-8 rounded-lg bg-[#f3f4c6]/70 p-2 ">
              <Anomolies />
            </div> */}
            <text className="text-base font-normal  ">Total Orders</text>
          </div>
          <div className="">
            <SelectTool options={options} onChange={handleChange} />
          </div>
        </div>

        <div className="w-full p-4 flex gap-1   ">
          <div className="w-full flex h-16  bg-gray-100 hover:bg-black hover:text-white cursor-pointer  rounded-md justify-between px-4 items-center text-center ">
            <text className="">Total Orders</text>
            <text className="  ">14000</text>
          </div>
          <div className="w-full h-16 bg-gray-100 hover:bg-black hover:text-white cursor-pointer  rounded-md justify-between px-4 items-center text-center flex ">
            <text className="">Total Dine In</text>
            <text className="">10000</text>
          </div>
          <div className="w-full h-16 bg-gray-100 hover:bg-black hover:text-white cursor-pointer  rounded-md justify-between px-4 items-center text-center flex ">
            <text className="">Total Take Away</text>
            <text className="">4000</text>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <SecondDashboard />
        </div>
      </div>
    </div>
  );
}
