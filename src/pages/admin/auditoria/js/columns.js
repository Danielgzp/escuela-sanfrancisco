import Link from "next/link";
import endPoints from "utils/endpoints";

export const columns = (student) => [
  {
    name: "#",
    selector: (row) => `${row.grade.name} ${row.grade.section}`,
    sortable: true,
    reorder: true,
    style: {
      backgroundColor: "#143b6444",
    },
  },
  {
    name: "Usuario",
    selector: (row) => row.user,
    sortable: true,
    reorder: true,
  },
  {
    name: "Modulo",
    selector: (row) => row.lastName,
    sortable: true,
    reorder: true,
  },
  {
    name: "Acción",
    selector: (row) => row.gender,
    sortable: true,
    reorder: true,
  },
  {
    // cell: (row) => (
    //   <img height="56px" width="56px" alt={row.name} src={row.image} />
    // ),
    name: "Descripción",
    selector: (row) => row.birthDate,
    sortable: true,
    reorder: true,
  },
  {
    selector: (row) => row.birthPlace,
    name: "Fecha",
    sortable: true,
    reorder: true,
  },
];
