import React from "react";

const SearchReport = ({ search, handleSearch }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search by first name"
        value={search}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchReport;
