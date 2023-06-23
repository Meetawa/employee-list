import React from "react";

const SearchReport = ({ searchTerm, handleSearch }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search by first name"
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchReport;
