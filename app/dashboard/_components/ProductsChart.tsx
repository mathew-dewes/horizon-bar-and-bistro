"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type values = {
  value: string;    
  orders: number;
};


type EntryProps = {
  orders: values[]; 
};



export default function ProductChart({orders}: EntryProps) {

  return (
    <div className="h-48 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={orders}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis
            dataKey="value"
            stroke="#222"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            stroke="#666"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            allowDecimals={false}
          />

          <Area
            type="monotone"
            dataKey="orders"
            stroke="#8DD8FF"
            fill="#8DD8FF"
            fillOpacity={0.2}
            strokeWidth={2}
            dot={{ fill: "#8DD8FF", r: 2 }}
            activeDot={{ fill: "#8DD8FF", r: 4 }}
          />

          <Tooltip
            contentStyle={{
              backgroundColor: "white",
              border: "1px solid #e5e7eb",
              borderRadius: "8px",
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
            }}
            labelStyle={{ color: "#374151", fontWeight: "500" }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}