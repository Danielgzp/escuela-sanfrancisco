import axios from "axios";
import AdminMainPagination from "Components/AdminMainPagination";
import Loader from "Components/Loader";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import endPoints from "utils/endpoints";
import { loadScripts } from "utils/loadScripts";

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
        console.log(data)
        setPeriods(data);
        setState({ loading: false, error: null });
      } catch (err) {
        setState({ loading: false, error: err });
      }
    }
    loadScripts();
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
        text: "¿Deseas eliminar este Grado?",
        icon: "warning",
        showDenyButton: "true",
        confirmButtonText: "Sí, deseo eliminar el grado",
      }).then((result) => {
        if (result.isConfirmed) {
          axios.delete(endPoints.periods.deletePeriod(id));
          Swal.fire("El Grado se ha eliminado correctamente", "", "success");
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
                <h4 className="card-title">Bordered Table</h4>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  {state.loading ? (
                    <Loader />
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
                              <span class="badge badge-success">Activo</span>
                            </td>
                            {/* <td>{period.totalStudents}</td> */}
                            {/* <td>{period.students.length}</td> */}
                            <td>
                              <>
                                <Link
                                  href={`/admin/grados/editar/${period.id}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <a>
                                    <i className="material-icons">edit</i>
                                  </a>
                                </Link>
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
