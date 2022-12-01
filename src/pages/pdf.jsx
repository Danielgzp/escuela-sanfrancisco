import axios from "axios";
import React from "react";
import Swal from "sweetalert2";

import "./pdf.css";

const pdf = () => {
  return (
    <>
      <main>
        <div className="header">
          <div className="leftHeader">
            <p
              style={{
                color: "grey",
                textAlign: "center",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              FORMATO
            </p>
            <p
              style={{
                color: "black",
                textAlign: "center",
                fontSize: "26px",
                fontWeight: "bold",
                // marginBottom: "5px",
                // marginTop: "5px",
              }}
            >
              PERFIL DEL ESTUDIANTE
            </p>
            <p style={{ color: "grey", textAlign: "center", fontSize: "18px" }}>
              Algo mas
            </p>
          </div>
          <div className="rightHeader">
            <img
              src="/images/LogoSanFrancisco.png"
              alt="Logo de Fe y Alegria"
              style={{ width: "100%", height: "auto" }}
            ></img>
          </div>
        </div>
        <div className="firstTitle">
          <p className="numberTitle">1</p>
          <img
            src="/images/verticalLine.png"
            alt="Linea"
            className="separatorImg"
          />
          <p className="title">Datos Personales</p>
        </div>
        <div className="studentInfo">
          <div className="firstRow row">
            <div style={{ width: "40%" }} className="column">
              <div className="topColumn1 topColumn">
                <p>Nombres</p>
              </div>
              <div>
                <p>c</p>
              </div>
            </div>
            <div style={{ width: "40%" }} className="column">
              <div className="topColumn2 topColumn">
                <p>Apellidos</p>
              </div>
              <div>
                <p>bdsa</p>
              </div>
            </div>
            <div className="column columnNoBorder" style={{ width: "20%" }}>
              <div className="topColumn3 topColumn">
                <p>Cedula Escolar</p>
              </div>
              <div>
                <p>a</p>
              </div>
            </div>
          </div>
          <div className="secondRow row">
            <div style={{ width: "60%" }} className="column">
              <div className="topColumn1 topColumn">
                <p>Dirección</p>
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum
                </p>
              </div>
            </div>
            <div style={{ width: "40%" }} className="column columnNoBorder">
              <div className="topColumn2 topColumn">
                <p>Fecha de Nacimiento</p>
              </div>
              <div>
                <p>2015/06/01</p>
              </div>
            </div>
          </div>
          <div className="thirdRow row rowNoBorder">
            <div style={{ width: "20%" }} className="column">
              <div className="topColumn1 topColumn">
                <p>Sexo</p>
              </div>
              <div>
                <p>Masculino</p>
              </div>
            </div>
            <div style={{ width: "20%" }} className="column">
              <div className="topColumn2 topColumn">
                <p>Fecha de Ingreso</p>
              </div>
              <div>
                <p>2015/06/01</p>
              </div>
            </div>
            <div style={{ width: "20%" }} className="column">
              <div className="topColumn2 topColumn">
                <p>Lugar de Nacimiento</p>
              </div>
              <div>
                <p>2015/06/01</p>
              </div>
            </div>
            <div style={{ width: "20%" }} className="column">
              <div className="topColumn2 topColumn">
                <p>Tipo de Propiedad</p>
              </div>
              <div>
                <p>Propia</p>
              </div>
            </div>
            <div style={{ width: "20%" }} className="column columnNoBorder">
              <div className="topColumn2 topColumn">
                <p>Grado</p>
              </div>
              <div>
                <p>1er Grado A</p>
              </div>
            </div>
          </div>
        </div>
        <div className="firstTitle">
          <p className="numberTitle">2</p>
          <img
            src="/images/verticalLine.png"
            alt="Linea"
            className="separatorImg"
          />
          <p className="title">Datos del Representante</p>
        </div>
        <div className="represetantInfo">
          <div className="firstRow row">
            <div style={{ width: "40%" }} className="column">
              <div className="topColumn1 topColumn">
                <p>Nombres</p>
              </div>
              <div>
                <p>c</p>
              </div>
            </div>
            <div style={{ width: "40%" }} className="column">
              <div className="topColumn2 topColumn">
                <p>Apellidos</p>
              </div>
              <div>
                <p>bdsa</p>
              </div>
            </div>
            <div className="column columnNoBorder" style={{ width: "20%" }}>
              <div className="topColumn3 topColumn">
                <p>Cedula</p>
              </div>
              <div>
                <p>10323452</p>
              </div>
            </div>
          </div>
          <div className="secondRow row rowNoBorder">
            <div style={{ width: "50%" }} className="column">
              <div className="topColumn1 topColumn">
                <p>Correo</p>
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum
                </p>
              </div>
            </div>
            <div style={{ width: "50%" }} className="column columnNoBorder">
              <div className="topColumn2 topColumn">
                <p>Telefono</p>
              </div>
              <div>
                <p>0414102534</p>
              </div>
            </div>
          </div>
        </div>
        <div className="firstTitle">
          <p className="numberTitle">3</p>
          <img
            src="/images/verticalLine.png"
            alt="Linea"
            className="separatorImg"
          />
          <p className="title">Eventualidades</p>
        </div>
        <div className="noEventualities">
          <h2
            style={{
              textAlign: "center",
              fontSize: "26px",
              fontStyle: "italic",
            }}
          >
            El Estudiante no presenta eventualidades que mostrar
          </h2>
        </div>
        {/* <div className="eventualities">
          <div className="firstRow row">
            <div style={{ width: "100%" }} className="column columnNoBorder">
              <p>
                Se retiro durante 1 semana debido a una enfermedad - 15-01-2022
              </p>
            </div>
          </div>
          <div className="secondRow row">
            <div style={{ width: "100%" }} className="column columnNoBorder">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum exercitationem quis veritatis esse facilis ex harum
                debitis, mollitia, expedita et repudiandae quod ullam enim rerum
                odio, quaerat rem eaque dolores. Error eius sint nobis aperiam,
                tenetur eos maiores dignissimos consectetur eum ipsum quaerat
                quasi magnam! Commodi illum optio aut atque ab non officia
                consequuntur nulla omnis! Ad cum iste tempore.
              </p>
            </div>
          </div>
        </div> */}
        <div>
          <button
            className="btn btn-primary"
            onClick={() => {
              axios
                .get("http://localhost:3000/api/v1/export")
                .then((response) => {
                  console.log(response);
                  Swal.fire({
                    title: "See",
                    text: "Se ha exportado exitosamente la database",
                  });
                })
                .catch((err) => {
                  console.log(err);
                  Swal.fire({
                    title: "Oops...",
                    text: err.message,
                  });
                });
            }}
          >
            Export
          </button>
          <div className="sidebar-right">
            <a
              className="sidebar-right-trigger wave-effect wave-effect-x"
              href="javascript:void(0)"
            >
              <span>
                <i className="fa fa-cog fa-spin" />
              </span>
            </a>
            <div className="sidebar-right-inner">
              <div className="tab-content tab-content-default tabcontent-border">
                <div
                  className="tab-pane fade active show"
                  id="home8"
                  role="tabpanel"
                >
                  <div className="admin-settings">
                    <h4>Pick your style</h4>
                    <div>
                      <p>Background</p>
                      <select
                        className="form-control"
                        name="theme_version"
                        id="theme_version"
                      >
                        <option value="light">Light</option>
                        <option value="dark">Dark</option>
                      </select>
                    </div>
                    <div>
                      <p>Background</p>
                      <select
                        className="form-control"
                        name="theme_version"
                        id="theme_version"
                      >
                        <option value="light">Light</option>
                        <option value="dark">Dark</option>
                      </select>
                    </div>
                    <div>
                      <p>Layout</p>
                      <select
                        className="form-control"
                        name="theme_layout"
                        id="theme_layout"
                      >
                        <option value="vertical">Vertical</option>
                        <option value="horizontal">Horizontal</option>
                      </select>
                    </div>
                    <div>
                      <p>Sidebar</p>
                      <select
                        className="form-control"
                        name="sidebar_style"
                        id="sidebar_style"
                      >
                        <option value="full">Full</option>
                        <option value="mini">Mini</option>
                        <option value="compact">Compact</option>
                        <option value="modern">Modern</option>
                        <option value="overlay">Overlay</option>
                        <option value="icon-hover">Icon-hover</option>
                      </select>
                    </div>
                    <div>
                      <p>Sidebar position</p>
                      <select
                        className="form-control"
                        name="sidebar_position"
                        id="sidebar_position"
                      >
                        <option value="static">Static</option>
                        <option value="fixed">Fixed</option>
                      </select>
                    </div>
                    <div>
                      <p>Header position</p>
                      <select
                        className="form-control"
                        name="header_position"
                        id="header_position"
                      >
                        <option value="static">Static</option>
                        <option value="fixed">Fixed</option>
                      </select>
                    </div>
                    <div>
                      <p>Container</p>
                      <select
                        className="form-control"
                        name="container_layout"
                        id="container_layout"
                      >
                        <option value="wide">Wide</option>
                        <option value="boxed">Boxed</option>
                        <option value="wide-boxed">Wide Boxed</option>
                      </select>
                    </div>
                    <div>
                      <p>Direction</p>
                      <select
                        className="form-control"
                        name="theme_direction"
                        id="theme_direction"
                      >
                        <option value="ltr">LTR</option>
                        <option value="rtl">RTL</option>
                      </select>
                    </div>
                    <div>
                      <p>Body Font</p>
                      <select
                        className="form-control"
                        name="typography"
                        id="typography"
                      >
                        <option value="roboto">Roboto</option>
                        <option value="poppins">Poppins</option>
                        <option value="opensans">Open Sans</option>
                        <option value="HelveticaNeue">HelveticaNeue</option>
                      </select>
                    </div>
                    <div>
                      <p>Navigation Header</p>
                      <div>
                        <span>
                          <input
                            type="radio"
                            name="navigation_header"
                            defaultValue="color_1"
                            className="filled-in chk-col-primary"
                            id="nav_header_color_1"
                          />
                          <label htmlFor="nav_header_color_1" />
                        </span>{" "}
                        <span>
                          <input
                            type="radio"
                            name="navigation_header"
                            defaultValue="color_2"
                            className="filled-in chk-col-primary"
                            id="nav_header_color_2"
                          />
                          <label htmlFor="nav_header_color_2" />
                        </span>{" "}
                        <span>
                          <input
                            type="radio"
                            name="navigation_header"
                            defaultValue="color_3"
                            className="filled-in chk-col-primary"
                            id="nav_header_color_3"
                          />
                          <label htmlFor="nav_header_color_3" />
                        </span>{" "}
                        <span>
                          <input
                            type="radio"
                            name="navigation_header"
                            defaultValue="color_4"
                            className="filled-in chk-col-primary"
                            id="nav_header_color_4"
                          />
                          <label htmlFor="nav_header_color_4" />
                        </span>{" "}
                        <span>
                          <input
                            type="radio"
                            name="navigation_header"
                            defaultValue="color_5"
                            className="filled-in chk-col-primary"
                            id="nav_header_color_5"
                          />
                          <label htmlFor="nav_header_color_5" />
                        </span>{" "}
                        <span>
                          <input
                            type="radio"
                            name="navigation_header"
                            defaultValue="color_6"
                            className="filled-in chk-col-primary"
                            id="nav_header_color_6"
                          />
                          <label htmlFor="nav_header_color_6" />
                        </span>{" "}
                        <span>
                          <input
                            type="radio"
                            name="navigation_header"
                            defaultValue="color_7"
                            className="filled-in chk-col-primary"
                            id="nav_header_color_7"
                          />
                          <label htmlFor="nav_header_color_7" />
                        </span>{" "}
                        <span>
                          <input
                            type="radio"
                            name="navigation_header"
                            defaultValue="color_8"
                            className="filled-in chk-col-primary"
                            id="nav_header_color_8"
                          />
                          <label htmlFor="nav_header_color_8" />
                        </span>{" "}
                        <span>
                          <input
                            type="radio"
                            name="navigation_header"
                            defaultValue="color_9"
                            className="filled-in chk-col-primary"
                            id="nav_header_color_9"
                          />
                          <label htmlFor="nav_header_color_9" />
                        </span>{" "}
                        <span>
                          <input
                            type="radio"
                            name="navigation_header"
                            defaultValue="color_10"
                            className="filled-in chk-col-primary"
                            id="nav_header_color_10"
                          />
                          <label htmlFor="nav_header_color_10" />
                        </span>{" "}
                        <span>
                          <input
                            type="radio"
                            name="navigation_header"
                            defaultValue="color_11"
                            className="filled-in chk-col-primary"
                            id="nav_header_color_11"
                          />
                          <label htmlFor="nav_header_color_11" />
                        </span>{" "}
                        <span>
                          <input
                            type="radio"
                            name="navigation_header"
                            defaultValue="color_12"
                            className="filled-in chk-col-primary"
                            id="nav_header_color_12"
                          />
                          <label htmlFor="nav_header_color_12" />
                        </span>{" "}
                        <span>
                          <input
                            type="radio"
                            name="navigation_header"
                            defaultValue="color_13"
                            className="filled-in chk-col-primary"
                            id="nav_header_color_13"
                          />
                          <label htmlFor="nav_header_color_13" />
                        </span>{" "}
                        <span>
                          <input
                            type="radio"
                            name="navigation_header"
                            defaultValue="color_14"
                            className="filled-in chk-col-primary"
                            id="nav_header_color_14"
                          />
                          <label htmlFor="nav_header_color_14" />
                        </span>{" "}
                        <span>
                          <input
                            type="radio"
                            name="navigation_header"
                            defaultValue="color_15"
                            className="filled-in chk-col-primary"
                            id="nav_header_color_15"
                          />
                          <label htmlFor="nav_header_color_15" />
                        </span>
                      </div>
                    </div>
                    <div>
                      <p>Header</p>
                      <div>
                        <span>
                          <input
                            type="radio"
                            name="header_bg"
                            defaultValue="color_1"
                            className="filled-in chk-col-primary"
                            id="header_color_1"
                          />
                          <label htmlFor="header_color_1" />
                        </span>{" "}
                        <span>
                          <input
                            type="radio"
                            name="header_bg"
                            defaultValue="color_2"
                            className="filled-in chk-col-primary"
                            id="header_color_2"
                          />
                          <label htmlFor="header_color_2" />
                        </span>{" "}
                        <span>
                          <input
                            type="radio"
                            name="header_bg"
                            defaultValue="color_3"
                            className="filled-in chk-col-primary"
                            id="header_color_3"
                          />
                          <label htmlFor="header_color_3" />
                        </span>{" "}
                        <span>
                          <input
                            type="radio"
                            name="header_bg"
                            defaultValue="color_4"
                            className="filled-in chk-col-primary"
                            id="header_color_4"
                          />
                          <label htmlFor="header_color_4" />
                        </span>{" "}
                        <span>
                          <input
                            type="radio"
                            name="header_bg"
                            defaultValue="color_5"
                            className="filled-in chk-col-primary"
                            id="header_color_5"
                          />
                          <label htmlFor="header_color_5" />
                        </span>{" "}
                        <span>
                          <input
                            type="radio"
                            name="header_bg"
                            defaultValue="color_6"
                            className="filled-in chk-col-primary"
                            id="header_color_6"
                          />
                          <label htmlFor="header_color_6" />
                        </span>{" "}
                        <span>
                          <input
                            type="radio"
                            name="header_bg"
                            defaultValue="color_7"
                            className="filled-in chk-col-primary"
                            id="header_color_7"
                          />
                          <label htmlFor="header_color_7" />
                        </span>{" "}
                        <span>
                          <input
                            type="radio"
                            name="header_bg"
                            defaultValue="color_8"
                            className="filled-in chk-col-primary"
                            id="header_color_8"
                          />
                          <label htmlFor="header_color_8" />
                        </span>{" "}
                        <span>
                          <input
                            type="radio"
                            name="header_bg"
                            defaultValue="color_9"
                            className="filled-in chk-col-primary"
                            id="header_color_9"
                          />
                          <label htmlFor="header_color_9" />
                        </span>{" "}
                        <span>
                          <input
                            type="radio"
                            name="header_bg"
                            defaultValue="color_10"
                            className="filled-in chk-col-primary"
                            id="header_color_10"
                          />
                          <label htmlFor="header_color_10" />
                        </span>{" "}
                        <span>
                          <input
                            type="radio"
                            name="header_bg"
                            defaultValue="color_11"
                            className="filled-in chk-col-primary"
                            id="header_color_11"
                          />
                          <label htmlFor="header_color_11" />
                        </span>{" "}
                        <span>
                          <input
                            type="radio"
                            name="header_bg"
                            defaultValue="color_12"
                            className="filled-in chk-col-primary"
                            id="header_color_12"
                          />
                          <label htmlFor="header_color_12" />
                        </span>{" "}
                        <span>
                          <input
                            type="radio"
                            name="header_bg"
                            defaultValue="color_13"
                            className="filled-in chk-col-primary"
                            id="header_color_13"
                          />
                          <label htmlFor="header_color_13" />
                        </span>{" "}
                        <span>
                          <input
                            type="radio"
                            name="header_bg"
                            defaultValue="color_14"
                            className="filled-in chk-col-primary"
                            id="header_color_14"
                          />
                          <label htmlFor="header_color_14" />
                        </span>{" "}
                        <span>
                          <input
                            type="radio"
                            name="header_bg"
                            defaultValue="color_15"
                            className="filled-in chk-col-primary"
                            id="header_color_15"
                          />
                          <label htmlFor="header_color_15" />
                        </span>
                      </div>
                    </div>
                    <div>
                      <p>Sidebar</p>
                      <div>
                        <span>
                          <input
                            type="radio"
                            name="sidebar_bg"
                            defaultValue="color_1"
                            className="filled-in chk-col-primary"
                            id="sidebar_color_1"
                          />
                          <label htmlFor="sidebar_color_1" />
                        </span>{" "}
                        <span>
                          <input
                            type="radio"
                            name="sidebar_bg"
                            defaultValue="color_2"
                            className="filled-in chk-col-primary"
                            id="sidebar_color_2"
                          />
                          <label htmlFor="sidebar_color_2" />
                        </span>{" "}
                        <span>
                          <input
                            type="radio"
                            name="sidebar_bg"
                            defaultValue="color_3"
                            className="filled-in chk-col-primary"
                            id="sidebar_color_3"
                          />
                          <label htmlFor="sidebar_color_3" />
                        </span>{" "}
                        <span>
                          <input
                            type="radio"
                            name="sidebar_bg"
                            defaultValue="color_4"
                            className="filled-in chk-col-primary"
                            id="sidebar_color_4"
                          />
                          <label htmlFor="sidebar_color_4" />
                        </span>{" "}
                        <span>
                          <input
                            type="radio"
                            name="sidebar_bg"
                            defaultValue="color_5"
                            className="filled-in chk-col-primary"
                            id="sidebar_color_5"
                          />
                          <label htmlFor="sidebar_color_5" />
                        </span>{" "}
                        <span>
                          <input
                            type="radio"
                            name="sidebar_bg"
                            defaultValue="color_6"
                            className="filled-in chk-col-primary"
                            id="sidebar_color_6"
                          />
                          <label htmlFor="sidebar_color_6" />
                        </span>{" "}
                        <span>
                          <input
                            type="radio"
                            name="sidebar_bg"
                            defaultValue="color_7"
                            className="filled-in chk-col-primary"
                            id="sidebar_color_7"
                          />
                          <label htmlFor="sidebar_color_7" />
                        </span>{" "}
                        <span>
                          <input
                            type="radio"
                            name="sidebar_bg"
                            defaultValue="color_8"
                            className="filled-in chk-col-primary"
                            id="sidebar_color_8"
                          />
                          <label htmlFor="sidebar_color_8" />
                        </span>{" "}
                        <span>
                          <input
                            type="radio"
                            name="sidebar_bg"
                            defaultValue="color_9"
                            className="filled-in chk-col-primary"
                            id="sidebar_color_9"
                          />
                          <label htmlFor="sidebar_color_9" />
                        </span>{" "}
                        <span>
                          <input
                            type="radio"
                            name="sidebar_bg"
                            defaultValue="color_10"
                            className="filled-in chk-col-primary"
                            id="sidebar_color_10"
                          />
                          <label htmlFor="sidebar_color_10" />
                        </span>{" "}
                        <span>
                          <input
                            type="radio"
                            name="sidebar_bg"
                            defaultValue="color_11"
                            className="filled-in chk-col-primary"
                            id="sidebar_color_11"
                          />
                          <label htmlFor="sidebar_color_11" />
                        </span>{" "}
                        <span>
                          <input
                            type="radio"
                            name="sidebar_bg"
                            defaultValue="color_12"
                            className="filled-in chk-col-primary"
                            id="sidebar_color_12"
                          />
                          <label htmlFor="sidebar_color_12" />
                        </span>{" "}
                        <span>
                          <input
                            type="radio"
                            name="sidebar_bg"
                            defaultValue="color_13"
                            className="filled-in chk-col-primary"
                            id="sidebar_color_13"
                          />
                          <label htmlFor="sidebar_color_13" />
                        </span>{" "}
                        <span>
                          <input
                            type="radio"
                            name="sidebar_bg"
                            defaultValue="color_14"
                            className="filled-in chk-col-primary"
                            id="sidebar_color_14"
                          />
                          <label htmlFor="sidebar_color_14" />
                        </span>{" "}
                        <span>
                          <input
                            type="radio"
                            name="sidebar_bg"
                            defaultValue="color_15"
                            className="filled-in chk-col-primary"
                            id="sidebar_color_15"
                          />
                          <label htmlFor="sidebar_color_15" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>

    // const newStudent = {
    //   ci: objectData.schoolId,
    //   name: objectData.name,
    //   lastName: objectData.lastName,
    //   address: objectData.address,
    //   birthDate: objectData.birthDate,
    //   gender: objectData.gender,
    //   admissionDate: objectData.admissionDate,
    //   birthPlace: objectData.birthPlace,
    //   houseProperty: objectData.houseProperty,
    //   representant: {
    //     ci: objectData.repCI,
    //     repName: objectData.repName,
    //     repLastName: objectData.repLastName,
    //     email: objectData.email,
    //     phone: objectData.phone,
    //   },
    //   gradeId: objectData.grade,
    // };
  );
};

export default pdf;
