import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useMemo, useState } from "react";
import Swal from "sweetalert2";
import { loadScripts } from "utils/loadScripts";
import endPoints from "utils/endpoints";
import MyDataTable from "Components/DataTable/MyDataTable";
import Link from "next/link";
import { columns } from "./js/columns";
import AdminMainPagination from "Components/AdminMainPagination";

// import styles from "./styles";

// import "../../../public/vendor/pickadate/themes/default.date.module.css";
// import styles from "../../../public/vendor/pickadate/themes/default.module.css";

const ListStudents = () => {
  const [state, setState] = useState({
    loading: false,
    error: null,
    api: [],
    filter: [],
    search: " ",
    tableTitle: "Lista de los Estudiantes",
  });

  const [students, setStudents] = useState([]);
  const [limit, setLimit] = useState(50);
  const [offset, setOffset] = useState(0);
  const [level, setLevel] = useState(2);
  const [filterText, setFilterText] = useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);

  useEffect(() => {
    loadScripts();

    setState({ loading: true, error: null });
    axios
      .get(
        `http://localhost:3000/api/v1/students?limit=${limit}&offset=${offset}&level=${level}`
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
      })
      .catch((err) => {
        setState({ loading: false, error: err });
      });
  }, []);

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

    setState({ ...state, filter: result });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.api, state.search]);

  const handleSearchButton = (e) => {
    setState({ ...state, search: e.target.value });
  };
  const handleClickNext = (e) => {
    e.preventDefault();

    setState({
      loading: true,
      error: null,
    });
    setOffset(offset + limit);
    console.log(offset);

    console.log(offset);
    // setOffset(offset + 50);
    async function fetchNextPage() {
      try {
        const response = await axios(
          `http://localhost:3000/api/v1/students?limit=${limit}&offset=${offset}&level=${level}`
        );
        console.log(
          `http://localhost:3000/api/v1/students?limit=${limit}&offset=${offset}&level=${level}`
        );

        const data = await JSON.parse(JSON.stringify(response.data));
        setState({
          ...state,
          api: data,
          filter: state.data,
          loading: false,
          error: null,
        });
      } catch (err) {
        setState({ loading: false, error: err });
      }
    }
    fetchNextPage();
  };
  const handleClickPrev = (e) => {
    e.preventDefault();

    if (offset == 0) {
      console.log("es igual a 0");

      return;
    }
    setState({
      loading: true,
      error: null,
    });
    setOffset(offset - limit);
    // setOffset(offset + 50);
    async function fetchNextPage() {
      try {
        console.log(offset);
        const response = await axios(
          `http://localhost:3000/api/v1/students?limit=${limit}&offset=${offset}&level=${level}`
        );
        const data = await JSON.parse(JSON.stringify(response.data));

        setState({
          ...state,
          api: data,
          filter: state.data,
          loading: false,
          error: null,
        });
      } catch (err) {
        setState({ loading: false, error: err });
      }
    }
    fetchNextPage();
  };
  const handleClickFirstPage = (e) => {
    e.preventDefault();

    if (offset == 0) {
      console.log("es igual a 0");

      return;
    }
    setState({
      loading: true,
      error: null,
    });
    setOffset(1);
    // setOffset(offset + 50);
    async function fetchFirstPage() {
      try {
        console.log(offset);
        const response = await axios(
          `http://localhost:3000/api/v1/students?limit=${limit}&offset=${offset}&level=${level}`
        );
        const data = await JSON.parse(JSON.stringify(response.data));

        setState({
          ...state,
          api: data,
          filter: state.data,
          loading: false,
          error: null,
        });
      } catch (err) {
        setState({ loading: false, error: err });
      }
    }
    fetchFirstPage();
  };

  const handleClickLastPage = (e) => {
    e.preventDefault();

    if (offset == 394) {
      console.log("es igual a 0");

      return;
    }
    setState({
      loading: true,
      error: null,
    });
    setOffset(344);
    // setOffset(offset + 50);
    async function fetchLastPage() {
      try {
        console.log(offset);
        const response = await axios(
          `http://localhost:3000/api/v1/students?limit=${limit}&offset=${offset}&level=${level}`
        );
        const data = await JSON.parse(JSON.stringify(response.data));

        setState({
          ...state,
          api: data,
          filter: state.data,
          loading: false,
          error: null,
        });
      } catch (err) {
        setState({ loading: false, error: err });
      }
    }
    fetchLastPage();
  };

  const handleEducationLevel = (e) => {
    e.preventDefault();

    setState({
      loading: true,
      error: null,
    });
    console.log(level);
    if (level === 1) {
      const newLevel = 1;
      setLevel({});
    }
    if (level === 2) {
      const newLevel = 1;
      setLevel(level - newLevel);
    }
    console.log(level);
    axios
      .get(
        `http://localhost:3000/api/v1/students?limit=${limit}&offset=${offset}&level=${level}`
      )
      .then((response) => {
        setState({
          ...state,
          api: response.data,
          filter: state.api,
          loading: false,
          error: null,
        });
        setStudents(response.data);
      })
      .catch((err) => {
        setState({ loading: false, error: err });
      });
    // setOffset(offset + 50);
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
                          data={state}
                          students={students}
                          tableColumns={columns}
                          headerSearch={handleSearchButton}
                          nextPage={handleClickNext}
                          prevPage={handleClickPrev}
                          firstPage={handleClickFirstPage}
                          lastPage={handleClickLastPage}
                          educationLevel={handleEducationLevel}
                          level={level}
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
