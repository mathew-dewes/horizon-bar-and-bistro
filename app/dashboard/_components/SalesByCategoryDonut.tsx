"use client"; // if using Next.js App Router

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

interface Props {
  spirits: number;
  cocktails: number;
  beer: number;
  dessert: number;
  food: number
}

export default function SalesByCategoryDonut({ spirits, cocktails, beer, dessert, food }: Props) {
  const categories = [
    { name: "Spirits", value: spirits }, // red
    { name: "Cocktails", value: cocktails }, //yellow
    { name: "Beer", value: beer }, //orange
    { name: "Dessert", value: dessert },
    { name: "Food", value: food },
  ];

  const COLORS = ["#DC3545", "#FFC107", "#FF9F40", "#6610F2", "#28A745" ]; // purple shades + gray

  return (
    <ResponsiveContainer width={200} height={200}>
      <PieChart>
        <Pie
          data={categories}
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
          {categories.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}
