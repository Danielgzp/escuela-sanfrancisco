import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";

import { loadScripts } from "utils/loadScripts";
import MyDataTable from "Components/DataTable/MyDataTable";
import { columns } from "./js/columns";
import axios from "axios";
import endPoints from "utils/endpoints";
import AdminMainPagination from "Components/AdminMainPagination";

const ListStaff = () => {
  const [state, setState] = useState({
    loading: false,
    error: null,
    api: [],
    filter: [],
    search: "",
    tableTitle: "Lista del Personal",
  });

  useEffect(() => {
    loadScripts();
    async function fetchData() {
      setState({
        loading: true,
        error: null,
      });
      try {
        const response = await axios.get(endPoints.staff.getAllStaff);
        const staff = await JSON.parse(JSON.stringify(response.data));
        setState({
          ...state,
          loading: false,
          error: null,
          api: staff,
          filter: state.api,
        });
      } catch (err) {
        setState({ loading: false, error: err });
      }
    }
    fetchData();
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

  return (
    <div className="content-body">
      <div className="container-fluid">
        <AdminMainPagination pageName={"Personal"} />

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
                    <h4 className="card-title">Lista de todos los Staff </h4>
                    <Link href="/admin/staff/añadir-staff">
                      <a className="btn btn-primary">Agregar Staff +</a>
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
  );
};

export default ListStaff;
