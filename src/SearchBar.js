import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [packageName, setPackageName] = useState("");

  const handleSearch = () => {
    onSearch(packageName);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter an NPM package name"
        value={packageName}
        onChange={(e) => setPackageName(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
