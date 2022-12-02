import reportHeader from "./reportHeader";

const studentsReport = (body) => `
    ${reportHeader}
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
            <th>${student.schoolarshipCi}</th>
            <th>${student.name}</th>
            <th>${student.lastName}</th>
            <th>${student.gender}</th>
            <th>${student.birthDate}</th>
          </tr>
          `
        )}
      </tbody>
    </table>
    <div>
      <h2>EEEE de estudiantes es: ${body.length}</h2>
    </div>
    <div>
      <h2>
        El Profesor es: ${body[0].grade?.teacher?.name || "No"} ${
  body[0].grade?.teacher?.lastName || "Hay Profesor"
}
      </h2>
    </div>
`;

export default studentsReport;
