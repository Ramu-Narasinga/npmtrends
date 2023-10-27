import React from "react";

const PackageCard = ({ packageName, downloadData }) => {
  return (
    <div className="package-card">
      <h2>{packageName}</h2>
      <p>Downloads in the last month: {downloadData.downloads}</p>
      {/* Add more package information here */}
    </div>
  );
};

export default PackageCard;
