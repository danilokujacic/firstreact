import React from "react";

const SearchBox = props => {
  return (
    <input type="search" placeholder="Search" onChange={props.searchchange} />
  );
};
export default SearchBox;
