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
    const gradeData = {
      name: objectData.name,
      section: objectData.section,
    };

    setState({ loading: true, error: null });

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

        setState({ loading: false, error: err });
      });
  };

  const Actions = () => {
    return (
      <>
        {students.length > 0 && (
          <>
            <CSVLink data={students} filename="representantesGrado.csv">
              <button type="button" className="btn btn-secondary text-white">
                <i className="fas fa-file-csv mr-2"></i>
                CSV
              </button>
            </CSVLink>
            {/* <ReactToPrint
              trigger={() => {
                return (
                  <button type="button" className="btn btn-dark text-white">
                    <i className="fas fa-print mr-2"></i>
                    Imprimir
                  </button>
                );
              }}
              documentTitle="representantesGrado"
              pageStyle="print"
              content={() => componentRef.current}
              copyStyles={true}
            /> */}
            <button type="button" className="btn btn-success text-white">
              <i className="fas fa-file-excel mr-2"></i>
              <ReactHtmlTableToExcel
                id="exportExcel"
                sheet="Pagina 1"
                table="representants"
                filename="representantesGrado"
                buttonText="Excel"
                style={{ border: "none", backgroundColor: "transparent" }}
                // className="btn"
              ></ReactHtmlTableToExcel>
            </button>

            <button
              type="button"
              className="btn btn-danger"
              onClick={() => {
                axios
                  .post(
                    "http://localhost:3000/api/v1/admin/representants/reports",
                    students
                  )
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
              <label>Selecciona el grado</label>
              <select name="name" className="form-control">
                <option>Grado</option>
                {grades.map((grade) => (
                  <option
                    key={grade.id}
                    value={`${grade.name}`}
                  >{`${grade.name}`}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>Selecciona la seccion</label>
              <select name="section" className="form-control">
                <option>Seccion</option>
                <option value="A">A</option>
                <option value="B">B</option>
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
          <AdminMainPagination pageName={"Lista de representantes por Grado"} />

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
                    tableTitle={"Representantes por Grado"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <table id="representants" style={{ display: "none" }}>
        <thead>
          <tr>
            <th scope="col">C.I Escolar</th>
            <th scope="col">Nombre</th>
            <th scope="col">C.I Representante</th>
            <th scope="col">Nombre del Representante</th>
            <th scope="col">Teléfono</th>
            <th scope="col">Correo</th>
          </tr>
        </thead>
        <tbody>
          {students?.map((student) => (
            <tr key={student.id}>
              <th>{student.schoolarshipCi}</th>
              <th>
                {student.name} {student.lastName}
              </th>
              <th>{student.representant?.ci}</th>
              <th>
                {student.representant?.repName}{" "}
                {student.representant?.repLastName}
              </th>

              <th>{student.representant?.phone}</th>
              <th>{student.representant?.email}</th>
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
