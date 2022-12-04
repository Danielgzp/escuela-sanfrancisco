import moment from "moment";
import reportHeader from "./reportHeader";

const date = new Date();
moment(date).format("DD-MM-YYYY");

const gradesReport = (body) => `
<!doctype html>
<html>
  <head>
  <meta></meta>
  <title></title>
  <style>
  .reportContainer {
  padding: 20px;
}
.firstColumn {
  background-color: #bed8f3;
}
#firstColumn {
  background-color: #bed8f3;
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
  margin: 0;
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
  font-size: 18px;
  color: white;
  padding: 5px 10px;
  margin: 0;
}
tbody {
  background-color: #d0e4fa;
}
tbody tr th {
  width: fit-content;
  font-size: 14px;
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
        align-items: center;"
    >
      <div>
        <strong>
          <h2>LISTAS DE GRADOS</h2>
        </strong>
      </div>
      <div
        style="display: flex;
                flex-direction: row;
                justify-content: space-around;
                align-items: center;
                width: 100%;"
      >
        
      </div>
      <div
        style="display: flex;
                flex-direction: row;
                justify-content: space-around;
                align-items: center;
                width: 100%;"
      >
        <h3>Total de Grado: ${body.length}</h3>
        <h3>${date}</h3>
      </div>
    </div>
    <table>
      <thead>
        <tr>
          <th scope="col">Id</th>
            <th scope="col">Nombre</th>
            <th scope="col">Sección</th>
            <th scope="col">Alumnos Totales</th>
            <th scope="col">Maestro/a</th>
        </tr>
      </thead>
      <tbody>
        ${body.map(
          (grade) => `
            <th>${grade.id}</th>
              <th>${grade.name}</th>
              <th>${grade.section}</th>
              <th>${grade.students.length}</th>
              <th>
                ${grade.teacher?.name || "No"} ${
            grade.teacher?.lastName || "Hay"
          }
              </th>
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

export default gradesReport;
