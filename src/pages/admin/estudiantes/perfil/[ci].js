import axios from "axios";
import AdminMainPagination from "Components/AdminMainPagination";
import Loading from "Components/Loading/Loading";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import endPoints from "utils/endpoints";
import { loadScripts } from "utils/loadScripts";

import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import MakePDF from "utils/pdfMaker";
import RenderPDF from "hooks/useRenderClient";

const StudentProfile = ({ data }) => {
  const { ci } = data;
  const [state, setState] = useState({
    loading: false,
    error: null,
  });
  const [student, setStudent] = useState({});

  useEffect(() => {
   

    async function fetchData() {
      setState({ loading: true, error: null });
      try {
        const response = await axios.get(endPoints.students.getStudent(ci));
        const data = await JSON.parse(JSON.stringify(response.data));
        setStudent(data);
        setState({ loading: false, error: null });
      } catch (err) {
        setState({ loading: false, error: err });
      }
    }

    fetchData();
    
  }, []);

  console.log(student);
  const generatePDF = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="content-body">
        <div className="container-fluid">
          <AdminMainPagination
            pageName={"Estudiantes"}
            crudName={"Perfil del Estudiante"}
          />

          {state.loading ? (
            <>
              <Loading />
            </>
          ) : (
            <>
              <div className="row">
                <div className="col-xl-3 col-xxl-4 col-lg-4">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="card">
                        <div
                          className="text-center p-3 overlay-box"
                          style={{
                            backgroundImage: "url(/images/big/img1.jpg)",
                          }}
                        >
                          <div className="profile-photo">
                            <img
                              src="/images/profile/profile.png"
                              width="100"
                              className="img-fluid rounded-circle"
                              alt=""
                            />
                          </div>
                          <h3 className="mt-3 mb-1 text-white">
                            {student?.name} {student?.lastName}
                          </h3>
                        </div>

                        <div className="card-footer text-center border-0 mt-0">
                          <Link
                            href={`/admin/estudiantes/editar/${student.ci}`}
                          >
                            <a className="btn btn-primary btn-rounded px-4">
                              Editar
                            </a>
                          </Link>
                          <a
                            href="#!"
                            className="btn btn-warning btn-rounded px-4"
                          >
                            Eliminar
                          </a>
                          <RenderPDF student={student} />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="card">
                        <div className="card-header">
                          <h4 className="text-primary mb-4">Otros Datos</h4>
                        </div>
                        <div className="card-body pb-0">
                          <ul className="list-group list-group-flush">
                            <li className="list-group-item d-flex px-0 justify-content-between">
                              <strong>Gender</strong>
                              <span className="mb-0">{student?.gender}</span>
                            </li>
                            <li className="list-group-item d-flex px-0 justify-content-between">
                              <strong>Grado que cursa</strong>
                              <span className="mb-0">
                                {student?.grade?.name} {student?.grade?.section}
                              </span>
                            </li>
                            <li className="list-group-item d-flex px-0 justify-content-between">
                              <strong>Lugar de Nacimiento</strong>
                              <span className="mb-0">
                                {student?.birthPlace}
                              </span>
                            </li>
                            <li className="list-group-item d-flex px-0 justify-content-between">
                              <strong>Fecha de Ingreso</strong>
                              <span className="mb-0">
                                {student?.admissionDate}
                              </span>
                            </li>
                            <li className="list-group-item d-flex px-0 justify-content-between">
                              <strong>Propiedad</strong>
                              <span className="mb-0">
                                {student?.houseProperty}
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="card">
                        <div className="card-header d-block">
                          <h4 className="card-title">Dirección </h4>
                        </div>
                        <div className="card-body">
                          <p className="mb-0">{student?.address}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-9 col-xxl-8 col-lg-8">
                  <div className="card">
                    <div className="card-body">
                      <div className="profile-tab">
                        <div className="custom-tab-1">
                          <ul className="nav nav-tabs">
                            <li className="nav-item">
                              <a
                                href="#about-me"
                                data-toggle="tab"
                                className="nav-link active show"
                              >
                                Acerca de
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                href="#my-posts"
                                data-toggle="tab"
                                className="nav-link"
                                onClick={(e) => generatePDF(e)}
                              >
                                Guardar en PDF
                              </a>
                            </li>
                          </ul>
                          <div className="tab-content">
                            <div
                              id="about-me"
                              className="tab-pane fade active show"
                            >
                              <div className="profile-personal-info pt-4">
                                <h4 className="text-primary mb-4">
                                  Información Personal
                                </h4>

                                <div className="row mb-4">
                                  <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                    <h5 className="f-w-500">
                                      Nombres{" "}
                                      <span className="pull-right">:</span>
                                    </h5>
                                  </div>
                                  <div className="col-lg-9 col-md-8 col-sm-6 col-6">
                                    <span>{student?.name}</span>
                                  </div>
                                </div>
                                <div className="row mb-4">
                                  <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                    <h5 className="f-w-500">
                                      Apellidos
                                      <span className="pull-right">:</span>
                                    </h5>
                                  </div>
                                  <div className="col-lg-9 col-md-8 col-sm-6 col-6">
                                    <span>{student?.lastName}</span>
                                  </div>
                                </div>
                                <div className="row mb-4">
                                  <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                    <h5 className="f-w-500">
                                      Edad <span className="pull-right">:</span>
                                    </h5>
                                  </div>
                                  <div className="col-lg-9 col-md-8 col-sm-6 col-6">
                                    <span>{student?.birthDate}</span>
                                  </div>
                                </div>
                                <div className="row mb-4">
                                  <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                    <h5 className="f-w-500">
                                      Cedula Escolar{" "}
                                      <span className="pull-right">:</span>
                                    </h5>
                                  </div>
                                  <div className="col-lg-9 col-md-8 col-sm-6 col-6">
                                    <span>{student?.ci}</span>
                                  </div>
                                </div>
                              </div>
                              <div className="profile-skills pt-2 border-bottom-1 pb-2">
                                <h4 className="text-primary mb-4">
                                  Representante
                                </h4>
                                <div className="row mb-4">
                                  <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                    <h5 className="f-w-500">
                                      Nombre{" "}
                                      <span className="pull-right">:</span>
                                    </h5>
                                  </div>
                                  <div className="col-lg-9 col-md-8 col-sm-6 col-6">
                                    <span>{student?.name}</span>
                                  </div>
                                </div>
                                <div className="row mb-4">
                                  <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                    <h5 className="f-w-500">
                                      Apellido
                                      <span className="pull-right">:</span>
                                    </h5>
                                  </div>
                                  <div className="col-lg-9 col-md-8 col-sm-6 col-6">
                                    <span>{student?.lastName}</span>
                                  </div>
                                </div>
                                <div className="row mb-4">
                                  <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                    <h5 className="f-w-500">
                                      Cedula{" "}
                                      <span className="pull-right">:</span>
                                    </h5>
                                  </div>
                                  <div className="col-lg-9 col-md-8 col-sm-6 col-6">
                                    <span>{student?.ci}</span>
                                  </div>
                                </div>
                                <div className="row mb-4">
                                  <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                    <h5 className="f-w-500">
                                      Email
                                      <span className="pull-right">:</span>
                                    </h5>
                                  </div>
                                  <div className="col-lg-9 col-md-8 col-sm-6 col-6">
                                    <span>representante@email.com</span>
                                  </div>
                                </div>
                                <div className="row mb-4">
                                  <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                    <h5 className="f-w-500">
                                      Telefono
                                      <span className="pull-right">:</span>
                                    </h5>
                                  </div>
                                  <div className="col-lg-9 col-md-8 col-sm-6 col-6">
                                    <span>03123212</span>
                                  </div>
                                </div>
                              </div>

                              <div className="profile-skills pt-2 border-bottom-1 pb-2">
                                {student?.record?.length === 0 ? (
                                  <h4>
                                    No hay Eventualidades registradas en este
                                    estudiante
                                  </h4>
                                ) : (
                                  <h4 className="text-primary mb-4">
                                    Eventualidades
                                  </h4>
                                )}
                                {student?.record?.map((record) => (
                                  <>
                                    <a
                                      href="#!"
                                      className="text-muted pr-3 f-s-16"
                                    >
                                      <i className="flag-icon flag-icon-fr"></i>
                                      {record.title} {"  -  "} {record.day}
                                    </a>
                                    <div className="profile-about-me">
                                      <div className="border-bottom-1 pb-4">
                                        <p>{record.description}</p>
                                      </div>
                                    </div>
                                  </>
                                ))}
                              </div>
                            </div>
                            <div id="my-posts" className="tab-pane fade">
                              <div className="my-post-content pt-3">
                                <div className="post-input">
                                  <textarea
                                    name="textarea"
                                    id="textarea"
                                    cols="30"
                                    rows="5"
                                    className="form-control bg-transparent"
                                    placeholder="Please type what you want...."
                                  ></textarea>{" "}
                                  <a href="#!">
                                    <i className="ti-clip"></i>{" "}
                                  </a>
                                  <a href="#!">
                                    <i className="ti-camera"></i>{" "}
                                  </a>
                                  <a href="#!" className="btn btn-primary">
                                    Post
                                  </a>
                                </div>
                                <div className="profile-uoloaded-post border-bottom-1 pb-5">
                                  <img
                                    src="/images/profile/8.jpg"
                                    alt=""
                                    className="img-fluid"
                                  />
                                  <a className="post-title" href="#!">
                                    <h4>
                                      Collection of textile samples lay spread
                                    </h4>
                                  </a>
                                  <p>
                                    A wonderful serenity has take possession of
                                    my entire soul like these sweet morning of
                                    spare which enjoy whole heart.A wonderful
                                    serenity has take possession of my entire
                                    soul like these sweet morning of spare which
                                    enjoy whole heart.
                                  </p>
                                  <button className="btn btn-primary mr-3">
                                    <span className="mr-3">
                                      <i className="fa fa-heart"></i>
                                    </span>
                                    Like
                                  </button>
                                  <button className="btn btn-secondary">
                                    <span className="mr-3">
                                      <i className="fa fa-reply"></i>
                                    </span>
                                    Reply
                                  </button>
                                </div>
                                <div className="profile-uoloaded-post border-bottom-1 pb-5">
                                  <img
                                    src="/images/profile/9.jpg"
                                    alt=""
                                    className="img-fluid"
                                  />
                                  <a className="post-title" href="#!">
                                    <h4>
                                      Collection of textile samples lay spread
                                    </h4>
                                  </a>
                                  <p>
                                    A wonderful serenity has take possession of
                                    my entire soul like these sweet morning of
                                    spare which enjoy whole heart.A wonderful
                                    serenity has take possession of my entire
                                    soul like these sweet morning of spare which
                                    enjoy whole heart.
                                  </p>
                                  <button className="btn btn-primary mr-3">
                                    <span className="mr-3">
                                      <i className="fa fa-heart"></i>
                                    </span>
                                    Like
                                  </button>
                                  <button className="btn btn-secondary">
                                    <span className="mr-3">
                                      <i className="fa fa-reply"></i>
                                    </span>
                                    Reply
                                  </button>
                                </div>
                                <div className="profile-uoloaded-post pb-5">
                                  <img
                                    src="/images/profile/8.jpg"
                                    alt=""
                                    className="img-fluid"
                                  />
                                  <a className="post-title" href="#!">
                                    <h4>
                                      Collection of textile samples lay spread
                                    </h4>
                                  </a>
                                  <p>
                                    A wonderful serenity has take possession of
                                    my entire soul like these sweet morning of
                                    spare which enjoy whole heart.A wonderful
                                    serenity has take possession of my entire
                                    soul like these sweet morning of spare which
                                    enjoy whole heart.
                                  </p>
                                  <button className="btn btn-primary mr-3">
                                    <span className="mr-3">
                                      <i className="fa fa-heart"></i>
                                    </span>
                                    Like
                                  </button>
                                  <button className="btn btn-secondary">
                                    <span className="mr-3">
                                      <i className="fa fa-reply"></i>
                                    </span>
                                    Reply
                                  </button>
                                </div>
                                <div className="text-center mb-2">
                                  <a href="#!" className="btn btn-primary">
                                    Load More
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
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default StudentProfile;

export async function getServerSideProps({ query }) {
  const { ci } = query;

  return {
    props: {
      data: { ci },
    },
  };
}
