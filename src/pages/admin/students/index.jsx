import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";
import { loadScripts } from "utils/loadScripts";
import endPoints from "utils/endpoints";
import MyDataTable from "Components/DataTable/MyDataTable";
const boom = require("@hapi/boom");

import styles from "./styles";

// import "../../../public/vendor/pickadate/themes/default.date.module.css";
// import styles from "../../../public/vendor/pickadate/themes/default.module.css";

const ListStudents = () => {
  useEffect(() => {
    loadScripts();
  }, []);

  return (
    <>
      {/* <ContentBody /> */}
      <div className="content-body">
        <div className="container-fluid">
          <div className="row page-titles mx-0">
            <div className="col-sm-6 p-md-0">
              <div className="welcome-text">
                <h4>All Student</h4>
              </div>
            </div>
            <div className="col-sm-6 p-md-0 justify-content-sm-end mt-2 mt-sm-0 d-flex">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="index.html">Home</a>
                </li>
                <li className="breadcrumb-item active">
                  <a href="#!">Students</a>
                </li>
                <li className="breadcrumb-item active">
                  <a href="#!">All Student</a>
                </li>
              </ol>
            </div>
          </div>
        </div>
        <MyDataTable />
      </div>
      <style jsx>{styles}</style>
    </>
  );
};

export default ListStudents;
