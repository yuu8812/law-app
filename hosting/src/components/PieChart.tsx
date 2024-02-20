"use client";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, ChartData } from "chart.js";
import React from "react";
import { Pie } from "react-chartjs-2";

import { colors } from "@/constants/colors";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ data }: { data: { number: number; text: string }[] }) => {
  const pieData: ChartData<"pie", number[], string> = {
    labels: data.sort((a, b) => (a.number > b.number ? -1 : 1)).map((d) => d.text),
    datasets: [
      {
        data: data.sort((a, b) => (a.number > b.number ? -1 : 1)).map((d) => d.number),
        type: "pie",
        backgroundColor: colors.map((c) => {
          const findIndex = c.lastIndexOf(")");
          return c.slice(0, findIndex) + ", 0.2)";
        }),
        borderColor: colors,
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
