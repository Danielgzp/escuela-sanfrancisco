import Link from "next/link";
import React from "react";

const TableHeader = ({
  inputValue,
  searchButton,
  tableName,
  searchSubmit,
  formRef,
  level,
  educationLevel,
}) => {
  console.log(level);
  return (
    <div id="headerTable-container">
      {level !== undefined && (
        <>
          <div className="pagination-button">
            {level === 1 ? (
              <a onClick={(e) => educationLevel(e)} className="btn btn-primary">
                Primaria
              </a>
            ) : (
              <a onClick={(e) => educationLevel(e)} className="btn btn-primary">
                Pre-Escolar
              </a>
            )}
          </div>
        </>
      )}
      <div className="search-bar">
        <form onSubmit={searchSubmit} ref={formRef} className="tableForm">
          <label>
            <i className="material-icons">search</i>
            Buscar:
          </label>
          <input
            type="text"
            name="search"
            value={inputValue || ""}
            onChange={searchButton}
            className="z-depth-2"
          />
          <button type="submit" className="btn btn-primary">
            Ir
          </button>
        </form>
      </div>
    </div>
  );
};

export default TableHeader;
