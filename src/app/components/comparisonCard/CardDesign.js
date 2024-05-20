import React from "react";

export default function CardDesign({ title, amount, percent }) {
  // Convert percent to a number
  const percentValue = parseFloat(percent);

  // Determine the color based on positivity
  let textColor;
  let trendText;
  if (percentValue > 0) {
    textColor = "text-green-500"; // green for positive
    trendText = "Up";
  } else if (percentValue < 0) {
    textColor = "text-red-500"; // red for negative
    trendText = "Down";
  } else {
    textColor = "text-black"; // black for zero
    trendText = "No Change";
  }

  return (
    <div className=" w-full h-[126px] p-3 bg-white rounded-lg gap-6 grid ">
      <div className="flex justify-between">
        <text className="font-normal text-sm ">{title}</text>
        <text className="font-normal text-sm ">Profit</text>
      </div>

      <div className="flex justify-between ">
        <div className="grid gap-2">
          <text className="font-normal text-2xl ">{amount}</text>
          <text className="font-normal text-xs ">
            {" "}
            <span className={`font-bold ${textColor}`}>
              {" "}
              {Math.abs(percent)} %{" "}
            </span>{" "}
            {trendText} From Yesterday{" "}
          </text>
        </div>

        <div>chart</div>
      </div>
    </div>
  );
  F;
}
