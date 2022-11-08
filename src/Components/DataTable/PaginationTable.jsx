import React from "react";

const PaginationTable = ({ prev, next }) => {
  return (
    <ul className="pagination justify-content-end">
      <div className="pagination-container">
        <li className="page-item" onClick={prev}>
          <a className="page-link">Previous</a>
        </li>
        <li className="page-item activw">
          <a className="page-link" href="#">
            1
          </a>
        </li>
        <li className="page-item" aria-current="page">
          <a className="page-link" href="#">
            2
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            3
          </a>
        </li>
        <li className="page-item" onClick={next}>
          <a className="page-link" href="#">
            Next
          </a>
        </li>
      </div>
    </ul>
  );
};

export default PaginationTable;
