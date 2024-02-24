"use client";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, ChartData } from "chart.js";
import React from "react";
import { Pie } from "react-chartjs-2";

import { colors } from "@/constants/colors";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ data }: { data: { number: number; text: string; type: number }[] }) => {
  if (data.length === 0) return null;
  const makeOpacity = (color: string) => {
    const findIndex = color.lastIndexOf(")");
    return color.slice(0, findIndex) + ", 0.2)";
  };
  const sortData = (data: { number: number; text: string; type: number }[]) =>
    data.sort((a, b) => (a.number > b.number ? -1 : 1));
  const pieData: ChartData<"pie", number[], string> = {
    labels: sortData(data).map((d) => d.text),
    datasets: [
      {
        data: sortData(data).map((d) => d.number),
        type: "pie",
        backgroundColor: sortData(data).map((d) => makeOpacity(colors[d.type])),
        borderColor: sortData(data).map((d) => colors[d.type]),
        borderWidth: 1,
      },
    ],
  };
  return (
    <Pie
      data={pieData}
      options={{
        plugins: {
          legend: {
            display: false,
          },
        },
        animation: { animateRotate: false },
      }}
    />
  );
};

export default PieChart;
