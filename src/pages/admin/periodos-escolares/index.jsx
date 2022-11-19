import axios from "axios";
import AdminMainPagination from "Components/AdminMainPagination";
import Loader from "Components/Loader";
import Loading from "Components/Loading/Loading";
import AddNewPeriodModal from "Components/Modal/AddNewPeriodModal";
import EditPeriodModal from "Components/Modal/EditPeriodModal";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import endPoints from "utils/endpoints";

const ListPeriods = () => {
  const [state, setState] = useState({
    loading: false,
    error: null,
  });
  const [periods, setPeriods] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setState({ loading: true, error: null });
      try {
        const response = await axios.get(endPoints.periods.getAllPeriods);
        const data = await JSON.parse(JSON.stringify(response.data));
        console.log(data);
        setPeriods(data);
        setState({ loading: false, error: null });
      } catch (err) {
        setState({ loading: false, error: err });
      }
    }

    // const script = document.createElement("script");
    // script.src = "/js/dlabnav-init.js";
    // script.async = false;
    // document.body.appendChild(script);
    fetchData();
  }, []);

  const handleDeletePeriod = async (id) => {
    try {
      Swal.fire({
        title: "¿Estás seguro?",
        text: "¿Deseas eliminar este Período Escolar?",
        icon: "warning",
        showDenyButton: "true",
        confirmButtonText: "Sí, deseo eliminar el período",
      }).then((result) => {
        if (result.isConfirmed) {
          async function deletePeriod() {
            try {
              await axios.delete(endPoints.periods.deletePeriod(id));
              Swal.fire(
                "El Período se ha eliminado correctamente",
                "",
                "success"
              );
            } catch (err) {
              setState({ loading: false, error: err });
            }
          }
          deletePeriod();
        } else if (result.isDenied) {
          Swal.fire("Cancelado", "", "info");
        }
      });
    } catch (error) {
      Swal.fire("Oops", error.message, "error");
    }
  };

  return (
    <>
      <div className="content-body">
        <div className="container-fluid">
          <AdminMainPagination pageName={"Periods"} />

          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">
                  Lista de todos los Períodos Escolares{" "}
                </h4>
                <button
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#newPeriod"
                  className="btn btn-primary"
                >
                  + Agregar Período Escolar
                </button>
                <AddNewPeriodModal />
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  {state.loading ? (
                    <Loading />
                  ) : (
                    <table className="table table-striped verticle-middle table-responsive-sm">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Periodo Escolar</th>
                          <th scope="col">Estatus</th>
                          <th scope="col">Estudiantes Totales</th>
                          <th scope="col">Acciones</th>
                        </tr>
                      </thead>
                      <tbody>
                        {periods?.map((period) => (
                          <tr key={period.id}>
                            <td>{period.id}</td>
                            <td>{period.name}</td>

                            <td>
                              <span className="badge badge-success">
                                Activo
                              </span>
                            </td>
                            <td>100</td>
                            {/* <td>{period.totalStudents}</td> */}
                            {/* <td>{period.students.length}</td> */}
                            <td>
                              <>
                                <a
                                  href="#!"
                                  rel="noopener noreferrer"
                                  data-bs-toggle="modal"
                                  data-bs-target={`#period-${period.id}`}
                                >
                                  <i className="material-icons">edit</i>
                                </a>
                                <a
                                  href="#!"
                                  rel="noopener noreferrer"
                                  onClick={() => handleDeletePeriod(period.id)}
                                >
                                  <i className="material-icons">delete</i>
                                </a>
                                <Link
                                  href={`/admin/grados/editar/${period.id}`
                                    .toLowerCase()
                                    .replaceAll(" ", "-")
                                    .normalize("NFD")
                                    .replace(/[?¿¡!\u0300-\u036f]/g, "")}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <a>
                                    <i className="material-icons">
                                      account_box
                                    </i>
                                  </a>
                                </Link>
                              </>
                            </td>
                            <EditPeriodModal period={period} />
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListPeriods;
