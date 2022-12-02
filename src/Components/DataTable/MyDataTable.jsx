//import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
// este boopstrap da en el carousel
import DataTable from "react-data-table-component";
import Swal from "sweetalert2";

// import PageError from "../Error/PageError";

import Loader from "Components/Loader";

import axios from "axios";
import endPoints from "utils/endpoints";
import TableHeader from "./TableHeader";
import Loading from "Components/Loaders/Loading";
import Paginate from "./Paginate";
import { useState } from "react";
import "./css/styles.css";

const MyDataTable = ({
  data,
  headerSearch,
  handleSearchSubtmit,
  tableColumns,
  // nextPage,
  // prevPage,
  lastPage,
  firstPage,
  educationLevel,
  level,
  setOffsetStudents,
  totalStudents,
  neighbours,
  studentsPerPage,
}) => {
  const { filter, loading, error, search, tableTitle } = data;

  const items = [];
  const [current, setCurrent] = useState(1);
  const totalPage = Math.ceil(totalStudents / studentsPerPage);
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
            setOffsetStudents((i - 1) * studentsPerPage);
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
      setOffsetStudents((current - 2) * studentsPerPage);
    }
  }

  function nextPage(e) {
    e.preventDefault();
    if (current < totalPage) {
      setCurrent(current + 1);
      setOffsetStudents(current * studentsPerPage);
    }
  }

  const PaginationTable = () => {
    return (
      <div className="table-pagination">
        <div className="pagination-button">
          {level === 1 ? (
            <a onClick={(e) => educationLevel(e)}>Primaria</a>
          ) : (
            <a onClick={(e) => educationLevel(e)}>Pre-Escolar</a>
          )}
        </div>
        <nav aria-label="...">
          <ul className="pagination">
            <li className="page-item" onClick={(e) => firstPage(e)}>
              <a className="page-link lessPadding" href="#">
                Primera Página
              </a>
            </li>
            <li className="page-item disabled" onClick={(e) => prevPage(e)}>
              <a
                className="page-link lessPadding"
                href="#"
                aria-label="Previous"
              >
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item active" aria-current="page">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link lessPadding" href="#">
                3
              </a>
            </li>
            {/* <li className="page-item" onClick={(e) => nextPage(e)}>
              <a className="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li> */}
            <li className="page-item" onClick={(e) => lastPage(e)}>
              <a className="page-link lessPadding" href="#">
                Última Página
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  };

  const Paginate = () => {
    return (
      <div className="table-pagination">
        <div>
          <p className="text-sm text-gray-700">
            Mostrando{" "}
            <span className="font-medium">
              {studentsPerPage * (current - 1) + 1}
            </span>{" "}
            para{" "}
            <span className="font-medium">
              {current * studentsPerPage < totalStudents
                ? current * studentsPerPage
                : totalStudents}
            </span>{" "}
            de <span className="font-medium">{totalStudents}</span> resultados
          </p>
        </div>

        <nav>
          <ul className="pagination">
            <li className="page-item" onClick={(e) => firstPage(e)}>
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
            <li className="page-item" onClick={(e) => lastPage(e)}>
              <a className="page-link lessPadding" href="#">
                <i className="material-icons">last_page</i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  };

  // const TableHeader = ({ props, changeButton }) => {
  //   return (
  //     <div id="headerTable-container">
  //       <h4 className="card-title">Lista de todos los Estudiantes </h4>
  //       <div className="search-bar">
  //         <p>
  //           <i className="material-icons">search</i>
  //           Buscar:
  //         </p>
  //         <form>
  //           <input
  //             type="text"
  //             value={props}
  //             // onChange={changeButton}
  //             className="z-depth-2"
  //           />
  //         </form>
  //       </div>
  //       <div className="card-header">
  //         <Link href="/admin/students/add-student">
  //           <a className="btn btn-primary">Agregar Estudiante +</a>
  //         </Link>
  //       </div>
  //     </div>
  //   );
  // };

  console.log(level);
  return (
    <>
      {/* <div className="table-responsive students-table z-depth-3"> */}
      <DataTable
        dense
        direction="auto"
        highlightOnHover={true}
        columns={tableColumns}
        data={filter}
        striped={true}
        fixedHeader
        fixedHeaderScrollHeight="750px"
        noDataComponent={<h2>No se encontro ningun elemento</h2>}
        progressPending={loading}
        progressComponent={<Loading />}
        pagination
        persistTableHead
        persistTablePaginationComponent
        //el paginationServer hacia que no funcionarai bien la paginacion,
        // paginationComponentOptions={paginationOptions}
        paginationServer
        paginationComponent={Paginate}
        //   onChangeRowsPerPage={20}
        subHeader
        subHeaderComponent={
          <TableHeader
            searchButton={headerSearch}
            inputValue={search}
            tableName={tableTitle}
            searchSubmit={handleSearchSubtmit}
            level={level}
            educationLevel={educationLevel}
          />
        }
      />
    </>
  );
};

export default MyDataTable;
