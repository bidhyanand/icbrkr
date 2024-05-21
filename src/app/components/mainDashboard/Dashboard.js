import React from "react";

export default function MainDashboard() {
  return (
    <div className="w-full h-[574px] flex bg-white gap-4 justify-between p-2  ">
      <div className="w-1/2 flex items-center text-center justify-center py-4 px-6 rounded-xl bg-green-500 ">
        first Dashboard
      </div>
      <div className="w-1/2 flex items-center text-center justify-center py-4 px-6 rounded-xl bg-yellow-500 ">
        Second Dashboard
      </div>
    </div>
  );
}
