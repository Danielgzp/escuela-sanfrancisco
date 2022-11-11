import Link from "next/link";
import endPoints from "utils/endpoints";

export const columns = (staff) => [
  {
    name: "C.I",
    selector: (row) => `${row.ci}`,
    sortable: true,
    reorder: true,
    style: {
      backgroundColor: "#143b6444",
    },
  },
  {
    name: "Nombres",
    selector: (row) => row.name,
    sortable: true,
    reorder: true,
  },
  {
    name: "Apellidos",
    selector: (row) => row.lastName,
    sortable: true,
    reorder: true,
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
  {
    selector: (row) => row.birthPlace,
    name: "Lugar de Nacimiento",
    sortable: true,
    reorder: true,
  },
  {
    name: "Direccion",
    selector: (row) => row.address,
    sortable: true,
    reorder: true,
  },
  {
    name: "Telefono",
    selector: (row) => row.phone,
    sortable: true,
    reorder: true,
  },
  {
    name: "Correo",
    selector: (row) => row.user.email,
    sortable: true,
    reorder: true,
  },
  {
    cell: (row) => (
      <>
        <Link
          href={`/admin/personal/editar/${row.ci}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <a>
            <i className="material-icons">edit</i>
          </a>
        </Link>
        <a
          href={row.ci}
          target="_blank"
          rel="noopener noreferrer"
          onClick={staff}
        >
          <i className="material-icons">delete</i>
        </a>
        <Link
          href={`/admin/personal/perfil/${row.ci}`
            .toLowerCase()
            .replaceAll(" ", "-")
            .normalize("NFD")
            .replace(/[?¿¡!\u0300-\u036f]/g, "")}
          target="_blank"
          rel="noopener noreferrer"
        >
          <a>
            <i className="material-icons">account_box</i>
          </a>
        </Link>
      </>
    ),
    name: "Action",
    sortable: false,
    reorder: true,
  },
];

// export const paginationOptions = {
//   rowsPerPageText: "",
//   rangeSeparatorText: "of",
//   noRowsPerPage: false,
//   selectAllRowsItem: true,
//   selectAllRowsItemText: "All",
// };
