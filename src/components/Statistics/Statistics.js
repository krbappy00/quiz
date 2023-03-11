import React from "react";
import { useLoaderData } from "react-router-dom";
import "./Statistics.css";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const Statistics = () => {
  const { data } = useLoaderData();
  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  console.log(data);
  return (
    <div className="bg">
      <div className="max-w-[1640px] mx-auto p-4">
        <div className="max-h-[600px] relative py-4">
          <div className="lg:absolute w-full h-full text-gray-200 max-h-[600px] bg-black/50 flex flex-col justify-center  rounded-lg">
            <p className="px-4 text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold drop-shadow-md">
              Total Quiz Topic {data.length}
            </p>
            <p className="px-4 text-lg sm:text-xl md:text-xl lg:text-2xl font-bold drop-shadow-md">
              Name of Topic:
            </p>
            {data.map((topic) => (
              <p className="px-4 text-md sm:text-lg md:text-xl lg:text-xl font-bold drop-shadow-md mt-4">
                * {topic.name}
              </p>
            ))}
            <p className="px-4 text-md sm:text-lg md:text-xl lg:text-xl font-bold drop-shadow-md mt-4 text-orange-300">
              The total questions on the topic<br></br> are given in the chart.{" "}
              <br></br>Please see the chart
            </p>
          </div>
          <BarChart
            className="mx-auto bg-white pr-2 rounded-md mt-6 drop-shadow-md"
            width={700}
            height={400}
            data={data}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Bar
              dataKey="total"
              fill="#8884d8"
              shape={<TriangleBar />}
              label={{ position: "top" }}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
              ))}
            </Bar>
          </BarChart>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
