import React, { useEffect, useState, useRef } from "react";
import axios from "axios";

import AdminMainPagination from "Components/AdminMainPagination";
import Swal from "sweetalert2";
import ReportDataTable from "Components/DataTables/ReportsDatatable";
import ReactHtmlTableToExcel from "react-html-table-to-excel";
import ReactToPrint from "react-to-print";
import GradeService from "services/grade.service";
import endPoints from "utils/endpoints";

import { CSVLink } from "react-csv";
import { columns } from "./js/columns";
// import { columns } from "./js/columns";

const service = new GradeService();

const GradeStudents = ({ data }) => {
  const { grades } = data;
  const [state, setState] = useState({
    loading: false,
    error: null,
  });
  const formRef = useRef(null);
  const componentRef = useRef();
  const [students, setStudents] = useState([]);

  useEffect(() => {}, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(formRef.current);
    const objectData = Object.fromEntries([...formData.entries()]);

    // const gradeData = {
    //   name: objectData.name,
    //   section: objectData.section,
    // };

    setState({ loading: true, error: null });

    axios
      .get(
        `${endPoints.students.getAllStudents}?cedulados=${objectData.cedulado}`
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

        setState({ loading: false, error: err });
      });
  };
  const Actions = () => {
    return (
      <>
        {students.length > 0 && (
          <>
            <CSVLink data={students} filename="estudiantes.ci.csv">
              <button className="btn btn-secondary text-white">
                <i className="fas fa-file-csv mr-2"></i>
                CSV
              </button>
            </CSVLink>
            <ReactToPrint
              trigger={() => {
                return (
                  <button className="btn btn-dark text-white">
                    <i className="fas fa-print mr-2"></i>
                    Imprimir
                  </button>
                );
              }}
              documentTitle="Estudiantes C.I"
              pageStyle="print"
              content={() => componentRef.current}
              copyStyles={true}
            />
            <button className="btn btn-success text-white">
              <i className="fas fa-file-excel mr-2"></i>
              <ReactHtmlTableToExcel
                id="exportExcel"
                sheet="Pagina 1"
                table="studentsCI"
                filename="estudiantes.ci"
                buttonText="Excel"
                style={{ border: "none", backgroundColor: "transparent" }}
                // className="btn"
              ></ReactHtmlTableToExcel>
            </button>

            <button
              className="btn btn-danger"
              onClick={() => {
                setState({ loading: true, error: null });
                axios
                  .post(
                    "http://localhost:3000/api/v1/admin/students/reports?cedulados",
                    students
                  )
                  .then((response) => {
                    console.log(response);
                    setState({ loading: false, error: null });
                    Swal.fire({
                      icon: "success",
                      title: "PDF creado",
                      text: "Se ha generado exitosamente el reporte",
                    });
                  })
                  .catch((err) => {
                    console.log(err);
                    setState({ loading: false, error: err });
                    Swal.fire({
                      icon: "error",
                      title: "Oops...",
                      text: "Ha ocurrido un error al generar el PDF",
                    });
                  });
              }}
            >
              <i className="fas fa-file-pdf mr-2"></i>
              PDF
            </button>
          </>
        )}
      </>
    );
  };

  const TableHeader = () => {
    return (
      <>
        <div id="headerTable-container">
          <form onSubmit={handleSubmit} ref={formRef} className="tableForm">
            <div className="form-group">
              <label>Selecciona</label>
              <select name="cedulado" className="form-control">
                <option>Alumnos</option>
                <option value="si">Cedulados</option>
                <option value="no">No cedulados</option>
              </select>
            </div>

            <button type="submit" className="btn btn-primary">
              Buscar
            </button>
          </form>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="content-body">
        <div className="container-fluid">
          <AdminMainPagination
            pageName={"Estudiantes Cedulados y no Cedulados"}
          />

          <div className="col-lg-12">
            <div className="card">
              <div className="card-body">
                <div className="table-responsive" ref={componentRef}>
                  <ReportDataTable
                    actionsComponent={Actions()}
                    tableHeaderComponent={TableHeader()}
                    loading={state.loading}
                    columns={columns()}
                    data={students}
                    tableTitle={"Lista de Estudiantes"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <table id="studentsCI" style={{ display: "none" }}>
        <thead>
          <tr>
            <th scope="col">Grado</th>
            <th scope="col">C.I Escolar</th>
            {students?.nativeCi && <th scope="col">Cédula</th>}
            <th scope="col">Nombres</th>
            <th scope="col">Apellidos</th>
            <th scope="col">Género</th>
            <th scope="col">Fecha de Nacimiento</th>
          </tr>
        </thead>
        <tbody>
          {students?.map((student) => (
            <tr key={student.id}>
              <th>
                {student.grade?.name} {student.grade?.section}
              </th>
              <th>{student.schoolarshipCi}</th>
              {student.nativeCi && <th>{student.nativeCi}</th>}
              <th>{student.name}</th>
              <th>{student.lastName}</th>
              <th>{student.gender}</th>
              <th>{student.birthDate}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default GradeStudents;

export async function getServerSideProps() {
  const response = await service.find();
  const grades = await JSON.parse(JSON.stringify(response));

  return {
    props: {
      data: {
        grades,
      },
    },
  };
}
