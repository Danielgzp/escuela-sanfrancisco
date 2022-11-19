import Link from "next/link";
import React, { useEffect, useState } from "react";
import GradeService from "services/grade.service";
import StudentsService from "services/students.service";
import styles from "./admin.module.css";
import ReportDataTable from "./js/DataTable";

const service = new StudentsService();
const gradesService = new GradeService();

const AdminDashboard = ({ data }) => {
  const { totalStudents, countPreSchool, grades } = data;
  // console.log(data);

  return (
    <>
      <div className="content-body">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-6 col-xxl-6 col-sm-12">
              <div className="row">
                <div className="col-xl-6 col-xxl-6 col-sm-6">
                  <div className="widget-stat card">
                    <div className="card-body">
                      <h4 className="card-title">Estudiantes totales</h4>
                      <h3>{totalStudents}</h3>
                      <div className="progress mb-2">
                        <div
                          className="progress-bar progress-animated bg-primary"
                          style={{ width: "80%" }}
                        ></div>
                      </div>
                      <small>80% Increase in 20 Days</small>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-xxl-6 col-sm-6">
                  <div className="widget-stat card">
                    <div className="card-body">
                      <h4 className="card-title">Primaria</h4>
                      <h3>{}</h3>
                      <div className="progress mb-2">
                        <div
                          className="progress-bar progress-animated bg-warning"
                          style={{ width: "50%" }}
                        ></div>
                      </div>
                      <small>50% Increase in 25 Days</small>
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
                          style={{ width: "76%" }}
                        ></div>
                      </div>
                      <small>76% Increase in 20 Days</small>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-xxl-6 col-sm-6">
                  <div className="widget-stat card">
                    <div className="card-body">
                      <h4 className="card-title">Fees Collection</h4>
                      <h3>25160$</h3>
                      <div className="progress mb-2">
                        <div
                          className="progress-bar progress-animated bg-success"
                          style={{ width: "30%" }}
                        ></div>
                      </div>
                      <small>30% Increase in 30 Days</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-xxl-6 col-sm-12">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Income/Expense Report</h3>
                </div>
                <div className="card-body">
                  <div id="morris_bar_2" className="morris_chart_height"></div>
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
  const response = await gradesService.find();
  const grades = await JSON.parse(JSON.stringify(response));

  return {
    props: {
      data: {
        totalStudents,
        countPreSchool,
        grades,
      },
    },
  };
}
