import Link from "next/link";
import endPoints from "utils/endpoints";

export const columns = (student) => [
  {
    name: "#",
    selector: (row) => row.id,
    sortable: true,
    reorder: true,
    style: {
      backgroundColor: "#143b6444",
    },
  },
  {
    name: "Usuario",
    selector: (row) => row.user?.email,
    sortable: true,
    reorder: true,
  },
  {
    name: "Modulo",
    selector: (row) => row.table,
    sortable: true,
    reorder: true,
  },
  {
    name: "Acción",
    selector: (row) => row.action,
    sortable: true,
    reorder: true,
  },
  {
    // cell: (row) => (
    //   <img height="56px" width="56px" alt={row.name} src={row.image} />
    // ),
    name: "Descripción",
    selector: (row) => row.description,
    sortable: true,
    reorder: true,
  },
  {
    selector: (row) => row.createdAt,
    name: "Fecha",
    sortable: true,
    reorder: true,
  },
];
