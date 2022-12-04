import axios from "axios";
import React from "react";
import Swal from "sweetalert2";

import "./pdf.css";

const Ey = () => {
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
        <div
          class="reportTitle"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div>
            <strong>
              <h2>LISTAS DE ESTUDIANTES</h2>
            </strong>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              width: "100%",
              alignItems: "center",
            }}
          >
            <h3>2do grado</h3>
            <h3>Seccion A</h3>
            <h3>Período 2022/2024</h3>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              width: "100%",
              alignItems: "center",
            }}
          >
            <h3>Total Estudiantes: 32</h3>
            <h3>Profesora: Naibys Paez</h3>
            <h3>18-07-2022</h3>
          </div>
        </div>

        <table>
          <thead>
            <tr>
              <th scope="col">C.I Escolar</th>
              <th scope="col">Nombres</th>
              <th scope="col">Apellidos</th>
              <th scope="col">Género</th>
              <th scope="col">Fecha de Nacimiento</th>
            </tr>
          </thead>
          <tbody>
            <tr key="${student.id}">
              <th class="firstColumn" id="firstColumn">
                fsafsa
              </th>
              <th>asdsa </th>
              <th>fsafsa</th>
              <th>dsgdsgds</th>
              <th>asgassag</th>
            </tr>
            <tr key="${student.id}">
              <th class="firstColumn" id="firstColumn">
                fsafsa
              </th>
              <th>asdsa </th>
              <th>fsafsa</th>
              <th>dsgdsgds</th>
              <th>asgassag</th>
            </tr>
          </tbody>
        </table>
        <div>
          <h2>El Profesor es: 2 </h2>
        </div>
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

export default Ey;
