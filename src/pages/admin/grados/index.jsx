import axios from "axios";
import AdminMainPagination from "Components/AdminMainPagination";
import Loader from "Components/Loader";
import Loading from "Components/Loaders/Loading";
import EditGradeModal from "Components/Modal/EditGradeModal";
import Link from "next/link";
import Script from "next/Script";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import endPoints from "utils/endpoints";

const ListGrades = () => {
  const [state, setState] = useState({
    loading: false,
    error: null,
  });
  const [isClient, setIsClient] = useState(false);
  const [grades, setGrades] = useState([]);
  const [periods, setPeriods] = useState([]);

  useEffect(() => {
    setIsClient(true);
    async function fetchData() {
      setState({ loading: true, error: null });
      try {
        const response = await axios.get(endPoints.grades.getAllGrades);
        const responsePeriods = await axios.get(
          endPoints.periods.getAllPeriods
        );
        const data = await JSON.parse(JSON.stringify(response.data));
        const dataPeriods = await JSON.parse(
          JSON.stringify(responsePeriods.data)
        );
        setGrades(data);
        setPeriods(dataPeriods);
        setState({ loading: false, error: null });
      } catch (err) {
        setState({ loading: false, error: err });
      }
    }

    const script = document.createElement("script");
    script.src = "/js/plugins-init/datatables.init.js";
    script.async = true;
    document.body.appendChild(script);
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
                <h4 className="card-title">Lista de todos los Grados </h4>
                <Link href="/admin/grados/agregar-grado">
                  <a className="btn btn-primary">+ Agregar Grado </a>
                </Link>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table
                    id="example5"
                    className="table table-striped verticle-middle table-responsive-sm"
                  >
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
                              <a
                                href="#!"
                                data-bs-toggle="modal"
                                data-bs-target={`#grade-${grade.id}`}
                              >
                                <i className="material-icons">edit</i>
                              </a>
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
                                  <i className="material-icons">account_box</i>
                                </a>
                              </Link>
                            </>
                          </td>
                          <EditGradeModal grade={grade} periods={periods} />
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Script
        src="/js/plugins-init/datatables.init.js"
        strategy="afterInteractive"
      /> */}
      {/* {isClient && } */}
    </>
  );
};

export default ListGrades;
