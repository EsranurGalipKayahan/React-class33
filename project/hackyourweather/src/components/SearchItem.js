import React from "react";

export const SearchItem = ({ cityHandler, searcHandler }) => {
  return (
    <div className="input-group rounded" data-testid="search-container">
      <input
        data-testid="search-box"
        type="text"
        className="form-control rounded form-group mx-sm-3 mb-2"
        placeholder="Search"
        onChange={cityHandler}
      />
      <button
        data_testid="search-btn"
        className="input-group-text border-0 btn  mb-2 fas fa-search"
        onClick={searcHandler}
      ></button>
    </div>
  );
};
export default SearchItem;
