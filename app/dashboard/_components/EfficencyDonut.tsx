"use client"; // if using Next.js App Router

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

interface Props {
  inStock: number;
  lowStock: number;
  outOfStock: number;
}

export default function StockDonut({ inStock, lowStock, outOfStock }: Props) {
  const data = [
    { name: "In Stock", value: inStock },
    { name: "Low Stock", value: lowStock },
    { name: "Out of Stock", value: outOfStock },
  ];

  const COLORS = ["#59AC77", "#7c3aed", "#e5e7eb"]; // purple shades + gray

  return (
    <ResponsiveContainer width={200} height={200}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={60} // makes it a donut
          outerRadius={80}
          paddingAngle={2} // space between segments
          startAngle={90}
          endAngle={-270} // clockwise
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}
