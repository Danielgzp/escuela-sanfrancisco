import axios from "axios";
import AdminMainPagination from "Components/AdminMainPagination";
import Loading from "Components/Loading/Loading";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import endPoints from "utils/endpoints";

const StaffProfile = ({ data }) => {
  const { ci } = data;
  const [state, setState] = useState({
    loading: false,
    error: null,
  });
  const [staff, setStaff] = useState({});

  useEffect(() => {
    const script = document.createElement("script");

    async function fetchData() {
      setState({ loading: true, error: null });
      try {
        const response = await axios.get(endPoints.staff.getStaff(ci));
        const data = await JSON.parse(JSON.stringify(response.data));
        setStaff(data);
        setState({ loading: false, error: null });
      } catch (err) {
        setState({ loading: false, error: err });
      }
    }

    fetchData();
  }, []);

  console.log(staff);

  return (
    <>
      <div className="content-body">
        <div className="container-fluid">
          <AdminMainPagination
            pageName={"Personal"}
            crudName={"Perfil del Staff"}
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
                            {staff?.name} {staff?.lastName}
                          </h3>
                        </div>

                        <div className="card-footer text-center border-0 mt-0">
                          <Link href={`/admin/personal/editar/${staff?.ci}`}>
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
                              <span className="mb-0">{staff?.gender}</span>
                            </li>
                            <li className="list-group-item d-flex px-0 justify-content-between">
                              <strong>Role</strong>
                              <span className="mb-0">{staff?.role?.name}</span>
                            </li>
                            <li className="list-group-item d-flex px-0 justify-content-between">
                              <strong>Lugar de Nacimiento</strong>
                              <span className="mb-0">{staff?.birthPlace}</span>
                            </li>
                            <li className="list-group-item d-flex px-0 justify-content-between">
                              <strong>Fecha de Ingreso</strong>
                              <span className="mb-0">
                                {staff?.admissionDate}
                              </span>
                            </li>
                            <li className="list-group-item d-flex px-0 justify-content-between">
                              <strong>Propiedad</strong>
                              <span className="mb-0">
                                {/* {staff?.houseProperty} */}
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div className="card-footer pt-0 pb-0 text-center">
                          <div className="row">
                            <div className="col-4 pt-3 pb-3 border-right">
                              <h3 className="mb-1 text-primary">150</h3>
                              <span>Projects</span>
                            </div>
                            <div className="col-4 pt-3 pb-3 border-right">
                              <h3 className="mb-1 text-primary">140</h3>
                              <span>Uploads</span>
                            </div>
                            <div className="col-4 pt-3 pb-3">
                              <h3 className="mb-1 text-primary">45</h3>
                              <span>Tasks</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="card">
                        <div className="card-header d-block">
                          <h4 className="card-title">Dirección </h4>
                        </div>
                        <div className="card-body">
                          <p className="mb-0">{staff?.address}</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="card">
                        <div className="card-header d-block">
                          <h4 className="card-title">Interest </h4>
                        </div>
                        <div className="card-body">
                          <h6>
                            Photoshop
                            <span className="pull-right">85%</span>
                          </h6>
                          <div className="progress ">
                            <div
                              className="progress-bar bg-danger progress-animated"
                              style={{ width: "85%", height: "6px" }}
                              role="progressbar"
                            >
                              <span className="sr-only">60% Complete</span>
                            </div>
                          </div>
                          <h6 className="mt-4">
                            Code editor
                            <span className="pull-right">90%</span>
                          </h6>
                          <div className="progress">
                            <div
                              className="progress-bar bg-info progress-animated"
                              style={{ width: "90%", height: "6px" }}
                              role="progressbar"
                            >
                              <span className="sr-only">60% Complete</span>
                            </div>
                          </div>
                          <h6 className="mt-4">
                            Illustrator
                            <span className="pull-right">65%</span>
                          </h6>
                          <div className="progress">
                            <div
                              className="progress-bar bg-success progress-animated"
                              style={{ width: "65%", height: "6px" }}
                              role="progressbar"
                            >
                              <span className="sr-only">60% Complete</span>
                            </div>
                          </div>
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
                              >
                                Otras cosas
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
                                    <span>{staff?.name}</span>
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
                                    <span>{staff?.lastName}</span>
                                  </div>
                                </div>
                                <div className="row mb-4">
                                  <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                    <h5 className="f-w-500">
                                      Edad <span className="pull-right">:</span>
                                    </h5>
                                  </div>
                                  <div className="col-lg-9 col-md-8 col-sm-6 col-6">
                                    <span>{staff?.birthDate}</span>
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
                                    <span>{staff?.ci}</span>
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
                                    <span>{staff?.email}</span>
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
                                    <span>{staff.phone}</span>
                                  </div>
                                </div>
                              </div>

                              <div className="profile-skills pt-2 border-bottom-1 pb-2">
                                {staff?.eventuality?.length === 0 ? (
                                  <h4>
                                    No hay Eventualidades registradas en este
                                    staff
                                  </h4>
                                ) : (
                                  <h4 className="text-primary mb-4">
                                    Eventualidades
                                  </h4>
                                )}
                                {staff?.eventuality?.map((eventuality) => (
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

export default StaffProfile;

export async function getServerSideProps({ query }) {
  const { ci } = query;

  return {
    props: {
      data: { ci },
    },
  };
}
