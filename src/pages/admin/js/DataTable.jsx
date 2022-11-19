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
// import TableHeader from "./TableHeader";
import Loading from "Components/Loading/Loading";
import { columns, paginationOptions } from "./columns";
import { useRef, useState } from "react";
// import "./css/datatable.css"

// const [filterText, setFilterText] = useState("");
// const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
// const filteredItems = fakeUsers.filter(
//   (item) =>
//     item.name && item.name.toLowerCase().includes(filterText.toLowerCase())
// );

// const subHeaderComponentMemo = useMemo(() => {
//   const handleClear = () => {
//     if (filterText) {
//       setResetPaginationToggle(!resetPaginationToggle);
//       setFilterText("");
//     }
//   };

//   return (
//     <FilterComponent
//       onFilter={(e) => setFilterText(e.target.value)}
//       onClear={handleClear}
//       filterText={filterText}
//     />
//   );
// }, [filterText, resetPaginationToggle]);


const ReportDataTable = ({ grades }) => {
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
  const formRef = useRef(null);
  const [students, setStudents] = useState([]);
  const [state, setState] = useState({
    loading: false,
    error: null,
  });
  // const [grades, setGrades] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(formRef.current);
    const objectData = Object.fromEntries([...formData.entries()]);
    const gradeData = {
      gradeId: objectData.grade,
    };

    setState({ loading: true, error: null });
    console.log(gradeData);
    console.log(
      `${endPoints.students.getAllStudents}?filterGrade=${gradeData.gradeId}`
    );
    axios
      .get(
        `${endPoints.students.getAllStudents}?filterGrade=${gradeData.gradeId}`
      )
      .then((response) => {
        console.log(response);
        setStudents(response.data);
        setState({ loading: false, error: null });
        // router.push("/");
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.response.data,
        });
        console.log(err);
        setState({ loading: false, error: err });
      });
  };

  console.log(students);

  return (
    <>
      {/* <div className="table-responsive students-table z-depth-3"> */}
      <DataTable
        dense
        direction="auto"
        highlightOnHover={true}
        columns={columns()}
        data={students}
        striped={true}
        title="Movie List"
        fixedHeader
        fixedHeaderScrollHeight="700px"
        noDataComponent={<h3>No se encontro ningun elemento</h3>}
        // progressPending={loading}
        progressComponent={<Loading />}
        pagination
        //el paginationServer hacia que no funcionarai bien la paginacion,
        paginationComponentOptions={paginationOptions}
        //   onChangeRowsPerPage={20}
        subHeader
        subHeaderComponent={
          <>
            <div id="headerTable-container">
              <h4 className="card-title">Filtrar alumnos por grado</h4>
              <div className="search-bar">
                <p>
                  <i className="material-icons">search</i>
                  Selecciona el grado
                </p>
                <form onSubmit={handleSubmit} ref={formRef}>
                  <select name="grade" className="form-control">
                    <option value="">Grado</option>
                    {grades.map((grade) => (
                      <option
                        key={grade.id}
                        value={`${grade.id}`}
                      >{`${grade.name} ${grade.section}`}</option>
                    ))}
                  </select>
                  <button type="submit">Ir</button>
                </form>
              </div>
            </div>
          </>
        }
        persistTableHead
      />
    </>
  );
};

export default ReportDataTable;