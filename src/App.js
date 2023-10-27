import React, { useState } from "react";
import { fetchPackageData } from "./api"; // Import the API function
import SearchBar from "./SearchBar";
import PackageCard from "./PackageCard";
import ChartComponent from "./Chart";
import "./styles.css"; // Import the CSS file

function App() {
  const [packageData, setPackageData] = useState(null);
  const [chartData, setChartData] = useState(null);

  const handleSearch = async (packageName) => {
    const data = await fetchPackageData(packageName);
    setPackageData(data);

    if (data) {
      const chartData = {
        labels: data.downloads.map((day) => day.day),
        datasets: [
          {
            label: "Downloads",
            data: data.downloads.map((day) => day.downloads),
            fill: false,
            borderColor: "rgb(75, 192, 192)"
          }
        ]
      };
      setChartData(chartData);
    }
  };

  return (
    <div className="app-container">
      <header className="app-header">NPM Trends Tool</header>
      <div className="search-bar">
        <SearchBar onSearch={handleSearch} />
      </div>
      {packageData && (
        <div className="package-card">
          <PackageCard
            packageName={packageData.package}
            downloadData={packageData.downloads}
          />
        </div>
      )}
      {chartData && (
        <div className="chart">
          <ChartComponent chartData={chartData} />
        </div>
      )}
    </div>
  );
}

export default App;
