import React from "react";

const a = () => {
  return (
    <div
      class="reportTitle"
      style="display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;"
    >
      <div>
        <strong>
          <h2>LISTAS DE ESTUDIANTES</h2>
        </strong>
      </div>
      <div
        style="display: flex;
                flex-direction: row;
                justify-content: space-around;
                align-items: center;
                width: 100%;"
      >
        <h3>2° grado</h3>
        <h3>Seccion A</h3>
        <h3>Período 2022/2024</h3>
      </div>
      <div
        style="display: flex;
                flex-direction: row;
                justify-content: space-around;
                align-items: center;
                width: 100%;"
      >
        <h3>Total Estudiantes: 32</h3>
        <h3>Profesora: Naibys Paez</h3>
        <h3>18-07-2022</h3>
      </div>
    </div>
  );
};

export default a;
