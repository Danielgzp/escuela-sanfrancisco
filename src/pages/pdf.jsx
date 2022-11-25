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
              src="/images/LogoSanFrancisco.png"
              alt="Logo de Fe y Alegria"
              style={{width: "100%", height: "auto"}}
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
