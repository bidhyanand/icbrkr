"use client";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";



export default function FirstDashboard() {

  const error = console.error;
console.error = (...args) => {
  if (/defaultProps/.test(args[0])) return;
  error(...args);
};

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const data = [];

for (let i = 0; i < months.length; i++) {
  data.push({
    name: months[i],
    actual: Math.floor(Math.random() * 5000) + 1000,
    forecasted: Math.floor(Math.random() * 5000) + 1000,
    amt: Math.floor(Math.random() * 3000) + 1000
  });
}

  return (
    <LineChart width={900} height={400} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
      <YAxis  />
      <Tooltip />
      <Legend style={{
        backgroundColor: 'red',
      }} />
      <Line
        type="monotone"
        dataKey="actual"
        stroke="black"
        activeDot={{ r: 8 }}
        strokeWidth={2}

      />
      <Line type="monotone" dataKey="forecasted" fill="gray" stroke="gray" strokeDasharray="3 4 5 2" />
    </LineChart>
  );
}
