import Link from "next/link";
import React from "react";

const TableHeader = ({ inputValue, searchButton, tableName }) => {
  return (
    <div id="headerTable-container">
      <h4 className="card-title">{tableName}</h4>
      <div className="search-bar">
        <p>
          <i className="material-icons">search</i>
          Buscar:
        </p>
        <form>
          <input
            type="text"
            value={inputValue}
            onChange={searchButton}
            className="z-depth-2"
          />
        </form>
      </div>
    </div>
  );
};

export default TableHeader;
