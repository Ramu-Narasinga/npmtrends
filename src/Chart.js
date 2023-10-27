import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import "./Chart.css";

const ChartComponent = ({ chartData }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      // Destroy the previous chart instance if it exists
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      // Create a new chart instance
      chartInstance.current = new Chart(chartRef.current, {
        type: "line",
        data: chartData,
        options: {
          responsive: true,
          maintainAspectRatio: false
        }
      });
    }
  }, [chartData]);

  return (
    <div
      className="chart-container"
      style={{ width: "400px", height: "300px" }}
    >
      <canvas ref={chartRef} />
    </div>
  );
};

export default ChartComponent;
