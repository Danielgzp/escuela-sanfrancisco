import Link from "next/link";
import endPoints from "utils/endpoints";

export const columns = (hideColumn) => {
  console.log(hideColumn);
  return [
    {
      name: "Grado",
      selector: (row) => `${row.grade?.name} ${row.grade?.section}`,
      sortable: true,
      reorder: true,
      style: {
        backgroundColor: "#143b6444",
      },
    },

    {
      name: "Apellidos",
      selector: (row) => row.lastName,
      sortable: true,
      reorder: true,
    },
    {
      name: "Nombres",
      selector: (row) => row.name,
      sortable: true,
      reorder: true,
    },
    {
      name: "C.I Escolar",
      selector: (row) => row.schoolarshipCi,
      sortable: true,
      reorder: true,
    },
    {
      name: "Cedula",
      selector: (row) => row.nativeCi || "N/A",
      sortable: true,
      reorder: true,
      omit: hideColumn,
    },
    {
      name: "Sexo",
      selector: (row) => row.gender,
      sortable: true,
      reorder: true,
    },
    {
      // cell: (row) => (
      //   <img height="56px" width="56px" alt={row.name} src={row.image} />
      // ),
      name: "Fecha de Nacimiento",
      selector: (row) => row.birthDate,
      sorteble: true,
      reorder: true,
    },
  ];
};

export const paginationOptions = {
  rowsPerPageText: "Filas por página",
  rangeSeparatorText: "de",
  noRowsPerPage: false,
  selectAllRowsItem: true,
  selectAllRowsItemText: "Todos",
};
