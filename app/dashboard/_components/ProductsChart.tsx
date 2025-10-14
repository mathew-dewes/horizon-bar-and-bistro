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



export default function ProductChart() {


  const allProducts = [
  { id: "1", name: "Margarita", createdAt: "2025-09-01T10:00:00Z" },
  { id: "2", name: "Old Fashioned", createdAt: "2025-09-05T14:30:00Z" },
  { id: "3", name: "Espresso Martini", createdAt: "2025-09-15T18:00:00Z" },
  { id: "4", name: "Whiskey Sour", createdAt: "2025-09-22T20:00:00Z" },
  { id: "5", name: "Gin Tonic", createdAt: "2025-09-25T11:45:00Z" },
  { id: "6", name: "Bloody Mary", createdAt: "2025-09-30T12:00:00Z" },
  { id: "7", name: "Cosmopolitan", createdAt: "2025-10-05T09:00:00Z" },
  { id: "8", name: "Negroni", createdAt: "2025-10-07T21:15:00Z" },
  { id: "9", name: "Mojito", createdAt: "2025-10-11T15:00:00Z" },
];

 const now = new Date();
  
  const weeklyProductsData: {
  week: string;
  orders: number;
}[] = [];

  for (let i = 11; i >= 0; i--) {
    const weekEnd = new Date(now);
    weekEnd.setHours(23, 59, 59, 999);
    weekEnd.setDate(weekEnd.getDate() - i * 7);


    const weekStart = new Date(weekEnd);
    
    weekStart.setDate(weekStart.getDate() - 6);
    weekStart.setHours(0, 0, 0, 0);

    weekStart.setHours(23, 59, 59, 999);

    const weekLabel = `${String(weekStart.getMonth() + 1).padStart(
      2,
      "0"
    )}/${String(weekStart.getDate()).padStart(2, "0")}`;

    const weekProducts = allProducts.filter((product) => {
      const productDate = new Date(product.createdAt);
      return productDate >= weekStart && productDate <= weekEnd;
    });

    weeklyProductsData.push({
      week: weekLabel,
      orders: weekProducts.length,
    });
  };
  return (
    <div className="h-48 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={weeklyProductsData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis
            dataKey="week"
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