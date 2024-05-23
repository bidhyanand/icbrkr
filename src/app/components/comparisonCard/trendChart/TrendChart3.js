"use client";
import React from "react";
import { AreaChart, Area } from "recharts";



export default function TrendChart3() {

    const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
    
      const data = [];
    
      for (let i = 0; i < months.length; i++) {
        data.push({
          name: months[i],
          uv: Math.floor(Math.random() * 5000) + 1000,
          pv: Math.floor(Math.random() * 5000) + 1000,
          amt: Math.floor(Math.random() * 3000) + 1000,
        });
      }

    const gradientColor = '#ECFDF3';

    // Define gradient ID
    const gradientId = 'gradientFill';
    
    // Create a linear gradient
    const gradientFill = (
      <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor={gradientColor} />
        <stop offset="100%" stopColor={gradientColor} />
      </linearGradient>
    );
return (
    <AreaChart
    width={200}
    height={60}
    data={data}
    margin={{
        top: 5,
        right: 0,
        left: 0,
        bottom: 5,
    }}
    >
    <Area 
    type="monotone"
    dataKey="uv" 
    stroke="#0541ba" 
    strokeWidth={2} // Stroke width
    fill="#97b4ed    "
        />
    </AreaChart>
);
}
