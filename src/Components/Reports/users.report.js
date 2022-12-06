import moment from "moment";
import reportHeader from "./reportHeader";

const now = Date.now();
const date = new Date(now);

const usersReport = (body) => `
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
  font-size: 18px;
  color: white;
  padding: 5px 10px;
  margin: 0;
}
tbody {
  background-color: #daecff;
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
        align-items: center;
        width: 95%;
        margin: 0 auto;"
    >
      <div>
        <strong>
          <h2>LISTA DE USUARIOS</h2>
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
        <h3>Total de Usuarios: ${body.length}</h3>
        <h3>${moment(date).format("dddd, DD MMMM YYYY HH:mm a")}</h3>
      </div>
    </div>
    <table>
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Correo</th>
          <th scope="col">Rol</th>
        </tr>
      </thead>
      <tbody>
        ${body.map(
          (user) => `
              <th>${user.id}</th>
              <th>${user.email}</th>
              <th>${user.userRole.name}</th>
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

export default usersReport;
