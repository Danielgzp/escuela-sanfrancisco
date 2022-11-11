import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useMemo, useState } from "react";
import Swal from "sweetalert2";
import { loadScripts } from "utils/loadScripts";
import endPoints from "utils/endpoints";
import MyDataTable from "Components/DataTable/MyDataTable";
import Link from "next/link";
import { columns } from "./js/columns";
import AdminMainPagination from "Components/AdminMainPagination";

// import styles from "./styles";

// import "../../../public/vendor/pickadate/themes/default.date.module.css";
// import styles from "../../../public/vendor/pickadate/themes/default.module.css";

const ListStudents = () => {
  const [state, setState] = useState({
    loading: false,
    error: null,
    api: [],
    filter: [],
    search: "",
    tableTitle: "Lista de los Estudiantes",
  });

  useEffect(() => {
    loadScripts();

    async function fetchData() {
      setState({
        loading: true,
        error: null,
      });
      try {
        const response = await axios.get(
          `http://localhost:3000/api/v1/students?limit=40&offset=0`
        );

        const students = await JSON.parse(JSON.stringify(response.data));

        setState({
          ...state,
          loading: false,
          error: null,
          api: students,
          filter: state.api,
        });
      } catch (err) {
        setState({ loading: false, error: err });
      }
    }
    fetchData();
    // script.src = "/vendor/datatables/js/jquery.dataTables.min.js";
    // script.async = false;
    // document.body.appendChild(script);
    // script2.src = "/js/plugins-init/datatables.init.js";
    // script2.async = false;
    // document.body.appendChild(script2);
  }, []);

  useMemo(() => {
    const result = state?.api?.filter((student) => {
      return `${student.name} ${student.lastName} ${student.grade.name} ${student.grade.section}`
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
      <div className="content-body">
        <div className="container-fluid">
          <AdminMainPagination pageName={"Estudiantes"} />

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
                        Lista de todos los Estudiantes{" "}
                      </h4>
                      <Link href="/admin/students/add-student">
                        <a className="btn btn-primary">Agregar Estudiante +</a>
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
                <div id="grid-view" className="tab-pane fade col-lg-12">
                  <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="card card-profile">
                        <div className="card-header justify-content-end pb-0">
                          <div className="dropdown">
                            <button
                              className="btn btn-link"
                              type="button"
                              data-toggle="dropdown"
                            >
                              <span className="dropdown-dots fs--1"></span>
                            </button>
                            <div className="dropdown-menu dropdown-menu-right border py-0">
                              <div className="py-2">
                                <a className="dropdown-item" href="#!">
                                  Edit
                                </a>
                                <a
                                  className="dropdown-item text-danger"
                                  href="#!"
                                >
                                  Delete
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card-body pt-2">
                          <div className="text-center">
                            <div className="profile-photo">
                              <img
                                src="/images/profile/small/pic2.jpg"
                                width="100"
                                className="img-fluid rounded-circle"
                                alt=""
                              />
                            </div>
                            <h3 className="mt-4 mb-1">Alexander</h3>
                            <p className="text-muted">M.COM., P.H.D.</p>
                            <ul className="list-group mb-3 list-group-flush">
                              <li className="list-group-item px-0 d-flex justify-content-between">
                                <span>Roll No.</span>
                                <strong>02</strong>
                              </li>
                              <li className="list-group-item px-0 d-flex justify-content-between">
                                <span className="mb-0">Phone No. :</span>
                                <strong>+01 123 456 7890</strong>
                              </li>
                              <li className="list-group-item px-0 d-flex justify-content-between">
                                <span className="mb-0">Admission Date. :</span>
                                <strong>01 July 2020</strong>
                              </li>
                              <li className="list-group-item px-0 d-flex justify-content-between">
                                <span className="mb-0">Email:</span>
                                <strong>info@example.com</strong>
                              </li>
                            </ul>
                            <a
                              className="btn btn-outline-primary btn-rounded mt-3 px-4"
                              href="about-student.html"
                            >
                              Read More
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="card card-profile">
                        <div className="card-header justify-content-end pb-0">
                          <div className="dropdown">
                            <button
                              className="btn btn-link"
                              type="button"
                              data-toggle="dropdown"
                            >
                              <span className="dropdown-dots fs--1"></span>
                            </button>
                            <div className="dropdown-menu dropdown-menu-right border py-0">
                              <div className="py-2">
                                <a className="dropdown-item" href="#!">
                                  Edit
                                </a>
                                <a
                                  className="dropdown-item text-danger"
                                  href="#!"
                                >
                                  Delete
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card-body pt-2">
                          <div className="text-center">
                            <div className="profile-photo">
                              <img
                                src="/images/profile/small/pic3.jpg"
                                width="100"
                                className="img-fluid rounded-circle"
                                alt=""
                              />
                            </div>
                            <h3 className="mt-4 mb-1">Elizabeth</h3>
                            <p className="text-muted">B.COM., M.COM.</p>
                            <ul className="list-group mb-3 list-group-flush">
                              <li className="list-group-item px-0 d-flex justify-content-between">
                                <span>Roll No.</span>
                                <strong>03</strong>
                              </li>
                              <li className="list-group-item px-0 d-flex justify-content-between">
                                <span className="mb-0">Phone No. :</span>
                                <strong>+01 123 456 7890</strong>
                              </li>
                              <li className="list-group-item px-0 d-flex justify-content-between">
                                <span className="mb-0">Admission Date. :</span>
                                <strong>01 July 2020</strong>
                              </li>
                              <li className="list-group-item px-0 d-flex justify-content-between">
                                <span className="mb-0">Email:</span>
                                <strong>info@example.com</strong>
                              </li>
                            </ul>
                            <a
                              className="btn btn-outline-primary btn-rounded mt-3 px-4"
                              href="about-student.html"
                            >
                              Read More
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="card card-profile">
                        <div className="card-header justify-content-end pb-0">
                          <div className="dropdown">
                            <button
                              className="btn btn-link"
                              type="button"
                              data-toggle="dropdown"
                            >
                              <span className="dropdown-dots fs--1"></span>
                            </button>
                            <div className="dropdown-menu dropdown-menu-right border py-0">
                              <div className="py-2">
                                <a className="dropdown-item" href="#!">
                                  Edit
                                </a>
                                <a
                                  className="dropdown-item text-danger"
                                  href="#!"
                                >
                                  Delete
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card-body pt-2">
                          <div className="text-center">
                            <div className="profile-photo">
                              <img
                                src="/images/profile/small/pic4.jpg"
                                width="100"
                                className="img-fluid rounded-circle"
                                alt=""
                              />
                            </div>
                            <h3 className="mt-4 mb-1">Amelia</h3>
                            <p className="text-muted">M.COM., P.H.D.</p>
                            <ul className="list-group mb-3 list-group-flush">
                              <li className="list-group-item px-0 d-flex justify-content-between">
                                <span>Roll No.</span>
                                <strong>04</strong>
                              </li>
                              <li className="list-group-item px-0 d-flex justify-content-between">
                                <span className="mb-0">Phone No. :</span>
                                <strong>+01 123 456 7890</strong>
                              </li>
                              <li className="list-group-item px-0 d-flex justify-content-between">
                                <span className="mb-0">Admission Date. :</span>
                                <strong>01 July 2020</strong>
                              </li>
                              <li className="list-group-item px-0 d-flex justify-content-between">
                                <span className="mb-0">Email:</span>
                                <strong>info@example.com</strong>
                              </li>
                            </ul>
                            <a
                              className="btn btn-outline-primary btn-rounded mt-3 px-4"
                              href="about-student.html"
                            >
                              Read More
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="card card-profile">
                        <div className="card-header justify-content-end pb-0">
                          <div className="dropdown">
                            <button
                              className="btn btn-link"
                              type="button"
                              data-toggle="dropdown"
                            >
                              <span className="dropdown-dots fs--1"></span>
                            </button>
                            <div className="dropdown-menu dropdown-menu-right border py-0">
                              <div className="py-2">
                                <a className="dropdown-item" href="#!">
                                  Edit
                                </a>
                                <a
                                  className="dropdown-item text-danger"
                                  href="#!"
                                >
                                  Delete
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card-body pt-2">
                          <div className="text-center">
                            <div className="profile-photo">
                              <img
                                src="/images/profile/small/pic5.jpg"
                                width="100"
                                className="img-fluid rounded-circle"
                                alt=""
                              />
                            </div>
                            <h3 className="mt-4 mb-1">Charlotte</h3>
                            <p className="text-muted">B.COM., M.COM.</p>
                            <ul className="list-group mb-3 list-group-flush">
                              <li className="list-group-item px-0 d-flex justify-content-between">
                                <span>Roll No.</span>
                                <strong>05</strong>
                              </li>
                              <li className="list-group-item px-0 d-flex justify-content-between">
                                <span className="mb-0">Phone No. :</span>
                                <strong>+01 123 456 7890</strong>
                              </li>
                              <li className="list-group-item px-0 d-flex justify-content-between">
                                <span className="mb-0">Admission Date. :</span>
                                <strong>01 July 2020</strong>
                              </li>
                              <li className="list-group-item px-0 d-flex justify-content-between">
                                <span className="mb-0">Email:</span>
                                <strong>info@example.com</strong>
                              </li>
                            </ul>
                            <a
                              className="btn btn-outline-primary btn-rounded mt-3 px-4"
                              href="about-student.html"
                            >
                              Read More
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="card card-profile">
                        <div className="card-header justify-content-end pb-0">
                          <div className="dropdown">
                            <button
                              className="btn btn-link"
                              type="button"
                              data-toggle="dropdown"
                            >
                              <span className="dropdown-dots fs--1"></span>
                            </button>
                            <div className="dropdown-menu dropdown-menu-right border py-0">
                              <div className="py-2">
                                <a className="dropdown-item" href="#!">
                                  Edit
                                </a>
                                <a
                                  className="dropdown-item text-danger"
                                  href="#!"
                                >
                                  Delete
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card-body pt-2">
                          <div className="text-center">
                            <div className="profile-photo">
                              <img
                                src="/images/profile/small/pic6.jpg"
                                width="100"
                                className="img-fluid rounded-circle"
                                alt=""
                              />
                            </div>
                            <h3 className="mt-4 mb-1">Isabella</h3>
                            <p className="text-muted">B.A, B.C.A</p>
                            <ul className="list-group mb-3 list-group-flush">
                              <li className="list-group-item px-0 d-flex justify-content-between">
                                <span>Roll No.</span>
                                <strong>06</strong>
                              </li>
                              <li className="list-group-item px-0 d-flex justify-content-between">
                                <span className="mb-0">Phone No. :</span>
                                <strong>+01 123 456 7890</strong>
                              </li>
                              <li className="list-group-item px-0 d-flex justify-content-between">
                                <span className="mb-0">Admission Date. :</span>
                                <strong>01 July 2020</strong>
                              </li>
                              <li className="list-group-item px-0 d-flex justify-content-between">
                                <span className="mb-0">Email:</span>
                                <strong>info@example.com</strong>
                              </li>
                            </ul>
                            <a
                              className="btn btn-outline-primary btn-rounded mt-3 px-4"
                              href="about-student.html"
                            >
                              Read More
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="card card-profile">
                        <div className="card-header justify-content-end pb-0">
                          <div className="dropdown">
                            <button
                              className="btn btn-link"
                              type="button"
                              data-toggle="dropdown"
                            >
                              <span className="dropdown-dots fs--1"></span>
                            </button>
                            <div className="dropdown-menu dropdown-menu-right border py-0">
                              <div className="py-2">
                                <a className="dropdown-item" href="#!">
                                  Edit
                                </a>
                                <a
                                  className="dropdown-item text-danger"
                                  href="#!"
                                >
                                  Delete
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card-body pt-2">
                          <div className="text-center">
                            <div className="profile-photo">
                              <img
                                src="/images/profile/small/pic7.jpg"
                                width="100"
                                className="img-fluid rounded-circle"
                                alt=""
                              />
                            </div>
                            <h3 className="mt-4 mb-1">Sebastian</h3>
                            <p className="text-muted">M.COM., P.H.D.</p>
                            <ul className="list-group mb-3 list-group-flush">
                              <li className="list-group-item px-0 d-flex justify-content-between">
                                <span>Roll No.</span>
                                <strong>07</strong>
                              </li>
                              <li className="list-group-item px-0 d-flex justify-content-between">
                                <span className="mb-0">Phone No. :</span>
                                <strong>+01 123 456 7890</strong>
                              </li>
                              <li className="list-group-item px-0 d-flex justify-content-between">
                                <span className="mb-0">Admission Date. :</span>
                                <strong>01 July 2020</strong>
                              </li>
                              <li className="list-group-item px-0 d-flex justify-content-between">
                                <span className="mb-0">Email:</span>
                                <strong>info@example.com</strong>
                              </li>
                            </ul>
                            <a
                              className="btn btn-outline-primary btn-rounded mt-3 px-4"
                              href="about-student.html"
                            >
                              Read More
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="card card-profile">
                        <div className="card-header justify-content-end pb-0">
                          <div className="dropdown">
                            <button
                              className="btn btn-link"
                              type="button"
                              data-toggle="dropdown"
                            >
                              <span className="dropdown-dots fs--1"></span>
                            </button>
                            <div className="dropdown-menu dropdown-menu-right border py-0">
                              <div className="py-2">
                                <a className="dropdown-item" href="#!">
                                  Edit
                                </a>
                                <a
                                  className="dropdown-item text-danger"
                                  href="#!"
                                >
                                  Delete
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card-body pt-2">
                          <div className="text-center">
                            <div className="profile-photo">
                              <img
                                src="/images/profile/small/pic8.jpg"
                                width="100"
                                className="img-fluid rounded-circle"
                                alt=""
                              />
                            </div>
                            <h3 className="mt-4 mb-1">Olivia</h3>
                            <p className="text-muted">B.COM., M.COM.</p>
                            <ul className="list-group mb-3 list-group-flush">
                              <li className="list-group-item px-0 d-flex justify-content-between">
                                <span>Roll No.</span>
                                <strong>08</strong>
                              </li>
                              <li className="list-group-item px-0 d-flex justify-content-between">
                                <span className="mb-0">Phone No. :</span>
                                <strong>+01 123 456 7890</strong>
                              </li>
                              <li className="list-group-item px-0 d-flex justify-content-between">
                                <span className="mb-0">Admission Date. :</span>
                                <strong>01 July 2020</strong>
                              </li>
                              <li className="list-group-item px-0 d-flex justify-content-between">
                                <span className="mb-0">Email:</span>
                                <strong>info@example.com</strong>
                              </li>
                            </ul>
                            <a
                              className="btn btn-outline-primary btn-rounded mt-3 px-4"
                              href="about-student.html"
                            >
                              Read More
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="card card-profile">
                        <div className="card-header justify-content-end pb-0">
                          <div className="dropdown">
                            <button
                              className="btn btn-link"
                              type="button"
                              data-toggle="dropdown"
                            >
                              <span className="dropdown-dots fs--1"></span>
                            </button>
                            <div className="dropdown-menu dropdown-menu-right border py-0">
                              <div className="py-2">
                                <a className="dropdown-item" href="#!">
                                  Edit
                                </a>
                                <a
                                  className="dropdown-item text-danger"
                                  href="#!"
                                >
                                  Delete
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card-body pt-2">
                          <div className="text-center">
                            <div className="profile-photo">
                              <img
                                src="/images/profile/small/pic9.jpg"
                                width="100"
                                className="img-fluid rounded-circle"
                                alt=""
                              />
                            </div>
                            <h3 className="mt-4 mb-1">Emma</h3>
                            <p className="text-muted">B.A, B.C.A</p>
                            <ul className="list-group mb-3 list-group-flush">
                              <li className="list-group-item px-0 d-flex justify-content-between">
                                <span>Roll No.</span>
                                <strong>09</strong>
                              </li>
                              <li className="list-group-item px-0 d-flex justify-content-between">
                                <span className="mb-0">Phone No. :</span>
                                <strong>+01 123 456 7890</strong>
                              </li>
                              <li className="list-group-item px-0 d-flex justify-content-between">
                                <span className="mb-0">Admission Date. :</span>
                                <strong>01 July 2020</strong>
                              </li>
                              <li className="list-group-item px-0 d-flex justify-content-between">
                                <span className="mb-0">Email:</span>
                                <strong>info@example.com</strong>
                              </li>
                            </ul>
                            <a
                              className="btn btn-outline-primary btn-rounded mt-3 px-4"
                              href="about-student.html"
                            >
                              Read More
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="card card-profile">
                        <div className="card-header justify-content-end pb-0">
                          <div className="dropdown">
                            <button
                              className="btn btn-link"
                              type="button"
                              data-toggle="dropdown"
                            >
                              <span className="dropdown-dots fs--1"></span>
                            </button>
                            <div className="dropdown-menu dropdown-menu-right border py-0">
                              <div className="py-2">
                                <a className="dropdown-item" href="#!">
                                  Edit
                                </a>
                                <a
                                  className="dropdown-item text-danger"
                                  href="#!"
                                >
                                  Delete
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card-body pt-2">
                          <div className="text-center">
                            <div className="profile-photo">
                              <img
                                src="/images/profile/small/pic10.jpg"
                                width="100"
                                className="img-fluid rounded-circle"
                                alt=""
                              />
                            </div>
                            <h3 className="mt-4 mb-1">Jackson</h3>
                            <p className="text-muted">M.COM., P.H.D.</p>
                            <ul className="list-group mb-3 list-group-flush">
                              <li className="list-group-item px-0 d-flex justify-content-between">
                                <span>Roll No.</span>
                                <strong>10</strong>
                              </li>
                              <li className="list-group-item px-0 d-flex justify-content-between">
                                <span className="mb-0">Phone No. :</span>
                                <strong>+01 123 456 7890</strong>
                              </li>
                              <li className="list-group-item px-0 d-flex justify-content-between">
                                <span className="mb-0">Admission Date. :</span>
                                <strong>01 July 2020</strong>
                              </li>
                              <li className="list-group-item px-0 d-flex justify-content-between">
                                <span className="mb-0">Email:</span>
                                <strong>info@example.com</strong>
                              </li>
                            </ul>
                            <a
                              className="btn btn-outline-primary btn-rounded mt-3 px-4"
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
