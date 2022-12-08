import Link from "next/link";
import endPoints from "utils/endpoints";

export const columns = (student) => [
  {
    name: "C.I Escolar",
    selector: (row) => row.schoolarshipCi || "N/A",
    sortable: true,
    reorder: true,
    style: {
      backgroundColor: "#143b6444",
    },
  },

  {
    name: "Nombre",
    selector: (row) => `${row.name} ${row.lastName}` || "N/A",

    sortable: true,
    reorder: true,
  },
  {
    name: "C.I Representante",
    selector: (row) => row.representant?.ci || "N/A",
    sortable: true,
    reorder: true,
  },
  {
    name: "Nombre del Representante",
    selector: (row) =>
      `${row.representant?.repName || "N"} ${
        row.representant?.repLastName || "/A"
      }`,
    sortable: true,
    reorder: true,
  },
  {
    name: "Teléfono",
    selector: (row) => row.representant?.phone || "N/A",
    sortable: true,
    reorder: true,
  },
  {
    name: "Correo",
    selector: (row) => row.representant?.email || "N/A",
    sortable: true,
    reorder: true,
  },
];
