import Link from "next/link";
import endPoints from "utils/endpoints";

export const columns = (handleDelete) => [
  {
    name: "Grado",
    selector: (row) => `${row.grade.name} ${row.grade.section}`,
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
    sortable: true,
    reorder: true,
  },
  {
    selector: (row) => row.birthPlace,
    name: "Lugar de Nacimiento",
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
    name: "C.I Natural",
    selector: (row) => {
      if (row.nativeCi === null) {
        return "NA";
      } else {
        return row.nativeCi;
      }
    },
    sortable: true,
    reorder: true,
  },
  {
    name: "Direccion",
    selector: (row) => row.address,
    sortable: true,
    reorder: true,
  },
  // {
  //   name: "Nombre del representante",
  //   selector: (row) => row.representant.repName,
  //   sortable: true,
  //   reorder: true,
  // },
  // {
  //   name: "Apellido del representante",
  //   selector: (row) => row.representant.repLastName,
  //   sortable: true,
  //   reorder: true,
  // },
  // {
  //   name: "C.I Representante",
  //   selector: (row) => row.representant.ci,
  //   sortable: true,
  //   reorder: true,
  // },
  // {
  //   name: "Telefono",
  //   selector: (row) => row.representant.phone,
  //   sortable: true,
  //   reorder: true,
  // },
  // {
  //   name: "Correo",
  //   selector: (row) => row.representant.email,
  //   sortable: true,
  //   reorder: true,
  // },
  {
    cell: (row, id) => (
      <>
        <Link
          href={`/admin/estudiantes/editar/${row.schoolarshipCi}`
            .replaceAll(" ", "-")
            .normalize("NFD")
            .replace(/[?¿¡!\u0300-\u036f]/g, "")}
          target="_blank"
          rel="noopener noreferrer"
        >
          <a>
            <i className="material-icons">edit</i>
          </a>
        </Link>
        <a
          rel="noopener noreferrer"
          onClick={(e) => handleDelete(e)}
          style={{ cursor: "pointer" }}
        >
          <i className="material-icons" id={row.schoolarshipCi}>
            delete
          </i>
        </a>
        <Link
          href={`/admin/estudiantes/perfil/${row.schoolarshipCi}`
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
