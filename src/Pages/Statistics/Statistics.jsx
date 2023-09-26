 
// import { Pie, PieChart, Tooltip } from 'recharts';




// const Statistics = () => {
//     const data=[{name:1000},{name:200},{name:2000}]

    
//     return (
//         <div className='w-full h-[70vh] flex justify-center items-center'>
             
//             <PieChart width={600} height={600}>
//                 <Pie
//                     dataKey="name"
//                     isAnimationActive={false}
//                     data={data}
//                     cx="50%"
//                     cy="50%"
//                     outerRadius={80}
//                     fill="red"
//                     label
//                 />
           
//           <Tooltip />
//         </PieChart>
//         </div>
//     );
// };

// export default Statistics;

 
import React, { useCallback, useState } from "react";
import { PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "Group A", value: 40 },
  { name: "Group B", value: 70 },
  
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
 
    const Statistics = () => {
  return (
    <PieChart width={600} height={600}>
      <Pie
        data={data}
        cx={200}
        cy={200}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={150}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
}



export default Statistics;

