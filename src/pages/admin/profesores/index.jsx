import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";

import MyDataTable from "Components/DataTables/MyDataTable";
import { columns } from "./js/columns";
import axios from "axios";
import endPoints from "utils/endpoints";
import AdminMainPagination from "Components/AdminMainPagination";
import Head from "next/head";
import Swal from "sweetalert2";

const ListTeachers = () => {
  const [state, setState] = useState({
    loading: false,
    error: null,
    api: [],
    filter: [],
    search: "",
    tableTitle: "Profesores",
  });
  const [totalTeachers, setTotalTeachers] = useState(0);
  useEffect(() => {
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
  }, []);

  useMemo(() => {
    const result = state?.api?.filter((teacher) => {
      return `${teacher.name} ${teacher.lastName} ${teacher.ci} ${teacher.grade.name} ${teacher.grade.section}`
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
          .delete(endPoints.teachers.deleteTeacher(id))
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
                      <Link href="/admin/profesores/añadir-profesor">
                        <a className="btn btn-primary">Agregar Profesor/a +</a>
                      </Link>
                    </div>
                    <div className="card-body">
                      <div className="table-responsive">
                        <MyDataTable
                          data={state}
                          tableColumns={columns(handleDeleteTeacher)}
                          headerSearch={handleSearchButton}
                          totalStudents={totalTeachers}
                          neighbours={2}
                          setOffsetStudents={0}
                          studentsPerPage={50}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListTeachers;
