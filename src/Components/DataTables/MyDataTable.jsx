import { useState } from "react";
import DataTable from "react-data-table-component";

import Paginate from "./Paginate";
import LoginLoader from "Components/Loaders/LoginLoader";
import "./css/styles.css";

const MyDataTable = ({
  loading,
  filter,
  tableColumns,
  lastPage,
  firstPage,
  setOffset,
  totalItems,
  neighbours,
  itemsPerPage,
  actionsComponent,
  headerComponent,
}) => {
  const items = [];
  const [current, setCurrent] = useState(1);
  const totalPage = Math.ceil(totalItems / itemsPerPage);
  const end = Math.min(
    Math.max(neighbours * 2 + 2, neighbours + current + 1),
    totalPage + 1
  );
  const start = Math.min(
    Math.max(end - (neighbours * 2 + 1), 1),
    Math.max(current - neighbours, 1)
  );

  for (let i = start; i < end; i++) {
    items.push(
      <li className={`page-item ${getClassActive(i)}`}>
        <a
          key={`Paginador-${i}`}
          onClick={(e) => {
            e.preventDefault();
            setCurrent(i);
            setOffset((i - 1) * itemsPerPage);
          }}
          href="#"
          aria-current="page"
          className="page-link lessPaddingNumber"
        >
          {i}
        </a>
      </li>
    );
  }

  function getClassActive(i) {
    return i === current
      ? "active"
      : "bg-white border-gray-300 text-gray-500 hover:bg-gray-50";
  }

  function prevPage(e) {
    e.preventDefault();
    if (current > 1) {
      setCurrent(current - 1);
      setOffset((current - 2) * itemsPerPage);
    }
  }

  function nextPage(e) {
    e.preventDefault();
    if (current < totalPage) {
      setCurrent(current + 1);
      setOffset(current * itemsPerPage);
    }
  }

  const Paginate = () => {
    return (
      <div className="table-pagination">
        <div>
          <p className="text-sm text-gray-700">
            Mostrando{" "}
            <span className="font-medium">
              {itemsPerPage * (current - 1) + 1}
            </span>{" "}
            para{" "}
            <span className="font-medium">
              {current * itemsPerPage < totalItems
                ? current * itemsPerPage
                : totalItems}
            </span>{" "}
            de <span className="font-medium">{totalItems}</span> resultados
          </p>
        </div>

        <nav>
          <ul className="pagination">
            <li
              className="page-item"
              onClick={(e) => {
                firstPage(e);
                setCurrent(1);
              }}
            >
              <a className="page-link lessPadding" href="#">
                <i className="material-icons">first_page</i>
              </a>
            </li>
            <li className="page-item" onClick={(e) => prevPage(e)}>
              <a className="page-link lessPadding" href="#" aria-label="Next">
                <i className="material-icons">navigate_before</i>
              </a>
            </li>
            {items}
            <li className="page-item" onClick={(e) => nextPage(e)}>
              <a className="page-link lessPadding" href="#" aria-label="Next">
                <i className="material-icons">navigate_next</i>
              </a>
            </li>
            <li
              className="page-item"
              onClick={(e) => {
                lastPage(e);
                setCurrent(totalPage);
              }}
            >
              <a className="page-link lessPadding" href="#">
                <i className="material-icons">last_page</i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  };

  return (
    <>
      <DataTable
        dense
        direction="auto"
        highlightOnHover={true}
        columns={tableColumns}
        actions={actionsComponent}
        data={filter}
        striped={true}
        fixedHeader
        fixedHeaderScrollHeight="700px"
        noDataComponent={
          <h3 style={{ marginTop: "30px", marginBottom: "15px" }}>
            No se encontro ningun elemento
          </h3>
        }
        progressPending={loading}
        progressComponent={
          <LoginLoader
            color={"#143b64"}
            containerHeight={"30px"}
            containerWidth={"30px"}
            border={"4px"}
            spinnerHeigth={"75px"}
            spinnerWidth={"75px"}
            top={"50%"}
            left={"50px"}
          />
        }
        pagination
        persistTableHead
        persistTablePaginationComponent
        //el paginationServer hacia que no funcionarai bien la paginacion,
        // paginationComponentOptions={paginationOptions}
        paginationServer
        paginationComponent={Paginate}
        //   onChangeRowsPerPage={20}
        subHeader
        subHeaderComponent={headerComponent}
      />
    </>
  );
};

export default MyDataTable;
