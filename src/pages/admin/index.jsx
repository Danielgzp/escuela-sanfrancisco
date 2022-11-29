import Link from "next/link";
import React, { useEffect, useState } from "react";
import GradeService from "services/grade.service";
import styles from "./admin.module.css";
import ReportDataTable from "./js/DataTable";

import StaffService from "services/staff.service";
import StudentsService from "services/students.service";
import TeacherService from "services/teacher.service";
import { Chart } from "Components/Charts/Chart";

const service = new StudentsService();
const gradesService = new GradeService();
const teachersService = new TeacherService();
const staffService = new StaffService();

import "../../Components/DataTable/css/datatable.css";

const AdminDashboard = ({ props }) => {
  const {
    totalStudents,
    countPreSchool,
    countPrimary,
    countStaff,
    countTeachers,
    grades,
  } = props;

  const data = {
    labels: [
      "Estudiantes Totales",
      "Primaria",
      "PreEscolar",
      "Personal",
      "Maestros",
    ],
    datasets: [
      {
        label: "Registro Total",
        borderWidth: 2,
        backgroundColor: ["#ffbb11", "#c0c0c0", "#50AF95", "f3ba2f", "#2a71d0"],
        data: [
          totalStudents,
          countPreSchool,
          countPrimary,
          countStaff,
          countTeachers,
        ],
      },
    ],
  };

  // console.log(data);

  return (
    <>
      <div className="content-body">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-5 col-xxl-5 col-sm-12">
              <div className="row">
                <div className="col-xl-6 col-xxl-6 col-sm-6">
                  <div className="widget-stat card">
                    <div className="card-body">
                      <h4 className="card-title">Estudiantes totales</h4>
                      <h3>{totalStudents}</h3>
                      <div className="progress mb-2">
                        <div
                          className="progress-bar progress-animated bg-primary"
                          style={{ width: "1000%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-xxl-6 col-sm-6">
                  <div className="widget-stat card">
                    <div className="card-body">
                      <h4 className="card-title">Primaria</h4>
                      <h3>{countPrimary}</h3>
                      <div className="progress mb-2">
                        <div
                          className="progress-bar progress-animated bg-warning"
                          style={{ width: "1000%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-xxl-6 col-sm-6">
                  <div className="widget-stat card">
                    <div className="card-body">
                      <h4 className="card-title">Pre-Escolar</h4>
                      <h3>{countPreSchool}</h3>
                      <div className="progress mb-2">
                        <div
                          className="progress-bar progress-animated bg-red"
                          style={{ width: "100%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-xxl-6 col-sm-6">
                  <div className="widget-stat card">
                    <div className="card-body">
                      <h4 className="card-title">Maestros totales</h4>
                      <h3>{countTeachers}</h3>
                      <div className="progress mb-2">
                        <div
                          className="progress-bar progress-animated bg-success"
                          style={{ width: "100%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-xxl-6 col-sm-6">
                  <div className="widget-stat card">
                    <div className="card-body">
                      <h4 className="card-title">Personal Total</h4>
                      <h3>{countStaff}</h3>
                      <div className="progress mb-2">
                        <div
                          className="progress-bar progress-animated bg-secondary"
                          style={{ width: "100%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-7 col-xxl-7 col-sm-12">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Gráficos de datos</h3>
                </div>
                <div className="card-body">
                  <Chart chartData={data} />
                  {/* <Chart chartData={data} /> */}
                  {/* <div id="morris_bar_2" className="morris_chart_height"></div> */}
                </div>
              </div>
            </div>
          </div>
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
                        Lista de todos los Estudiantes{" "}
                      </h4>
                      <Link href="/admin/estudiantes/agregar-estudiante">
                        <a className="btn btn-primary">Agregar Estudiante +</a>
                      </Link>
                    </div>
                    <div className="card-body">
                      <div className="table-responsive">
                        <ReportDataTable grades={grades} />
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

export default AdminDashboard;

export async function getServerSideProps() {
  const totalStudents = await service.countStudents();
  const countPreSchool = await service.countPreScool();
  const countPrimary = await service.countPrimary();
  const countTeachers = await teachersService.countTeachers();
  const countStaff = await staffService.countStaff();

  const response = await gradesService.find();
  const grades = await JSON.parse(JSON.stringify(response));

  return {
    props: {
      props: {
        countStaff,
        countTeachers,
        totalStudents,
        countPreSchool,
        countPrimary,
        grades,
      },
    },
  };
}
