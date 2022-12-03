import React, { useEffect, useState } from "react";

import axios from "axios";
import AdminMainPagination from "Components/AdminMainPagination";
import Loader from "Components/Loader";
import Loading from "Components/Loaders/Loading";
import AddNewUser from "Components/Modal/AddNewUser";
import EditUser from "Components/Modal/EditUser";

import Link from "next/link";

import Swal from "sweetalert2";
import endPoints from "utils/endpoints";
import MyDataTable from "Components/DataTables/MyDataTable";
import { columns } from "./js/columns";

const AuditoryPage = () => {
  const [state, setState] = useState({
    loading: false,
    error: null,
  });
  const [users, setUsers] = useState([]);
  // const [usersRole, setUsersRole] = useState([]);

  return (
    <>
      <div className="content-body">
        <div className="container-fluid">
          <AdminMainPagination pageName={"Auditoria"} />

          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Control de Movimientos</h4>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <MyDataTable data={state} tableColumns={columns()} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuditoryPage;
