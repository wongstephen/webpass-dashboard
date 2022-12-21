import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import React from "react";

const LineChart = ({ chartData, options }) => {
  return <Line data={chartData} options={options} />;
};

export default LineChart;
