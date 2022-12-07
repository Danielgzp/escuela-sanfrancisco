import Link from "next/link";
import endPoints from "utils/endpoints";

export const columns = (student) => [
  {
    name: "C.I Escolar",
    selector: (row) => row.schoolarshipCi,
    sortable: true,
    reorder: true,
    style: {
      backgroundColor: "#143b6444",
    },
  },

  {
    name: "Nombre",
    selector: (row) => `${row.name} ${row.lastName}`,

    sortable: true,
    reorder: true,
  },
  {
    name: "C.I Representante",
    selector: (row) => row.representant?.ci,
    sortable: true,
    reorder: true,
  },
  {
    name: "Nombre del Representante",
    selector: (row) => `${row.representant?.repName} ${row.representant?.repLastName}`,
    sortable: true,
    reorder: true,
  },
  {
    name: "Teléfono",
    selector: (row) => row.representant?.phone,
    sortable: true,
    reorder: true,
  },
  {
    name: "Correo",
    selector: (row) => row.representant?.email,
    sortable: true,
    reorder: true,
  },
];
