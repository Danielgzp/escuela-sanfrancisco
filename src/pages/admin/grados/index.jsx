import axios from "axios";
import AdminMainPagination from "Components/AdminMainPagination";
import Loader from "Components/Loader";
import Loading from "Components/Loading/Loading";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import endPoints from "utils/endpoints";
import { loadScripts } from "utils/loadScripts";

const ListGrades = () => {
  const [state, setState] = useState({
    loading: false,
    error: null,
  });
  const [grades, setGrades] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setState({ loading: true, error: null });
      try {
        const response = await axios.get(endPoints.grades.getAllGrades);
        const data = await JSON.parse(JSON.stringify(response.data));
        setGrades(data);
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

  const handleDeleteGrade = async (id) => {
    try {
      Swal.fire({
        title: "¿Estás seguro?",
        text: "¿Deseas eliminar este Grado?",
        icon: "warning",
        showDenyButton: "true",
        confirmButtonText: "Sí, deseo eliminar el grado",
      }).then((result) => {
        if (result.isConfirmed) {
          axios.delete(endPoints.grades.deleteGrade(id));
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
          <AdminMainPagination pageName={"Grades"} />

          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Bordered Table</h4>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  {state.loading ? (
                    <Loading />
                  ) : (
                    <table className="table table-striped verticle-middle table-responsive-sm">
                      <thead>
                        <tr>
                          <th scope="col">Grado</th>
                          <th scope="col">Sección</th>
                          <th scope="col">Maestra/Maestro</th>
                          <th scope="col">Estudiantes Cursantes</th>
                          <th scope="col">Acciones</th>
                        </tr>
                      </thead>
                      <tbody>
                        {grades?.map((grade) => (
                          <tr key={grade.id}>
                            <td>{grade.name}</td>
                            <td>{grade.section}</td>
                            <td>
                              {grade?.teacher?.name} {grade?.teacher?.lastName}
                            </td>

                            <td>{grade.students.length}</td>
                            <td>
                              <>
                                <Link
                                  href={`/admin/grados/editar/${grade.id}`}
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
                                  onClick={() => handleDeleteGrade(grade.id)}
                                >
                                  <i className="material-icons">delete</i>
                                </a>
                                <Link
                                  href={`/admin/grados/editar/${grade.id}`
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

export default ListGrades;
