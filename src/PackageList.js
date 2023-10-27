import React from "react";
import PackageCard from "./PackageCard";

const PackageList = ({ packages }) => {
  return (
    <div className="package-list">
      {packages.map((pkg, index) => (
        <PackageCard
          key={index}
          packageName={pkg.name}
          downloadData={pkg.downloadData}
        />
      ))}
    </div>
  );
};

export default PackageList;
