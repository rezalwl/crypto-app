import React from "react";
import "./searchBox.css";

const SearchBox = ({ searchHandler }) => {
  return (
    <input
      type="text"
      placeholder="saerch"
      onChange={(e) => {
        searchHandler(e);
      }}
    />
  );
};

export default SearchBox;
