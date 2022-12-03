import React from "react";

const PaginationTable = ({next, firstPage, lastPage}) => {
  
  return (
    <ul className="pagination justify-content-end">
      <div className="pagination-container">
        <li className="page-item" onClick={firstPage}>
          <a className="page-link">Primera Página</a>
        </li>
        <li className="page-item">
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
        <li className="page-item" onClick={lastPage}>
          <a className="page-link">Última Página</a>
        </li>
      </div>
    </ul>
  );
};

export default PaginationTable;
