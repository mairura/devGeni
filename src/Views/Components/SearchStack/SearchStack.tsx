import React, { useState } from "react";

const SearchStack = (props: any) => {
  console.log(props);
  const [search, setSearch] = useState("");
  return (
    <div className="search-stack">
      <div className="search-stack-search">
        <input
          className="search-stack-search-input"
          name="search"
          defaultValue={search}
          placeholder="Search"
          // onKeyDown={(e: any) => props.filter(e.target.value)}
          onChange={(e: any) => props.filter(e.target.value)}
        />
      </div>

      <div className="search-stack-content">
        {/* <div className="search-stack-content-item">Javasscript</div> */}
        {props.stacks.map((item: any, index: number) => (
          <div key={index} className="search-stack-content-item">
            {item.name}
          </div>
        ))}

        {/* <div className="search-stack-content-item">Typescript </div> */}
      </div>
    </div>
  );
};

export default SearchStack;
