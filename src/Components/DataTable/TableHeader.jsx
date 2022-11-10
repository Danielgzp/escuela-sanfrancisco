import Link from "next/link";
import React from "react";

const TableHeader = ({ props, changeButton }) => {
  return (
    <div id="headerTable-container">
      <h4 class="card-title">All Students List </h4>

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
        <div class="card-header">
          <Link href="/admin/students/add-student">
            <a class="btn btn-primary">+ Add new</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TableHeader;
