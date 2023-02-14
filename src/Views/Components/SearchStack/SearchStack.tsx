import React from "react";

const SearchStack = () => {
  return (
    <div className="search-stack">
      <div className="search-stack-search">
        <input
          className="search-stack-search-input"
          name="search"
          placeholder="Search"
        />
      </div>

      <div className="search-stack-content">
        <div className="search-stack-content-item">Javasscript</div>
        <div className="search-stack-content-item">Solidity</div>
        <div className="search-stack-content-item">Typescript </div>
      </div>
    </div>
  );
};

export default SearchStack;
