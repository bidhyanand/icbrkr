import React from "react";
import Star from "../../../../public/svgComponents/Star";
import { ProgressBar } from "@tremor/react";
import Comment from "../../../../public/svgComponents/Comment";
import Image from "next/image";
import loyalCustomer1 from "../../../../public/assests/loyalCustomer1.jpg";
import loyalCustomer2 from "../../../../public/assests/loyalCustomer12.jpg";

export default function UserReview () {
  return (
    <div className="grid gap-8 pb-4 w-full grid-cols-5 ">
      <div className="  col-span-2 rounded-xl h-[255px] p-4  justify-center items-center text-center bg-white">
        {/* <div className="flex gap-4 "> */}
        <div className="flex gap-4 justify-between ">
          <div className="">
            <text className="font-normal text-base">
              {" "}
              User Review Overview{" "}
            </text>
          </div>
          <div className=" flex gap-1 ">
            <div className="mt-1">
              <Star width={24} height={24} />
            </div>
            <text className="font-normal text-2xl">4.5</text>
          </div>
        </div>

        <div className="grid pt-4 gap-3">
          <div className="flex justify-center items-center gap-2  ">
            <div>
              <Star />
            </div>
            <text className="font-normal text-sm">5</text>
            <ProgressBar value={100} color="slate-900" />
            <text className="font-normal text-sm text-center items-center flex justify-center ">
              500
            </text>
            <div className="rounded-xl bg-gray-100 flex gap-2 p-1 ">
              <div className="">
                <Comment />
              </div>
              <text className="font-normal text-xs">300</text>
            </div>
          </div>

          <div className="flex justify-center items-center gap-2  ">
            <div>
              <Star />
            </div>
            <text className="font-normal text-sm">4</text>
            <ProgressBar value={80} color="slate-900" />
            <text className="font-normal text-sm text-center items-center flex justify-center ">
              600
            </text>
            <div className="rounded-xl bg-gray-100 flex gap-2 p-1 ">
              <div className="">
                <Comment />
              </div>
              <text className="font-normal text-xs">400</text>
            </div>
          </div>

          <div className="flex justify-center items-center gap-2  ">
            <div>
              <Star />
            </div>
            <text className="font-normal text-sm">3</text>
            <ProgressBar value={60} color="slate-900" />
            <text className="font-normal text-sm text-center items-center flex justify-center ">
              300
            </text>
            <div className="rounded-xl bg-gray-100 flex gap-2 p-1 ">
              <div className="">
                <Comment />
              </div>
              <text className="font-normal text-xs">250</text>
            </div>
          </div>

          <div className="flex justify-center items-center gap-2  ">
            <div>
              <Star />
            </div>
            <text className="font-normal text-sm">2</text>
            <ProgressBar value={40} color="slate-900" />
            <text className="font-normal text-sm text-center items-center flex justify-center ">
              200
            </text>
            <div className="rounded-xl bg-gray-100 flex gap-2 p-1 ">
              <div className="">
                <Comment />
              </div>
              <text className="font-normal text-xs">100</text>
            </div>
          </div>

          <div className="flex justify-center items-center gap-2  ">
            <div>
              <Star />
            </div>
            <text className="font-normal text-sm">1</text>
            <ProgressBar value={20} color="slate-900" />
            <text className="font-normal text-sm text-center items-center flex justify-center ">
              100
            </text>
            <div className="rounded-xl bg-gray-100 flex gap-2 p-1 ">
              <div className="">
                <Comment />
              </div>
              <text className="font-normal text-xs">60</text>
            </div>
          </div>
        </div>
      </div>
      <div className=" col-span-3 p-4 rounded-xl bg-white ">
        <text className="text-base font-normal">Loyal Customers</text>
        <div className="w-full flex gap-3 pt-4 ">
          <div className="w-full h-[153px] bg-gray-100 rounded-xl p-4  ">
            <div className="grid  gap-2 ">
              <Image
                src={loyalCustomer1}
                width={100}
                height={100}
                alt="food"
                className="w-12 h-12 rounded-full  object-cover"
              />

              <text className="text-base font-normal ">Jane Doe</text>
              <text className="text-sm font-normal text-black/70 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </text>
            </div>
          </div>
          <div className="w-full h-[153px] bg-gray-100 rounded-xl p-4  ">
            <div className="grid  gap-2 ">
              <Image
                src={loyalCustomer2}
                width={100}
                height={100}
                alt="food"
                className="w-12 h-12 rounded-full  object-cover"
              />

              <text className="text-base font-normal ">Jane Doe</text>
              <text className="text-sm font-normal text-black/70 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  //
}
