import React from "react";
import "./search.style.css";

export const SearchBox = ({ handleChange }) => {
  return (
    <input
      className="search-box"
      type="search"
      placeholder="Search for robots"
      onChange={handleChange}
    />
  );
};
