//import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
// este boopstrap da en el carousel
import DataTable from "react-data-table-component";
import Swal from "sweetalert2";

// import PageError from "../Error/PageError";

import Loader from "Components/Loader";
// import TableHeader from "./TableHeader";
// import PaginationTable from "./PaginationTable";
import axios from "axios";
import endPoints from "utils/endpoints";
// import TableHeader from "./TableHeader";
import Loading from "Components/Loaders/Loading";
import { columns, paginationOptions } from "./columns";
import { useRef, useState } from "react";
import { useMemo } from "react";

import TableHeader from "./TableHeader";

const ReportDataTable = ({ grades }) => {
  const formRef = useRef(null);
  const [students, setStudents] = useState([]);
  const [state, setState] = useState({
    loading: false,
    error: null,
  });
  // const [grades, setGrades] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(formRef.current);
    const objectData = Object.fromEntries([...formData.entries()]);
    const gradeData = {
      name: objectData.name,
      section: objectData.section,
    };

    setState({ loading: true, error: null });
    // console.log(gradeData);
    // console.log(
    //   `${endPoints.students.getAllStudents}?filterGrade=${gradeData.name}&section=${gradeData.section}`
    // );
    axios
      .get(
        `${endPoints.students.getAllStudents}?filterGrade=${gradeData.name}&section=${gradeData.section}`
      )
      .then((response) => {
        setStudents(response.data);
        setState({ loading: false, error: null });
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.response.data,
        });
        console.log(err);
        setState({ loading: false, error: err });
      });
  };

  console.log(students);

  return (
    <>
      <DataTable
        dense
        direction="auto"
        highlightOnHover={true}
        columns={columns()}
        data={students}
        actions={
          <button
            className="btn btn-danger"
            onClick={() => {
              if (students.length === 0) {
                return Swal.fire({
                  icon: "warning",
                  title: "Alerta",
                  text: "Los datos de la tabla estan vacíos",
                });
              }
              axios
                .post("http://localhost:3000/api/v1/export", students)
                .then((response) => {
                  console.log(response);
                  Swal.fire({
                    icon: "success",
                    title: "PDF creado",
                    text: "Se ha generado exitosamente el reporte",
                  });
                })
                .catch((err) => {
                  console.log(err);
                  Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: err.message,
                  });
                });
            }}
          >
            <i class="fas fa-file-pdf mr-2"></i>
            Exportar PDF
          </button>
        }
        // actions={<button className="btn btn-success">Exportar Excel</button>}
        striped={true}
        title="Alumnos por Grado"
        fixedHeader
        fixedHeaderScrollHeight="700px"
        noDataComponent={<h3>No se encontro ningun elemento</h3>}
        progressPending={state.loading}
        progressComponent={<Loading />}
        pagination
        //el paginationServer hacia que no funcionarai bien la paginacion,
        paginationComponentOptions={paginationOptions}
        //   onChangeRowsPerPage={20}
        subHeader
        subHeaderComponent={
          <>
            <TableHeader
              grades={grades}
              handleSubmit={handleSubmit}
              formRef={formRef}
            />
          </>
        }
        persistTableHead
      />
    </>
  );
};

export default ReportDataTable;

{
  /* <div id="headerTable-container">
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
</div>; */
}
