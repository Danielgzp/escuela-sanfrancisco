import Link from "next/link";
import React from "react";

const TableHeader = ({
  inputValue,
  searchButton,
  tableName,
  searchSubmit,
  formRef,
}) => {
  return (
    <div id="headerTable-container">
      <h4 className="card-title">{tableName}</h4>
      <div className="search-bar">
        <p>
          <i className="material-icons">search</i>
          Buscar:
        </p>
        <form onSubmit={searchSubmit} ref={formRef}>
          <input
            type="text"
            name="search"
            value={inputValue || ""}
            onChange={searchButton}
            className="z-depth-2"
          />
          <button type="submit" className="btn btn-primary">Ir</button>
        </form>
      </div>
    </div>
  );
};

export default TableHeader;
