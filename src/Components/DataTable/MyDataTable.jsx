//import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
// este boopstrap da en el carousel
import DataTable from "react-data-table-component";
import Swal from "sweetalert2";

// import PageError from "../Error/PageError";

import Loader from "Components/Loader";
// import TableHeader from "./TableHeader";
// import PaginationTable from "./PaginationTable";
import axios from "axios";
import endPoints from "utils/endpoints";
import styles from "./css/styles";
import TableHeader from "./TableHeader";
// import "./MyDataTable.css";

const MyDataTable = ({ data, headerSearch, tableColumns }) => {
  const { filter, loading, error, search, tableTitle } = data;

  async function studentDelete(props) {
    try {
      await axios.delete(endPoints.students.deleteStudent(1));
      Swal.fire("El Estudiante se ha eliminado correctamente", "", "success");
    } catch (error) {
      Swal.fire("Oops", error.message, "error");
    }
  }

  const handleDeleteStudent = async (props) => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "¿Deseas eliminar este Estudiante?",
      icon: "warning",
      showDenyButton: "true",
      confirmButtonText: "Sí, deseo eliminar el estudiante",
    }).then((result) => {
      if (result.isConfirmed) {
        studentDelete();
      } else if (result.isDenied) {
        Swal.fire("Cancelado", "", "info");
      }
    });
  };

  const PaginationTable = () => {
    return (
      <div className="table-pagination">
        <div className="pagination-button">
          <a onClick={""}>Pre-Escolar</a>
        </div>
        <ul className="pagination right">
          <div className="pagination-container">
            <li className="page-item">
              <a className="page-link">Previousss</a>
            </li>
            <li className="page-item activw">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item" aria-current="page">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                Next
              </a>
            </li>
          </div>
        </ul>
      </div>
    );
  };

  // const TableHeader = ({ props, changeButton }) => {
  //   return (
  //     <div id="headerTable-container">
  //       <h4 className="card-title">Lista de todos los Estudiantes </h4>
  //       <div className="search-bar">
  //         <p>
  //           <i className="material-icons">search</i>
  //           Buscar:
  //         </p>
  //         <form>
  //           <input
  //             type="text"
  //             value={props}
  //             // onChange={changeButton}
  //             className="z-depth-2"
  //           />
  //         </form>
  //       </div>
  //       <div className="card-header">
  //         <Link href="/admin/students/add-student">
  //           <a className="btn btn-primary">Agregar Estudiante +</a>
  //         </Link>
  //       </div>
  //     </div>
  //   );
  // };

  return (
    <>
      {/* <div className="table-responsive students-table z-depth-3"> */}
      <DataTable
        dense
        direction="auto"
        highlightOnHover={true}
        columns={tableColumns(handleDeleteStudent)}
        data={filter}
        striped={true}
        fixedHeader
        fixedHeaderScrollHeight="700px"
        noDataComponent={<h2>No se encontro ningun elemento</h2>}
        progressPending={loading}
        progressComponent={<Loader />}
        pagination
        //el paginationServer hacia que no funcionarai bien la paginacion,
        // paginationComponentOptions={paginationOptions}
        // paginationComponent={PaginationTable}
        // paginationServer
        //   onChangeRowsPerPage={20}
        subHeader
        subHeaderComponent={
          <TableHeader
            searchButton={headerSearch}
            inputValue={search}
            tableName={tableTitle}
          />
        }
      />
      <style jsx>{styles}</style>
    </>
  );
};

export default MyDataTable;
