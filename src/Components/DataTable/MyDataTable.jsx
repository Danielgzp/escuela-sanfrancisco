import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";

//import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
// este boopstrap da en el carousel
import DataTable from "react-data-table-component";
import Swal from "sweetalert2";

// import PageError from "../Error/PageError";

import Loader from "Components/Loader";
import { columnas, paginationOptions } from "./js/datatable";
import TableHeader from "./TableHeader";
import PaginationTable from "./PaginationTable";
import axios from "axios";
import endPoints from "utils/endpoints";
// import "./MyDataTable.css";

const MyDataTable = (props) => {
  const [state, setState] = useState({
    loading: false,
    error: null,
    api: [],
    filter: [],
  });

  useEffect(() => {
    async function fetchData() {
      setState({
        loading: true,
        error: null,
      });
      try {
        const response = await axios.get(endPoints.students.getAllStudents);

        const students = await JSON.parse(JSON.stringify(response.data));

        setState({
          ...state,
          loading: false,
          error: null,
          api: students,
          //   filter: state.api
        });
      } catch (error) {
        setState({ loading: false, error: error });
      }
    }
    fetchData();
  }, []);

  console.log(state.api)

  async function studentDelete(props) {
    console.log(props);
    try {
      await axios.delete(endPoints.students.deleteStudent(1));
      Swal.fire("El Estudiante se ha eliminado correctamente", "", "success");
    } catch (error) {
      Swal.fire("Oops", error.message, "error");
    }
  }

  const handleDeleteStudent = async (props) => {
    console.log(props);
    Swal.fire({
      title: "¿Estás seguro?",
      text: "¿Deseas eliminar este Estudiante?",
      icon: "warning",
      showDenyButton: "true",
      confirmButtonText: "Sí, deseo eliminar el estudiante",
    }).then((result) => {
      if (result.isConfirmed) {
        studentDelete();
      } else if (result.isDenied) {
        Swal.fire("Cancelado", "", "info");
      }
    });
  };

  const PaginationTable = () => {
    return (
      <div className="table-pagination">
        <div className="pagination-button">
          <a onClick={""}>Pre-Escolar</a>
        </div>
        <ul className="pagination right">
          <div className="pagination-container">
            <li className="page-item">
              <a className="page-link">Previousss</a>
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
            <li className="page-item">
              <a className="page-link" href="#">
                Next
              </a>
            </li>
          </div>
        </ul>
      </div>
    );
  };
  // if (state.loading) {
  //   return <Loader />;
  // }
  // if (state.error) {
  //   return <PageError />;
  // }

  return (
    <>
      <div className="table-responsive students-table z-depth-3">
        <DataTable
          dense
          direction="auto"
          highlightOnHover={true}
          columns={columnas(handleDeleteStudent)}
          data={state.api}
          striped={true}
          fixedHeader
          //   fixedHeaderScrollHeight="550px"
          noDataComponent={<h2>No se encontro ningun elemento</h2>}
          progressPending={state.loading}
          progressComponent={<Loader />}
          pagination
          //   paginationComponentOptions={paginationOptions}
          //   paginationComponent={PaginationTable}
          paginationServer
          //   onChangeRowsPerPage={20}
          subHeader
        />
      </div>
      {/* <style jsx>{styles}</style> */}
    </>
  );
};

export default MyDataTable;
