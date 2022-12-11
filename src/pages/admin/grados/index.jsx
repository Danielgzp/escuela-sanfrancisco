import axios from "axios";
import AdminMainPagination from "Components/AdminMainPagination";
import ReportDataTable from "Components/DataTables/ReportsDatatable";
import Loader from "Components/Loader";
import Loading from "Components/Loaders/Loading";
import AddNewGrade from "Components/Modal/AddNewGradeModal";
import EditGradeModal from "Components/Modal/EditGradeModal";
import Cookies from "js-cookie";
import Link from "next/link";
import Script from "next/Script";
import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { CSVLink } from "react-csv";
import ReactHtmlTableToExcel from "react-html-table-to-excel";
import ReactToPrint from "react-to-print";
import Swal from "sweetalert2";
import endPoints from "utils/endpoints";
import { columns } from "./js/columns";

const ListGrades = () => {
  const [state, setState] = useState({
    loading: false,
    error: null,
  });
  const componentRef = useRef();

  const [grades, setGrades] = useState([]);
  const [periods, setPeriods] = useState([]);
  const [levels, setLevels] = useState([]);
  const cookie = Cookies.get("userJWT");
  const config = {
    headers: { Authorization: `Bearer ${cookie}` },
  };

  const fetchData = () => {
    setState({ loading: true, error: null });
    axios
      .get(endPoints.grades.getAllGrades)
      .then((response) => {
        setGrades(response.data);
        setState({ loading: false, error: null });
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.message,
        });
        setState({ loading: false, error: null });
      });
  };

  useEffect(() => {
    async function fetchNewData() {
      setState({ loading: true, error: null });
      try {
        const responsePeriods = await axios.get(
          endPoints.periods.getAllPeriods
        );
        const responseLevels = await axios.get(
          "http://localhost:3000/api/v1/admin/levels"
        );
        const dataPeriods = await JSON.parse(
          JSON.stringify(responsePeriods.data)
        );
        const dataLevels = await JSON.parse(
          JSON.stringify(responseLevels.data)
        );
        setPeriods(dataPeriods);
        setLevels(dataLevels);
        setState({ loading: false, error: null });
      } catch (err) {
        setState({ loading: false, error: err });
      }
    }

    // const script = document.createElement("script");
    // script.src = "/js/plugins-init/datatables.init.js";
    // script.async = true;
    // document.body.appendChild(script);
    fetchData();
    fetchNewData();
  }, []);

  const handleDeleteGrade = async (id) => {
    // const id = e.target.getAttribute("id");
    Swal.fire({
      title: "¿Estás seguro?",
      text: "¿Deseas eliminar este Grado?",
      icon: "warning",
      showDenyButton: "true",
      confirmButtonText: "Sí, deseo eliminar el grado",
    })
      .then((result) => {
        if (result.isConfirmed) {
          setState({ loading: true, error: null });
          axios
            .delete(endPoints.grades.deleteGrade(id), config)
            .then((response) => {
              Swal.fire(
                "El Grado se ha eliminado correctamente",
                "",
                "success"
              );
              fetchData();
            })
            .catch((err) => {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: err.response.data,
              });
              setState({ loading: false, error: err });
            });
        } else if (result.isDenied) {
          Swal.fire("Cancelado", "", "info");
        }
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.message,
        });
      });
  };


  const Actions = () => {
    return (
      <>
        {grades.length > 0 && (
          <>
            <CSVLink data={grades} filename="listGrados.csv">
              <button className="btn btn-secondary text-white">
                <i className="fas fa-file-csv mr-2"></i>
                CSV
              </button>
            </CSVLink>
            <ReactToPrint
              trigger={() => {
                return (
                  <button className="btn btn-dark text-white">
                    <i className="fas fa-print mr-2"></i>
                    Imprimir
                  </button>
                );
              }}
              documentTitle="ListaGrados"
              pageStyle="print"
              content={() => componentRef.current}
              copyStyles={true}
            />
            <button className="btn btn-success text-white">
              <i className="fas fa-file-excel mr-2"></i>
              <ReactHtmlTableToExcel
                id="exportExcel"
                sheet="Pagina 1"
                table="grades"
                filename="grados"
                buttonText="Excel"
                style={{ border: "none", backgroundColor: "transparent" }}
                // className="btn"
              ></ReactHtmlTableToExcel>
            </button>

            <button
              className="btn btn-danger"
              onClick={() => {
                console.log("hace click");
                setState({loading:true, error: null})
                axios
                  .post("http://localhost:3000/api/v1/admin/grades/reports", grades)
                  .then((response) => {
                    console.log("llega aqui");
                    Swal.fire({
                      icon: "success",
                      title: "PDF creado",
                      text: response.data,
                    });
                    setState({ loading: false, error: null });
                  })
                  .catch((err) => {
                    console.log("llega al error");
                    console.log(err);
                    setState({ loading: false, error: err });
                    Swal.fire({
                      icon: "error",
                      title: "Oops...",
                      text: "Ha ocurrido un error al generar el PDF",
                    });

                  });
              }}
            >
              <i className="fas fa-file-pdf mr-2"></i>
              PDF
            </button>
          </>
        )}
      </>
    );
  };

  const TableHeader = () => {
    return (
      <>
        <div id="headerTable-container">
          <form onSubmit={handleSubmit} ref={formRef} className="tableForm">
            <div className="form-group">
              <label>Selecciona</label>
              <select name="cedulado" className="form-control">
                <option>Alumnos</option>
                <option value="si">Cedulados</option>
                <option value="no">No cedulados</option>
              </select>
            </div>

            <button type="submit" className="btn btn-primary">
              Buscar
            </button>
          </form>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="content-body">
        <div className="container-fluid">
          <AdminMainPagination pageName={"Grados"} />

          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Lista de todos los Grados </h4>
                <button
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#newGrade"
                  className="btn btn-primary"
                >
                  + Agregar Grado
                </button>
                <AddNewGrade
                  periods={periods}
                  fetchData={fetchData}
                  educationLevels={levels}
                  authorization={config}
                />
              </div>
              <div className="card-body">
                <div className="table-responsive" ref={componentRef}>
                  <ReportDataTable
                    data={grades}
                    columns={columns(
                      handleDeleteGrade,
                      fetchData,
                      periods,
                      config
                    )}
                    actionsComponent={Actions()}
                    loading={state.loading}
                    handleDelete={handleDeleteGrade}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: "none" }}>
        <table id="grades">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Nombre</th>
              <th scope="col">Sección</th>
              <th scope="col">Alumnos Totales</th>
              <th scope="col">Maestro/a</th>
            </tr>
          </thead>
          <tbody>
            {grades?.map((grade) => (
              <tr key={grade.id}>
                <th>{grade.id}</th>
                <th>{grade.name}</th>
                <th>{grade.section}</th>
                <th>{grade.students.length}</th>
                <th>
                  {grade.teacher?.name || "No"}{" "}
                  {grade.teacher?.lastName || "Hay"}
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ListGrades;
