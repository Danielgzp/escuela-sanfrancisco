import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";
import { loadScripts } from "utils/loadScripts";
import endPoints from "utils/endpoints";
import MyDataTable from "Components/DataTable/MyDataTable";
const boom = require("@hapi/boom");

// import styles from "./styles";

// import "../../../public/vendor/pickadate/themes/default.date.module.css";
// import styles from "../../../public/vendor/pickadate/themes/default.module.css";

const ListStudents = () => {
  useEffect(() => {
    loadScripts();
    const script = document.createElement("script");
    const script2 = document.createElement("script");

    // script.src = "/vendor/datatables/js/jquery.dataTables.min.js";
    // script.async = false;
    // document.body.appendChild(script);
    // script2.src = "/js/plugins-init/datatables.init.js";
    // script2.async = false;
    // document.body.appendChild(script2);
  }, []);

  return (
    <>
      <div class="content-body">
        <div class="container-fluid">
          <div class="row page-titles mx-0">
            <div class="col-sm-6 p-md-0">
              <div class="welcome-text">
                <h4>All Student</h4>
              </div>
            </div>
            <div class="col-sm-6 p-md-0 justify-content-sm-end mt-2 mt-sm-0 d-flex">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="index.html">Home</a>
                </li>
                <li class="breadcrumb-item active">
                  <a href="javascript:void(0);">Students</a>
                </li>
                <li class="breadcrumb-item active">
                  <a href="javascript:void(0);">All Student</a>
                </li>
              </ol>
            </div>
          </div>

          <div class="row">
            <div class="col-lg-12">
              <ul class="nav nav-pills mb-3">
                <li class="nav-item">
                  <a
                    href="#list-view"
                    data-toggle="tab"
                    class="nav-link btn-primary mr-1 show active"
                  >
                    List View
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    href="#grid-view"
                    data-toggle="tab"
                    class="nav-link btn-primary"
                  >
                    Grid View
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-lg-12">
              <div class="row tab-content">
                <div id="list-view" class="tab-pane fade active show col-lg-12">
                  <div class="card">
                    <div class="card-header">
                      <h4 class="card-title">All Students List </h4>
                      <a href="add-student.html" class="btn btn-primary">
                        + Add new
                      </a>
                    </div>
                    <div class="card-body">
                      <div class="table-responsive">
                        <MyDataTable />
                      </div>
                    </div>
                  </div>
                </div>
                <div id="grid-view" class="tab-pane fade col-lg-12">
                  <div class="row">
                    <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                      <div class="card card-profile">
                        <div class="card-header justify-content-end pb-0">
                          <div class="dropdown">
                            <button
                              class="btn btn-link"
                              type="button"
                              data-toggle="dropdown"
                            >
                              <span class="dropdown-dots fs--1"></span>
                            </button>
                            <div class="dropdown-menu dropdown-menu-right border py-0">
                              <div class="py-2">
                                <a
                                  class="dropdown-item"
                                  href="javascript:void(0);"
                                >
                                  Edit
                                </a>
                                <a
                                  class="dropdown-item text-danger"
                                  href="javascript:void(0);"
                                >
                                  Delete
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="card-body pt-2">
                          <div class="text-center">
                            <div class="profile-photo">
                              <img
                                src="images/profile/small/pic2.jpg"
                                width="100"
                                class="img-fluid rounded-circle"
                                alt=""
                              />
                            </div>
                            <h3 class="mt-4 mb-1">Alexander</h3>
                            <p class="text-muted">M.COM., P.H.D.</p>
                            <ul class="list-group mb-3 list-group-flush">
                              <li class="list-group-item px-0 d-flex justify-content-between">
                                <span>Roll No.</span>
                                <strong>02</strong>
                              </li>
                              <li class="list-group-item px-0 d-flex justify-content-between">
                                <span class="mb-0">Phone No. :</span>
                                <strong>+01 123 456 7890</strong>
                              </li>
                              <li class="list-group-item px-0 d-flex justify-content-between">
                                <span class="mb-0">Admission Date. :</span>
                                <strong>01 July 2020</strong>
                              </li>
                              <li class="list-group-item px-0 d-flex justify-content-between">
                                <span class="mb-0">Email:</span>
                                <strong>info@example.com</strong>
                              </li>
                            </ul>
                            <a
                              class="btn btn-outline-primary btn-rounded mt-3 px-4"
                              href="about-student.html"
                            >
                              Read More
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                      <div class="card card-profile">
                        <div class="card-header justify-content-end pb-0">
                          <div class="dropdown">
                            <button
                              class="btn btn-link"
                              type="button"
                              data-toggle="dropdown"
                            >
                              <span class="dropdown-dots fs--1"></span>
                            </button>
                            <div class="dropdown-menu dropdown-menu-right border py-0">
                              <div class="py-2">
                                <a
                                  class="dropdown-item"
                                  href="javascript:void(0);"
                                >
                                  Edit
                                </a>
                                <a
                                  class="dropdown-item text-danger"
                                  href="javascript:void(0);"
                                >
                                  Delete
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="card-body pt-2">
                          <div class="text-center">
                            <div class="profile-photo">
                              <img
                                src="images/profile/small/pic3.jpg"
                                width="100"
                                class="img-fluid rounded-circle"
                                alt=""
                              />
                            </div>
                            <h3 class="mt-4 mb-1">Elizabeth</h3>
                            <p class="text-muted">B.COM., M.COM.</p>
                            <ul class="list-group mb-3 list-group-flush">
                              <li class="list-group-item px-0 d-flex justify-content-between">
                                <span>Roll No.</span>
                                <strong>03</strong>
                              </li>
                              <li class="list-group-item px-0 d-flex justify-content-between">
                                <span class="mb-0">Phone No. :</span>
                                <strong>+01 123 456 7890</strong>
                              </li>
                              <li class="list-group-item px-0 d-flex justify-content-between">
                                <span class="mb-0">Admission Date. :</span>
                                <strong>01 July 2020</strong>
                              </li>
                              <li class="list-group-item px-0 d-flex justify-content-between">
                                <span class="mb-0">Email:</span>
                                <strong>info@example.com</strong>
                              </li>
                            </ul>
                            <a
                              class="btn btn-outline-primary btn-rounded mt-3 px-4"
                              href="about-student.html"
                            >
                              Read More
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                      <div class="card card-profile">
                        <div class="card-header justify-content-end pb-0">
                          <div class="dropdown">
                            <button
                              class="btn btn-link"
                              type="button"
                              data-toggle="dropdown"
                            >
                              <span class="dropdown-dots fs--1"></span>
                            </button>
                            <div class="dropdown-menu dropdown-menu-right border py-0">
                              <div class="py-2">
                                <a
                                  class="dropdown-item"
                                  href="javascript:void(0);"
                                >
                                  Edit
                                </a>
                                <a
                                  class="dropdown-item text-danger"
                                  href="javascript:void(0);"
                                >
                                  Delete
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="card-body pt-2">
                          <div class="text-center">
                            <div class="profile-photo">
                              <img
                                src="images/profile/small/pic4.jpg"
                                width="100"
                                class="img-fluid rounded-circle"
                                alt=""
                              />
                            </div>
                            <h3 class="mt-4 mb-1">Amelia</h3>
                            <p class="text-muted">M.COM., P.H.D.</p>
                            <ul class="list-group mb-3 list-group-flush">
                              <li class="list-group-item px-0 d-flex justify-content-between">
                                <span>Roll No.</span>
                                <strong>04</strong>
                              </li>
                              <li class="list-group-item px-0 d-flex justify-content-between">
                                <span class="mb-0">Phone No. :</span>
                                <strong>+01 123 456 7890</strong>
                              </li>
                              <li class="list-group-item px-0 d-flex justify-content-between">
                                <span class="mb-0">Admission Date. :</span>
                                <strong>01 July 2020</strong>
                              </li>
                              <li class="list-group-item px-0 d-flex justify-content-between">
                                <span class="mb-0">Email:</span>
                                <strong>info@example.com</strong>
                              </li>
                            </ul>
                            <a
                              class="btn btn-outline-primary btn-rounded mt-3 px-4"
                              href="about-student.html"
                            >
                              Read More
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                      <div class="card card-profile">
                        <div class="card-header justify-content-end pb-0">
                          <div class="dropdown">
                            <button
                              class="btn btn-link"
                              type="button"
                              data-toggle="dropdown"
                            >
                              <span class="dropdown-dots fs--1"></span>
                            </button>
                            <div class="dropdown-menu dropdown-menu-right border py-0">
                              <div class="py-2">
                                <a
                                  class="dropdown-item"
                                  href="javascript:void(0);"
                                >
                                  Edit
                                </a>
                                <a
                                  class="dropdown-item text-danger"
                                  href="javascript:void(0);"
                                >
                                  Delete
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="card-body pt-2">
                          <div class="text-center">
                            <div class="profile-photo">
                              <img
                                src="images/profile/small/pic5.jpg"
                                width="100"
                                class="img-fluid rounded-circle"
                                alt=""
                              />
                            </div>
                            <h3 class="mt-4 mb-1">Charlotte</h3>
                            <p class="text-muted">B.COM., M.COM.</p>
                            <ul class="list-group mb-3 list-group-flush">
                              <li class="list-group-item px-0 d-flex justify-content-between">
                                <span>Roll No.</span>
                                <strong>05</strong>
                              </li>
                              <li class="list-group-item px-0 d-flex justify-content-between">
                                <span class="mb-0">Phone No. :</span>
                                <strong>+01 123 456 7890</strong>
                              </li>
                              <li class="list-group-item px-0 d-flex justify-content-between">
                                <span class="mb-0">Admission Date. :</span>
                                <strong>01 July 2020</strong>
                              </li>
                              <li class="list-group-item px-0 d-flex justify-content-between">
                                <span class="mb-0">Email:</span>
                                <strong>info@example.com</strong>
                              </li>
                            </ul>
                            <a
                              class="btn btn-outline-primary btn-rounded mt-3 px-4"
                              href="about-student.html"
                            >
                              Read More
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                      <div class="card card-profile">
                        <div class="card-header justify-content-end pb-0">
                          <div class="dropdown">
                            <button
                              class="btn btn-link"
                              type="button"
                              data-toggle="dropdown"
                            >
                              <span class="dropdown-dots fs--1"></span>
                            </button>
                            <div class="dropdown-menu dropdown-menu-right border py-0">
                              <div class="py-2">
                                <a
                                  class="dropdown-item"
                                  href="javascript:void(0);"
                                >
                                  Edit
                                </a>
                                <a
                                  class="dropdown-item text-danger"
                                  href="javascript:void(0);"
                                >
                                  Delete
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="card-body pt-2">
                          <div class="text-center">
                            <div class="profile-photo">
                              <img
                                src="images/profile/small/pic6.jpg"
                                width="100"
                                class="img-fluid rounded-circle"
                                alt=""
                              />
                            </div>
                            <h3 class="mt-4 mb-1">Isabella</h3>
                            <p class="text-muted">B.A, B.C.A</p>
                            <ul class="list-group mb-3 list-group-flush">
                              <li class="list-group-item px-0 d-flex justify-content-between">
                                <span>Roll No.</span>
                                <strong>06</strong>
                              </li>
                              <li class="list-group-item px-0 d-flex justify-content-between">
                                <span class="mb-0">Phone No. :</span>
                                <strong>+01 123 456 7890</strong>
                              </li>
                              <li class="list-group-item px-0 d-flex justify-content-between">
                                <span class="mb-0">Admission Date. :</span>
                                <strong>01 July 2020</strong>
                              </li>
                              <li class="list-group-item px-0 d-flex justify-content-between">
                                <span class="mb-0">Email:</span>
                                <strong>info@example.com</strong>
                              </li>
                            </ul>
                            <a
                              class="btn btn-outline-primary btn-rounded mt-3 px-4"
                              href="about-student.html"
                            >
                              Read More
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                      <div class="card card-profile">
                        <div class="card-header justify-content-end pb-0">
                          <div class="dropdown">
                            <button
                              class="btn btn-link"
                              type="button"
                              data-toggle="dropdown"
                            >
                              <span class="dropdown-dots fs--1"></span>
                            </button>
                            <div class="dropdown-menu dropdown-menu-right border py-0">
                              <div class="py-2">
                                <a
                                  class="dropdown-item"
                                  href="javascript:void(0);"
                                >
                                  Edit
                                </a>
                                <a
                                  class="dropdown-item text-danger"
                                  href="javascript:void(0);"
                                >
                                  Delete
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="card-body pt-2">
                          <div class="text-center">
                            <div class="profile-photo">
                              <img
                                src="images/profile/small/pic7.jpg"
                                width="100"
                                class="img-fluid rounded-circle"
                                alt=""
                              />
                            </div>
                            <h3 class="mt-4 mb-1">Sebastian</h3>
                            <p class="text-muted">M.COM., P.H.D.</p>
                            <ul class="list-group mb-3 list-group-flush">
                              <li class="list-group-item px-0 d-flex justify-content-between">
                                <span>Roll No.</span>
                                <strong>07</strong>
                              </li>
                              <li class="list-group-item px-0 d-flex justify-content-between">
                                <span class="mb-0">Phone No. :</span>
                                <strong>+01 123 456 7890</strong>
                              </li>
                              <li class="list-group-item px-0 d-flex justify-content-between">
                                <span class="mb-0">Admission Date. :</span>
                                <strong>01 July 2020</strong>
                              </li>
                              <li class="list-group-item px-0 d-flex justify-content-between">
                                <span class="mb-0">Email:</span>
                                <strong>info@example.com</strong>
                              </li>
                            </ul>
                            <a
                              class="btn btn-outline-primary btn-rounded mt-3 px-4"
                              href="about-student.html"
                            >
                              Read More
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                      <div class="card card-profile">
                        <div class="card-header justify-content-end pb-0">
                          <div class="dropdown">
                            <button
                              class="btn btn-link"
                              type="button"
                              data-toggle="dropdown"
                            >
                              <span class="dropdown-dots fs--1"></span>
                            </button>
                            <div class="dropdown-menu dropdown-menu-right border py-0">
                              <div class="py-2">
                                <a
                                  class="dropdown-item"
                                  href="javascript:void(0);"
                                >
                                  Edit
                                </a>
                                <a
                                  class="dropdown-item text-danger"
                                  href="javascript:void(0);"
                                >
                                  Delete
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="card-body pt-2">
                          <div class="text-center">
                            <div class="profile-photo">
                              <img
                                src="images/profile/small/pic8.jpg"
                                width="100"
                                class="img-fluid rounded-circle"
                                alt=""
                              />
                            </div>
                            <h3 class="mt-4 mb-1">Olivia</h3>
                            <p class="text-muted">B.COM., M.COM.</p>
                            <ul class="list-group mb-3 list-group-flush">
                              <li class="list-group-item px-0 d-flex justify-content-between">
                                <span>Roll No.</span>
                                <strong>08</strong>
                              </li>
                              <li class="list-group-item px-0 d-flex justify-content-between">
                                <span class="mb-0">Phone No. :</span>
                                <strong>+01 123 456 7890</strong>
                              </li>
                              <li class="list-group-item px-0 d-flex justify-content-between">
                                <span class="mb-0">Admission Date. :</span>
                                <strong>01 July 2020</strong>
                              </li>
                              <li class="list-group-item px-0 d-flex justify-content-between">
                                <span class="mb-0">Email:</span>
                                <strong>info@example.com</strong>
                              </li>
                            </ul>
                            <a
                              class="btn btn-outline-primary btn-rounded mt-3 px-4"
                              href="about-student.html"
                            >
                              Read More
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                      <div class="card card-profile">
                        <div class="card-header justify-content-end pb-0">
                          <div class="dropdown">
                            <button
                              class="btn btn-link"
                              type="button"
                              data-toggle="dropdown"
                            >
                              <span class="dropdown-dots fs--1"></span>
                            </button>
                            <div class="dropdown-menu dropdown-menu-right border py-0">
                              <div class="py-2">
                                <a
                                  class="dropdown-item"
                                  href="javascript:void(0);"
                                >
                                  Edit
                                </a>
                                <a
                                  class="dropdown-item text-danger"
                                  href="javascript:void(0);"
                                >
                                  Delete
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="card-body pt-2">
                          <div class="text-center">
                            <div class="profile-photo">
                              <img
                                src="images/profile/small/pic9.jpg"
                                width="100"
                                class="img-fluid rounded-circle"
                                alt=""
                              />
                            </div>
                            <h3 class="mt-4 mb-1">Emma</h3>
                            <p class="text-muted">B.A, B.C.A</p>
                            <ul class="list-group mb-3 list-group-flush">
                              <li class="list-group-item px-0 d-flex justify-content-between">
                                <span>Roll No.</span>
                                <strong>09</strong>
                              </li>
                              <li class="list-group-item px-0 d-flex justify-content-between">
                                <span class="mb-0">Phone No. :</span>
                                <strong>+01 123 456 7890</strong>
                              </li>
                              <li class="list-group-item px-0 d-flex justify-content-between">
                                <span class="mb-0">Admission Date. :</span>
                                <strong>01 July 2020</strong>
                              </li>
                              <li class="list-group-item px-0 d-flex justify-content-between">
                                <span class="mb-0">Email:</span>
                                <strong>info@example.com</strong>
                              </li>
                            </ul>
                            <a
                              class="btn btn-outline-primary btn-rounded mt-3 px-4"
                              href="about-student.html"
                            >
                              Read More
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                      <div class="card card-profile">
                        <div class="card-header justify-content-end pb-0">
                          <div class="dropdown">
                            <button
                              class="btn btn-link"
                              type="button"
                              data-toggle="dropdown"
                            >
                              <span class="dropdown-dots fs--1"></span>
                            </button>
                            <div class="dropdown-menu dropdown-menu-right border py-0">
                              <div class="py-2">
                                <a
                                  class="dropdown-item"
                                  href="javascript:void(0);"
                                >
                                  Edit
                                </a>
                                <a
                                  class="dropdown-item text-danger"
                                  href="javascript:void(0);"
                                >
                                  Delete
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="card-body pt-2">
                          <div class="text-center">
                            <div class="profile-photo">
                              <img
                                src="images/profile/small/pic10.jpg"
                                width="100"
                                class="img-fluid rounded-circle"
                                alt=""
                              />
                            </div>
                            <h3 class="mt-4 mb-1">Jackson</h3>
                            <p class="text-muted">M.COM., P.H.D.</p>
                            <ul class="list-group mb-3 list-group-flush">
                              <li class="list-group-item px-0 d-flex justify-content-between">
                                <span>Roll No.</span>
                                <strong>10</strong>
                              </li>
                              <li class="list-group-item px-0 d-flex justify-content-between">
                                <span class="mb-0">Phone No. :</span>
                                <strong>+01 123 456 7890</strong>
                              </li>
                              <li class="list-group-item px-0 d-flex justify-content-between">
                                <span class="mb-0">Admission Date. :</span>
                                <strong>01 July 2020</strong>
                              </li>
                              <li class="list-group-item px-0 d-flex justify-content-between">
                                <span class="mb-0">Email:</span>
                                <strong>info@example.com</strong>
                              </li>
                            </ul>
                            <a
                              class="btn btn-outline-primary btn-rounded mt-3 px-4"
                              href="about-student.html"
                            >
                              Read More
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <style jsx>{styles}</style> */}
    </>
  );
};

export default ListStudents;
