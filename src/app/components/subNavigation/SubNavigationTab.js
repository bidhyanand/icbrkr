import React from "react";
export default function SubNavigationTab({ title }) {
  return (
    <>
      <div className=" bg-white cursor-pointer  h-9 w-32  gap-3 rounded-xl hover:bg-black hover:text-white  ">
        <text className=" font-normal text-base  flex whitespace-nowrap px-2 py-1 text-center justify-center items-center ">
          {title}
        </text>
      </div>
    </>
  );
}
