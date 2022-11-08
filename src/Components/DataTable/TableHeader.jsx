import React from "react";

const TableHeader = ({ props, changeButton }) => {
  return (
    <div id="headerTable-container">
      <h2 className="table-title">Lista de Alumnos</h2>

      <div className="search-bar">
        <p>
          {/* <i className="material-icons">search</i> */}
          Buscar:
        </p>
        <form>
          <input
            type="text"
            value={props}
            onChange={changeButton}
            className="z-depth-2"
          />
        </form>
      </div>
    </div>
  );
};

export default TableHeader;
