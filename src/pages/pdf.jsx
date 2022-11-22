import React from "react";

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
              src={
                "data:image/png;base64,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"
              }
              alt="Logo de Fe y Alegria"
            ></img>
            <p
              style={{
                color: "grey",
                textAlign: "center",
                fontSize: "32px",
                fontWeight: "bold",
              }}
            >
              U.E.C Fe y Alegría San Francisco
            </p>
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
          <h2 style={{textAlign: "center", fontSize: "26px", fontStyle: "italic" }}>El Estudiante no presenta eventualidades que mostrar</h2>
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
