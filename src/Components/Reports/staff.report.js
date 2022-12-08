import moment from "moment";
import reportHeader from "./reportHeader";

const now = Date.now();
const date = new Date(now);

const staffReport = (body) => `
<!doctype html>
<html>
  <head>
  <meta></meta>
  <title></title>
  <style>
  body {
  padding: 20px;
  margin: 10px 15px;
}
.reportTitle {
  margin: 0 auto;
}
.reportTitle h2 {
  margin: 0 auto;
  text-align: center;
}
table {
  width: 95%;
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
.row{
  width: 100%;
  display: -webkit-box; 
  -webkit-box-pack: justify;
}
.date{
  width: 100%;
  text-align: center;
  margin: 0 auto;
  margin-top: 10px;
  font-weight: bold;
  font-size: 18px;
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
          <h2>LISTA DEL PERSONAL</h2>
        </strong>
        <p class="date">${moment(date).format("dddd, DD MMMM YYYY HH:mm a")}</p>
      </div>
      <div class="row" >
        <h3>Total del Personal: ${body.length}</h3>
        
      </div>
    </div>
    <table>
      <thead>
        <tr>
          <th scope="col">Cédula</th>
            <th scope="col">Nombres</th>
            <th scope="col">Apellidos</th>
            <th scope="col">Dirección</th>
            <th scope="col">Teléfono</th>
            <th scope="col">Fecha de Nacimiento</th>
            <th scope="col">Correo</th>
            <th scope="col">Cargo</th>
        </tr>
      </thead>
      <tbody>
        ${body.map(
          (staff) => `
            <th>${staff.ci}</th>
            <th>${staff.name}</th>
            <th>${staff.lastName}</th>
            <th>${staff.address}</th>
            <th>${staff.phone}</th>
            <th>${staff.birthDate}</th>
            <th>${staff.email}</th>
            <th>${staff.role.name}</th>
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

export default staffReport;
