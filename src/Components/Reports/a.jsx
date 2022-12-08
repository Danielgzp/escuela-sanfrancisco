import React from "react";

const a = () => {
  return (
    <>
      <div
        class="reportTitle"
        style="display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 95%;
        margin: 0 auto;"
      >
        <div>
          <strong>
            <h2>LISTAS DE ESTUDIANTES CEDULADOS</h2>
          </strong>
        </div>
        <div
          style="display: flex;
                flex-direction: row;
                justify-content: space-around;
                align-items: center;
                width: 100%;"
        >
          <h3 style="width: 33%"></h3>
          <h3 style="width: 33%"></h3>
          <h3 style="width: 34%"></h3>
        </div>
        <div
          style="display: flex;
                flex-direction: row;
                justify-content: space-around;
                align-items: center;
                width: 100%;"
        >
          <h3 style="width: 50%">Total de Estudiantes: ${body.length}</h3>
          <h3 style="width: 50%"></h3>
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th scope="col">C.I Escolar</th>
            <th scope="col">Cédula</th>
            <th scope="col">Nombres</th>
            <th scope="col">Apellidos</th>
            <th scope="col">Género</th>
            <th scope="col">Fecha de Nacimiento</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
      <div id="pageFooter" style="border-top: 1px solid #ddd; padding-top: 5px">
        <p
          style="
          color: #143b64;
          width: 70%;
          margin: 0;
          padding-bottom: 5px;
          text-align: left;
          font-family: sans-serif;
          font-size: 12px;
          float: left;
        "
        >
          Extraído de:
          <a href="http://localhost:3000/" target="_blank">
            http://localhost:3000/
          </a>
        </p>
        <p
          style="
          color: #143b64;
          margin: 0;
          padding-bottom: 5px;
          text-align: right;
          font-family: sans-serif;
          font-size: 0.65em;
        "
        ></p>
      </div>
    </>
  );
};

export default a;
