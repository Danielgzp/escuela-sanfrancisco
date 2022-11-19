import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";

import MyDataTable from "Components/DataTable/MyDataTable";
import { columns } from "./js/columns";
import axios from "axios";
import endPoints from "utils/endpoints";
import AdminMainPagination from "Components/AdminMainPagination";
import Head from "next/head";

const ListTeachers = () => {
  const [state, setState] = useState({
    loading: false,
    error: null,
    api: [],
    filter: [],
    search: "",
    tableTitle: "Lista del Personal",
  });

  useEffect(() => {
    async function fetchData() {
      setState({
        loading: true,
        error: null,
      });
      try {
        const response = await axios.get(endPoints.teachers.getAllTeachers);
        const teachers = await JSON.parse(JSON.stringify(response.data));
        setState({
          ...state,
          loading: false,
          error: null,
          api: teachers,
          filter: state.api,
        });
      } catch (err) {
        setState({ loading: false, error: err });
      }
    }
    fetchData();
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

  return (
    <>
      <Head>
        <title>Test</title>
        <link rel="stylesheet" href="../styles/style.css" key="test" />
      </Head>
      <div className="content-body">
        <div className="container-fluid">
          <AdminMainPagination pageName={"Profesores"} />
          <div className="row">
            <div className="col-lg-12">
              <ul className="nav nav-pills mb-3">
                <li className="nav-item">
                  <a
                    href="#list-view"
                    data-toggle="tab"
                    className="nav-link btn-primary mr-1 show active"
                  >
                    List View
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#grid-view"
                    data-toggle="tab"
                    className="nav-link btn-primary"
                  >
                    Grid View
                  </a>
                </li>
              </ul>
            </div>
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
                          tableColumns={columns}
                          headerSearch={handleSearchButton}
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
