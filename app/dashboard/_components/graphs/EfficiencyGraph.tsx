"use client"

import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts"

type CategoryData = {
  name: string;
  value: number;
  color: string
};

type PieKeysProps = {
  type?: string;
  values: CategoryData[];
};

export default function EfficiencyGraph({values }: PieKeysProps){

    return (
            <ResponsiveContainer width={200} height={200}>
              <PieChart>
                <Pie
                  data={values}
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
        
                  {values?.map((item, key)=>{
                    return(
                      <Cell key={`cell-${[key]}`} fill={item.color} />
                    )
                  })}
        
                </Pie>
              </PieChart>
            </ResponsiveContainer>
    )
}