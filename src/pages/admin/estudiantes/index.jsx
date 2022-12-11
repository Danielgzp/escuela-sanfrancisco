import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useMemo, useState } from "react";
import Swal from "sweetalert2";
import endPoints from "utils/endpoints";
import MyDataTable from "Components/DataTables/MyDataTable";
import Link from "next/link";
import { columns } from "./js/columns";
import AdminMainPagination from "Components/AdminMainPagination";
import Cookies from "js-cookie";

// import styles from "./styles";

// import "../../../public/vendor/pickadate/themes/default.date.module.css";
// import styles from "../../../public/vendor/pickadate/themes/default.module.css";

const ListStudents = () => {
  const [state, setState] = useState({
    loading: false,
    error: null,
    api: [],
    filter: [],
    search: "",
    tableTitle: "Estudiantes",
  });

  const [students, setStudents] = useState([]);
  const [limit, setLimit] = useState(40);
  const [offset, setOffset] = useState(0);
  const [level, setLevel] = useState(2);
  const [totalStudents, setTotalStudents] = useState(0);
  const [filterText, setFilterText] = useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const cookie = Cookies.get("userJWT");
  const config = {
    headers: { Authorization: `Bearer ${cookie}` },
  };

  const fecthData = () => {
    axios
      .get(`http://localhost:3000/api/v1/admin/students?level=${level}`)
      .then((response) => {
        setStudents(response.data);
        setTotalStudents(response.data.length);
      })
      .catch((err) => {
        setState({ loading: false, error: err });
      });
    axios
      .get(
        `http://localhost:3000/api/v1/admin/students?limit=${limit}&offset=${offset}&level=${level}`
      )
      .then((response) => {
        setStudents(response.data);
        setState({
          ...state,
          loading: false,
          error: null,
          api: response.data,
          filter: state.api,
        });
        // setState({ loading: false, error: null });
        // setState({ loading: false, error: null });
      })
      .catch((err) => {
        setState({ loading: false, error: err });
      });
  };

  useEffect(() => {
    setState({ loading: true, error: null });
    fecthData();
  }, [offset, level]);

  const handleDeleteStudent = (e) => {
    const id = e.target.getAttribute("id");
    Swal.fire({
      title: "¿Estás seguro?",
      text: "¿Deseas eliminar este Estudiante?",
      icon: "warning",
      showDenyButton: "true",
      confirmButtonText: "Sí, deseo eliminar el estudiante",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(endPoints.students.deleteStudent(id), config)
          .then((response) => {
            Swal.fire(
              "El Estudiante se ha eliminado correctamente",
              "",
              "success"
            );
            fecthData();
          })
          .catch((err) => {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: err.response.data,
            });
          });
      } else if (result.isDenied) {
        Swal.fire("Cancelado", "", "info");
      }
    });
  };

  // const result = state?.api?.filter((student) => {
  //   return `${student.name} ${student.lastName} ${student.grade.name} ${student.grade.section}`
  //     .toLowerCase()
  //     .includes(state.search.toLowerCase());
  // });

  // setState({ ...state, filter: result });

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

  useMemo(() => {
    const result = state?.api?.filter((student) => {
      return `${student.name} ${student.lastName} ${student.grade.name} ${student.grade.section}`
        .toLowerCase()
        .includes(state.search.toLowerCase());
    });

    // setTotalStudents(result.length);
    setState({ ...state, filter: result });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.api, state.search]);

  const handleSearchButton = (e) => {
    setState({ ...state, search: e.target.value });
  };

  const handleClickFirstPage = (e) => {
    e.preventDefault();

    setOffset(0);
  };

  const handleClickLastPage = (e) => {
    e.preventDefault();

    setOffset(totalStudents - limit);
  };

  const handleEducationLevel = (e) => {
    e.preventDefault();

    if (level === 1) {
      setLevel(2);
      setOffset(0);
      setLimit(50);
    }
    if (level === 2) {
      setLevel(1);
      setOffset(0);
      setLimit(50);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    setState({
      loading: true,
      error: null,
    });
    axios
      .get(`http://localhost:3000/api/v1/admin/students?search=${state.search}`)
      .then((response) => {
        setState({
          ...state,
          api: response.data,
          filter: state.api,
          loading: false,
          error: null,
        });
        setTotalStudents(response.data.length);
        setStudents(response.data);
      })
      .catch((err) => {
        setState({ loading: false, error: err });
      });
    // setOffset(offset + 50);
  };

  const clearSearch = (e) => {
    e.preventDefault();

    setState({ loading: true, error: null });

    axios
      .get(`http://localhost:3000/api/v1/admin/students?level=${level}`)
      .then((response) => {
        setStudents(response.data);
        setTotalStudents(response.data.length);
      })
      .catch((err) => {
        setState({ loading: false, error: err });
      });

    axios
      .get(
        `http://localhost:3000/api/v1/admin/students?limit=${limit}&offset=${offset}&level=${level}`
      )
      .then((response) => {
        setStudents(response.data);
        setState({
          ...state,
          loading: false,
          error: null,
          api: response.data,
          filter: state.api,
          search: "",
        });
      })
      .catch((err) => {
        setState({ loading: false, error: err });
      });

    setState({ loading: false, error: null });
  };

  const TableHeader = () => {
    return (
      <div id="headerTable-container">
        {level !== undefined && (
          <>
            <div className="pagination-button">
              {level === 1 ? (
                <a
                  onClick={(e) => handleEducationLevel(e)}
                  className="btn btn-primary"
                >
                  Primaria
                </a>
              ) : (
                <a
                  onClick={(e) => handleEducationLevel(e)}
                  className="btn btn-primary"
                >
                  Pre-Escolar
                </a>
              )}
            </div>
          </>
        )}
        <div className="search-bar">
          <form onSubmit={handleSearchSubmit} className="tableForm">
            <div className="form-group">
              <label>
                <i className="material-icons">search</i>
                Buscar:
              </label>
              <input
                type="text"
                name="search"
                value={state.search || ""}
                onChange={handleSearchButton}
                className="z-depth-2"
              />
              {state.search?.length > 0 && (
                <i
                  className="material-icons clearSearch"
                  onClick={(e) => clearSearch(e)}
                >
                  clear
                </i>
              )}
            </div>

            <button type="submit" className="btn btn-primary">
              Ir
            </button>
          </form>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="content-body">
        <div className="container-fluid">
          <AdminMainPagination pageName={"Estudiantes"} />

          <div className="row">
            <div className="col-lg-12">
              <div className="row tab-content">
                <div
                  id="list-view"
                  className="tab-pane fade active show col-lg-12"
                >
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">
                        Lista de todos los Estudiantes{" "}
                      </h4>
                      <Link href="/admin/estudiantes/agregar-estudiante">
                        <a className="btn btn-primary">Agregar Estudiante +</a>
                      </Link>
                    </div>
                    <div className="card-body">
                      <div className="table-responsive">
                        <MyDataTable
                          loading={state.loading}
                          filter={state.filter}
                          tableColumns={columns(handleDeleteStudent)}
                          firstPage={handleClickFirstPage}
                          lastPage={handleClickLastPage}
                          headerComponent={TableHeader()}
                          setOffset={setOffset}
                          totalItems={totalStudents}
                          itemsPerPage={limit}
                          neighbours={2}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <style jsx>{styles}</style> */}
    </>
  );
};

export default ListStudents;
