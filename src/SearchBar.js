import React, { useState } from "react";

import "./SearchBar.css"

const SearchBar = ({ onSearch }) => {
  const [packageName, setPackageName] = useState("");

  const handleSearch = () => {
    onSearch(packageName);
  };

  return (
    <div className="search-input-container">
      <input
        type="text"
        className="search-input"
        placeholder="Enter an NPM package name"
        value={packageName}
        onChange={(e) => setPackageName(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
