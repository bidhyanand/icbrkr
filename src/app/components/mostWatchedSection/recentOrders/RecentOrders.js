import Image from "next/image";
import React from "react";

export default function RecentOrders() {
  return (
    <div className="w-full h-[429px] space-y-2 bg-white rounded-2xl p-4 items-center  ">
      <div className=" sticky top-0 z-10 flex gap-2 pb-5 ">
        <div className="w-4 h-4 rounded-full bg-green-500 animate-pulse-slow mt-1"></div>
        <text className="text-base font-normal">Recent Orders</text>
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
              <div className="grid   gap-1 font-normal">
                <text className="text-xs py-[2px] px-2 whitespace-nowrap rounded-[100px] items-center text-center flex justify-center bg-gray-300">
                  Preparing
                </text>
                <text className="text-base">Sushi</text>
              </div>
            </div>

            <div className="grid px-2  gap-1 font-normal">
              <text className="text-xs py-[2px]  whitespace-nowrap  items-center text-center flex justify-center ">
                Table No.
              </text>
              <text className="text-base text-end">4</text>
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
              <div className="grid   gap-1 font-normal">
                <text className="text-xs py-[2px] px-2 whitespace-nowrap rounded-[100px] items-center text-center flex justify-center bg-gray-300">
                  Preparing
                </text>
                <text className="text-base">Sushi</text>
              </div>
            </div>

            <div className="grid px-2  gap-1 font-normal">
              <text className="text-xs py-[2px]  whitespace-nowrap  items-center text-center flex justify-center ">
                Table No.
              </text>
              <text className="text-base text-end">4</text>
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
              <div className="grid   gap-1 font-normal">
                <text className="text-xs py-[2px] px-2 whitespace-nowrap rounded-[100px] items-center text-center flex justify-center bg-gray-300">
                  Preparing
                </text>
                <text className="text-base">Sushi</text>
              </div>
            </div>

            <div className="grid px-2  gap-1 font-normal">
              <text className="text-xs py-[2px]  whitespace-nowrap  items-center text-center flex justify-center ">
                Table No.
              </text>
              <text className="text-base text-end">4</text>
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
              <div className="grid   gap-1 font-normal">
                <text className="text-xs py-[2px] px-2 whitespace-nowrap rounded-[100px] items-center text-center flex justify-center bg-gray-300">
                  Preparing
                </text>
                <text className="text-base">Sushi</text>
              </div>
            </div>

            <div className="grid px-2  gap-1 font-normal">
              <text className="text-xs py-[2px]  whitespace-nowrap  items-center text-center flex justify-center ">
                Table No.
              </text>
              <text className="text-base text-end">4</text>
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
              <div className="grid   gap-1 font-normal">
                <text className="text-xs py-[2px] px-2 whitespace-nowrap rounded-[100px] items-center text-center flex justify-center bg-gray-300">
                  Preparing
                </text>
                <text className="text-base">Sushi</text>
              </div>
            </div>

            <div className="grid px-2  gap-1 font-normal">
              <text className="text-xs py-[2px]  whitespace-nowrap  items-center text-center flex justify-center ">
                Table No.
              </text>
              <text className="text-base text-end">4</text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
