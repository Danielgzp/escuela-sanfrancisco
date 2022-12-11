import React, { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";

import MyDataTable from "Components/DataTables/MyDataTable";
import { columns } from "./js/columns";
import axios from "axios";
import endPoints from "utils/endpoints";
import AdminMainPagination from "Components/AdminMainPagination";
import Swal from "sweetalert2";
import { CSVLink } from "react-csv";
import ReactToPrint from "react-to-print";
import ReactHtmlTableToExcel from "react-html-table-to-excel";
import Cookies from "js-cookie";

const ListTeachers = () => {
  const [state, setState] = useState({
    loading: false,
    error: null,
    api: [],
    filter: [],
    search: "",
  });
  const componentRef = useRef();
  const [totalTeachers, setTotalTeachers] = useState(0);
  const cookie = Cookies.get("userJWT");
  const config = {
    headers: { Authorization: `Bearer ${cookie}` },
  };

  const fetchData = () => {
    setState({ loading: true, error: null });
    axios
      .get(endPoints.teachers.getAllTeachers)
      .then((response) => {
        setTotalTeachers(response.data.length);
        setState({
          ...state,
          loading: false,
          error: null,
          api: response.data,
          filter: state.api,
        });
      })
      .catch((err) => {
        setState({ loading: false, error: err });
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  useMemo(() => {
    console.log(state?.api);
    const result = state?.api?.filter((teacher) => {
      return `${teacher.name} ${teacher.lastName} ${teacher.ci} ${teacher.grade?.name} ${teacher.grade?.section}`
        .toLowerCase()
        .includes(state.search.toLowerCase());
    });

    setState({ ...state, filter: result });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.api, state.search]);

  const handleSearchButton = (e) => {
    setState({ ...state, search: e.target.value });
  };
  const handleDeleteTeacher = (e) => {
    const id = e.target.getAttribute("id");
    Swal.fire({
      title: "¿Estás seguro?",
      text: "¿Deseas eliminar a esta Maestra(o)?",
      icon: "warning",
      showDenyButton: "true",
      confirmButtonText: "Sí, deseo eliminarlo",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(endPoints.teachers.deleteTeacher(id), config)
          .then((response) => {
            Swal.fire("Se ha eliminado correctamente", "", "success");
            fetchData();
          })
          .catch((err) => {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: err.response.data,
            });
          });
      } else if (result.isDenied) {
        Swal.fire("Cancelado", "", "info");
      }
    });
  };

  const TableHeader = () => {
    return (
      <div id="headerTable-container">
        <div className="search-bar">
          <form className="tableForm">
            <div className="form-group">
              <label>
                <i className="material-icons">search</i>
                Buscar:
              </label>
              <input
                type="text"
                name="search"
                value={state.search || ""}
                onChange={handleSearchButton}
                className="z-depth-2"
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Ir
            </button>
          </form>
        </div>
      </div>
    );
  };

  const Actions = () => {
    return (
      <>
        {state?.filter?.length > 0 && (
          <>
            <CSVLink data={state.filter} filename="profesores.csv">
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
              documentTitle="Profesores de la Escuela"
              pageStyle="print"
              content={() => componentRef.current}
              copyStyles={true}
            />
            <button className="btn btn-success text-white">
              <i className="fas fa-file-excel mr-2"></i>
              <ReactHtmlTableToExcel
                id="exportExcel"
                sheet="Pagina 1"
                table="teachers"
                filename="profesores"
                buttonText="Excel"
                style={{ border: "none", backgroundColor: "transparent" }}
                // className="btn"
              ></ReactHtmlTableToExcel>
            </button>

            <button
              className="btn btn-danger"
              onClick={() => {
                axios
                  .post(
                    "http://localhost:3000/api/v1/admin/teachers/reports",
                    state.filter
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

  return (
    <>
      <div className="content-body">
        <div className="container-fluid">
          <AdminMainPagination pageName={"Profesores"} />
          <div className="row">
            <div className="col-lg-12">
              <div className="row tab-content">
                <div
                  id="list-view"
                  className="tab-pane fade active show col-lg-12"
                >
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">
                        Lista de todos los Profesores{" "}
                      </h4>
                      <Link href="/admin/profesores/agregar-profesor">
                        <a className="btn btn-primary">Agregar Profesor/a +</a>
                      </Link>
                    </div>
                    <div className="card-body">
                      <div className="table-responsive" ref={componentRef}>
                        <MyDataTable
                          actionsComponent={Actions()}
                          loading={state.loading}
                          filter={state.filter}
                          tableColumns={columns(handleDeleteTeacher)}
                          // firstPage={handleClickFirstPage}
                          // lastPage={handleClickLastPage}
                          headerComponent={TableHeader()}
                          setOffset={0}
                          totalItems={totalTeachers}
                          itemsPerPage={50}
                          neighbours={2}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <table id="teachers" style={{ display: "none" }}>
          <thead>
            <tr>
              <th scope="col">Grado</th>
              <th scope="col">Cédula</th>
              <th scope="col">Nombres</th>
              <th scope="col">Apellidos</th>
              <th scope="col">Dirección</th>
              <th scope="col">Teléfono</th>
              <th scope="col">Fecha de Nacimiento</th>
              <th scope="col">Correo</th>
            </tr>
          </thead>
          <tbody>
            {state?.filter?.map((teacher) => (
              <tr key={teacher.id}>
                <th>
                  {teacher.grade?.name} {teacher.grade?.section}
                </th>
                <th>{teacher.ci}</th>
                <th>{teacher.name}</th>
                <th>{teacher.lastName}</th>
                <th>{teacher.address}</th>
                <th>{teacher.phone}</th>
                <th>{teacher.birthDate}</th>
                <th>{teacher.email}</th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ListTeachers;
