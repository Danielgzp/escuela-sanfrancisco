import EditGradeModal from "Components/Modal/EditGradeModal";
import Link from "next/link";
import endPoints from "utils/endpoints";

export const columns = (handleDeleteGrade, fetchData, periods) => [
  {
    id: (row) => row.id,
    name: "#",
    selector: (row) => row.id,
    sortable: true,
    reorder: true,
    style: {
      backgroundColor: "#daecff",
    },
  },

  {
    name: "Nombre",
    selector: (row) => row.name,
    sortable: true,
    reorder: true,
  },
  {
    name: "Sección",
    selector: (row) => row.section,
    sortable: true,
    reorder: true,
  },
  {
    name: "Estudiantes Totales",
    selector: (row) => row.students.length,
    sortable: true,
    reorder: true,
  },
  {
    name: "Maestro/a",
    selector: (row) =>
      row.teacher?.name + " " + row.teacher?.lastName || "No tiene",
    sortable: true,
    reorder: true,
  },
  {
    cell: (row) => (
      <>
        <a href="#!" data-bs-toggle="modal" data-bs-target={`#grade-${row.id}`}>
          <i className="material-icons">edit</i>
        </a>
        <a href="#!" onClick={() => handleDeleteGrade(row.id)}>
          <i className="material-icons">delete</i>
        </a>
        <EditGradeModal grade={row} periods={periods} fetchData={fetchData} />
      </>
    ),
    name: "Acciones",
    sortable: false,
    reorder: true,
  },
];

export const paginationOptions = {
  rowsPerPageText: "Filas por página",
  rangeSeparatorText: "de",
  noRowsPerPage: false,
  selectAllRowsItem: true,
  selectAllRowsItemText: "Todos",
};
