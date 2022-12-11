import axios from "axios";
import AdminMainPagination from "Components/AdminMainPagination";
import Loading from "Components/Loaders/Loading";
import RenderPDF from "hooks/useRenderClientTeacher";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import endPoints from "utils/endpoints";

const TeacherProfile = ({ data }) => {
  const { ci } = data;
  const [state, setState] = useState({
    loading: false,
    error: null,
  });
  const [teacher, setTeacher] = useState({});

  useEffect(() => {
    async function fetchData() {
      setState({ loading: true, error: null });
      try {
        const response = await axios.get(endPoints.teachers.getTeacher(ci));
        const data = await JSON.parse(JSON.stringify(response.data));
        setTeacher(data);
        setState({ loading: false, error: null });
      } catch (err) {
        setState({ loading: false, error: err });
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <div className="content-body">
        <div className="container-fluid">
          <AdminMainPagination
            pageName={"Profesores"}
            crudName={"Perfil del Profesor"}
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
                            {teacher?.name} {teacher?.lastName}
                          </h3>
                        </div>

                        <div className="card-footer text-center border-0 mt-0">
                          <Link
                            href={`/admin/profesores/editar/${teacher?.ci}`}
                          >
                            <a className="btn btn-primary btn-rounded px-4">
                              Editar
                            </a>
                          </Link>
                          <RenderPDF teacher={teacher} />
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
                              <strong>Género</strong>
                              <span className="mb-0">{teacher?.gender}</span>
                            </li>
                            <li className="list-group-item d-flex px-0 justify-content-between">
                              <strong>Grado que imparte</strong>
                              <span className="mb-0">
                                {teacher?.grade?.name} {teacher?.grade?.section}
                              </span>
                            </li>
                            <li className="list-group-item d-flex px-0 justify-content-between">
                              <strong>Lugar de Nacimiento</strong>
                              <span className="mb-0">
                                {teacher?.birthPlace}
                              </span>
                            </li>
                            <li className="list-group-item d-flex px-0 justify-content-between">
                              <strong>Fecha de Ingreso</strong>
                              <span className="mb-0">
                                {teacher?.admissionDate}
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
                          <p className="mb-0">{teacher?.address}</p>
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
                                    <span>{teacher?.name}</span>
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
                                    <span>{teacher?.lastName}</span>
                                  </div>
                                </div>
                                <div className="row mb-4">
                                  <div className="col-lg-4 col-md-5 col-sm-6 col-6">
                                    <h5 className="f-w-500">
                                      Fecha de Nacimiento{" "}
                                      <span className="pull-right">:</span>
                                    </h5>
                                  </div>
                                  <div className="col-lg-8 col-md-7 col-sm-5 col-6">
                                    <span>{teacher?.birthDate}</span>
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
                                    <span>{teacher?.ci}</span>
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
                                    <span>{teacher?.email}</span>
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
                                    <span>{teacher.phone}</span>
                                  </div>
                                </div>
                              </div>

                              <div className="profile-skills pt-2 border-bottom-1 pb-2">
                                {teacher?.eventuality?.length === 0 ? (
                                  <h4>
                                    No hay Eventualidades registradas en este
                                    profesor
                                  </h4>
                                ) : (
                                  <h4 className="text-primary mb-4">
                                    Eventualidades
                                  </h4>
                                )}
                                {teacher?.eventuality?.map((eventuality) => (
                                  <article key={eventuality.id}>
                                    <a
                                      href="#!"
                                      className="text-muted pr-3 f-s-16"
                                    >
                                      <i className="flag-icon flag-icon-fr"></i>
                                      {eventuality.title} {"  -  "}{" "}
                                      {eventuality.day}
                                    </a>
                                    <div className="profile-about-me">
                                      <div className="border-bottom-1 pb-4">
                                        <p>{eventuality.description}</p>
                                      </div>
                                    </div>
                                  </article>
                                ))}
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

export default TeacherProfile;

export async function getServerSideProps({ query }) {
  const { ci } = query;

  return {
    props: {
      data: { ci },
    },
  };
}
