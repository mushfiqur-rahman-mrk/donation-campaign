 import   {useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
 
 
const COLORS = ["#FF444A", "#00C49F"];

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
      const [data,setData]=useState([])
      const programes=useLoaderData();
      // console.log(prog);
      // console.log(storedataParse);      

      const totalCampaign=programes.length

    useEffect(()=>{
      const storedata= localStorage.getItem('donation');
      const cards=JSON.parse(storedata)
      if(cards.length){
        const donatedAmount=cards.length;
        setData([{value:totalCampaign-donatedAmount},
                  {value:donatedAmount}
        ])
      }
    },[totalCampaign])
 
  return (
    <>
      <div className="flex flex-col justify-center items-center h-full">
        <div className="flex text-center justify-center items-center mx-auto justify-self-center">
           
              <PieChart  width={600} height={400}>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={170}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
               
            </PieChart>
          
        </div>
        <div className="flex gap-7">
             <div>
              <p>Your donation</p>
              <div className="bg-[#00C49F] h-1"></div>
             </div>
             <div>
              <p>Total donation</p>
              <div className="bg-[#FF444A] h-1"></div>
             </div>
        </div>
      </div>  
    </>
  );
}

export default Statistics;

