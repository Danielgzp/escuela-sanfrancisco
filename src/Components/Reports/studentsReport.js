import moment from "moment";
import reportHeader from "./reportHeader";

const date = new Date();
moment(date).format("DD-MM-YYYY");

const studentsReport = (body) => `
<!doctype html>
<html>
  <head>
  <meta></meta>
  <title></title>
  <style>
  .reportContainer {
  padding: 20px;
}
  body {
  padding: 20px;
  margin: 10px 15px;
}
.firstColumn {
  background-color: #daecff;
}
#firstColumn {
  background-color: #daecff;
}
#totalData {
  width: 100%;
}
.totalData {
  width: 100%;
}
.reportTitle {
  margin: 0 auto;
}
.reportTitle h2 {
  margin: 0 auto;
  text-align: center;
}
table {
  width: 100%;
  margin: 0 auto;
  border-radius: 5px;
  box-shadow: 1px 2px 6px 1px rgba(0, 0, 0, 0.25);
  padding: 0;
  margin: 0 auto;
  display: table;
  border-collapse: collapse;
  border-spacing: 0;
}
thead tr {
  width: 100%;
  padding: 0;
  margin: 0;
}
thead tr th {
  background-color: #143b64;
  width: fit-content;
  font-size: 17px;
  color: white;
  padding: 5px 10px;
  margin: 0;
}
tbody {
  background-color: #daecff;
}
tbody tr th {
  width: fit-content;
  font-size: 13px;
  padding: 5px;
  margin: 0;
}
  </style>
  </head>
  <body>
    ${reportHeader}
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
        <h3>${body[0].grade?.name}</h3>
        <h3>Seccion ${body[0].grade?.section}</h3>
        <h3>${body[0].grade?.period?.name}</h3>
      </div>
      <div
        style="display: flex;
                flex-direction: row;
                justify-content: space-around;
                align-items: center;
                width: 100%;"
      >
        <h3>Total Estudiantes: ${body.length}</h3>
        <h3>Profesora: ${body[0].grade?.teacher?.name || "No"} ${
  body[0].grade?.teacher?.lastName || "hay Profesor"
}</h3>
        <h3>${date}</h3>
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
        ${body.map(
          (student) => `
            <tr key="${student.id}">
            <th class="firstColumn" id="firstColumn" >${student.schoolarshipCi}</th>
            <th>${student.name}</th>
            <th>${student.lastName}</th>
            <th>${student.gender}</th>
            <th>${student.birthDate}</th>
          </tr>
          `
        )}
      </tbody>
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
        <a href="http://localhost:3000/" target="_blank"
          >http://localhost:3000/</a
        >
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
      >
        Página {{page}} de {{pages}}
      </p>
    </div>
     </body>
</html>
`;

export default studentsReport;
