import React, { useEffect, useMemo, useState } from "react";
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
import { useRef } from "react";

const ListStaff = () => {
  const [state, setState] = useState({
    loading: false,
    error: null,
    api: [],
    filter: [],
    search: "",
  });
  const [totalStaff, setTotalStaff] = useState(0);
  const componentRef = useRef();

  useEffect(() => {
    setState({ loading: true, error: null });
    axios
      .get(endPoints.staff.getAllStaff)
      .then((response) => {
        setTotalStaff(response.data.length);
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
  }, []);

  useMemo(() => {
    const result = state?.api?.filter((staff) => {
      return `${staff.name} ${staff.lastName} ${staff.ci} ${staff.role.name}`
        .toLowerCase()
        .includes(state.search.toLowerCase());
    });

    setState({ ...state, filter: result });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.api, state.search]);

  const handleSearchButton = (e) => {
    setState({ ...state, search: e.target.value });
  };

  const handleDeleteStaff = (e) => {
    const id = e.target.getAttribute("id");
    Swal.fire({
      title: "¿Estás seguro?",
      text: "¿Deseas eliminar a este miembro del Personal?",
      icon: "warning",
      showDenyButton: "true",
      confirmButtonText: "Sí, deseo eliminar a este miembro",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(endPoints.staff.deleteStaff(id))
          .then((response) => {
            Swal.fire("Se ha eliminado correctamente", "", "success");
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

  const Actions = () => {
    return (
      <>
        {state?.filter?.length > 0 && (
          <>
            <CSVLink data={state.filter} filename="estudiantesGrado.csv">
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
              documentTitle="Personal de la Escuela"
              pageStyle="print"
              content={() => componentRef.current}
              copyStyles={true}
            />
            <button className="btn btn-success text-white">
              <i className="fas fa-file-excel mr-2"></i>
              <ReactHtmlTableToExcel
                id="exportExcel"
                sheet="Pagina 1"
                table="staff"
                filename="personal"
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
                    "http://localhost:3000/api/v1/admin/staff/reports",
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
    <div className="content-body">
      <div className="container-fluid">
        <AdminMainPagination pageName={"Personal"} />

        <div className="row">
          <div className="col-lg-12">
            <div className="row tab-content">
              <div
                id="list-view"
                className="tab-pane fade active show col-lg-12"
              >
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Lista de todos los Staff </h4>
                    <Link href="/admin/personal/agregar-personal">
                      <a className="btn btn-primary">+ Agregar Staff </a>
                    </Link>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive" ref={componentRef}>
                      <MyDataTable
                        data={state}
                        tableColumns={columns(handleDeleteStaff)}
                        headerSearch={handleSearchButton}
                        totalstaffs={totalStaff}
                        neighbours={2}
                        setOffsetStudents={0}
                        studentsPerPage={50}
                        actionsComponent={Actions()}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <table id="staff" style={{ display: "none" }}>
        <thead>
          <tr>
            <th scope="col">Cédula</th>
            <th scope="col">Nombres</th>
            <th scope="col">Apellidos</th>
            <th scope="col">Dirección</th>
            <th scope="col">Teléfono</th>
            <th scope="col">Fecha de Nacimiento</th>
            <th scope="col">Correo</th>
            <th scope="col">Cargo</th>
          </tr>
        </thead>
        <tbody>
          {state?.filter?.map((staff) => (
            <tr key={staff.id}>
              <th>{staff.ci}</th>
              <th>{staff.name}</th>
              <th>{staff.lastName}</th>
              <th>{staff.address}</th>
              <th>{staff.phone}</th>
              <th>{staff.birthDate}</th>
              <th>{staff.email}</th>
              <th>{staff.role.name}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListStaff;
