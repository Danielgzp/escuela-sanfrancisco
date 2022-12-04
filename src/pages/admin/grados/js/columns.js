import Link from "next/link";
import endPoints from "utils/endpoints";

export const columns = (grades) => [
  {
    id: (row) => row.id,
    name: "#",
    selector: (row) => row.id,
    sortable: true,
    reorder: true,
    style: {
      backgroundColor: "#143b6444",
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
    selector: (row) => row.teacher?.name || "No tiene",
    sortable: true,
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
