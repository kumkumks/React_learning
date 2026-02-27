import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
// 🔥 register (mandatory)
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const ProjectAnalyticsChart = () => {
  const data = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [
      {
        label: "Projects",
        data: [40, 65, 50, 80, 45, 35, 55],
        backgroundColor: [
          "#d1d5db", // grey striped feel
          "#15803d", // dark green
          "#6ee7b7", // light green
          "#14532d", // darkest green
          "#d1d5db",
          "#d1d5db",
          "#d1d5db",
        ],
        borderRadius: 20, // 🔥 rounded bars
        borderSkipped: false, // 🔥 rounded bars
        barPercentage: 0.6, // 🔥 responsive bar width
        categoryPercentage: 0.8,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 2,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: "#6b7280" },
      },
      y: {
        display: false, // 🔥 hide Y axis like design
        grid: { display: false },
      },
    },
  };

  return (
    <div className="bg-white p-5 rounded-2xl shadow-sm w-full max-w-xl me-3">
      <h3 className="text-lg font-semibold mb-4">Project Analytics</h3>
      <Bar data={data} options={options} />
    </div>
  );
};

export default ProjectAnalyticsChart;