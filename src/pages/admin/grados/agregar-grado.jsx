import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";
import { loadScripts } from "utils/loadScripts";
import endPoints from "utils/endpoints";
import AdminMainPagination from "Components/AdminMainPagination";

const AddGrade = ({ data }) => {
  const { periods } = data;
  console.log(periods);
  const formRef = useRef(null);
  const router = useRouter();
  const [state, setState] = useState({
    loading: false,
    error: null,
  });
  // const [grades, setGrades] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(formRef.current);
    const objectData = Object.fromEntries([...formData.entries()]);
    const newGrade = {
      name: objectData.name,
      section: objectData.section,
      periodId: objectData.period,
      // quotas: objectData.quotas,
    };

    setState({ loading: true, error: null });
    console.log(newGrade);
    axios
      .post(endPoints.grades.addGrade, newGrade)
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Se ha agregado exitosamente el grado",
          showConfirmButton: false,
          timer: 1500,
        });
        setState({ loading: false, error: null });
        router.push("/admin/grados");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response.data,
        });
        console.log(error);
        setState({ loading: false, error: null });
      });
  };
  useEffect(() => {
    // async function getGrades() {
    //   try {
    //     const res = await axios.get(endPoints.grades.getAllGrades);

    //     setGrades(res.data);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }
    loadScripts();
    const script = document.createElement("script");

    // getGrades();
  }, []);
  return (
    <>
      <div class="content-body">
        <div class="container-fluid">
          <AdminMainPagination pageName={"Grados"} crudName={"Añadir Grado"} />
          <div class="row">
            <div class="col-lg-12">
              <div class="card">
                <div class="card-header">
                  <h4 class="card-title">Detalles del grado</h4>
                </div>
                <div class="card-body">
                  <form onSubmit={handleSubmit} ref={formRef}>
                    <div class="row">
                      <div class="col-lg-6 col-md-6 col-sm-12">
                        <div class="form-group">
                          <label class="form-label">Nombre</label>
                          <input type="text" class="form-control" name="name" />
                        </div>
                      </div>
                      <div class="col-lg-6 col-md-6 col-sm-12">
                        <div class="form-group">
                          <label class="form-label">Sección</label>
                          <input
                            type="text"
                            class="form-control"
                            name="section"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="form-group">
                          <label className="form-label">Período Escolar</label>
                          <select name="period" className="form-control">
                            <option>Período Escolar</option>
                            {periods?.map((period) => (
                              <option
                                key={period.id}
                                value={`${period.id}`}
                              >{`${period.name}`}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div class="col-lg-12 col-md-12 col-sm-12">
                        <div class="form-group">
                          <label class="form-label">Course Details</label>
                          <textarea class="form-control" rows="5"></textarea>
                        </div>
                      </div>
                      <div class="col-lg-6 col-md-6 col-sm-12">
                        <div class="form-group">
                          <label class="form-label">Start Form</label>
                          <input
                            name="datepicker"
                            class="datepicker-default form-control"
                            id="datepicker"
                          />
                        </div>
                      </div>
                      <div class="col-lg-6 col-md-6 col-sm-12">
                        <div class="form-group">
                          <label class="form-label">Course Duration</label>
                          <input type="text" class="form-control" />
                        </div>
                      </div>
                      <div class="col-lg-6 col-md-6 col-sm-12">
                        <div class="form-group">
                          <label class="form-label">Course Price</label>
                          <input type="text" class="form-control" />
                        </div>
                      </div>
                      <div class="col-lg-6 col-md-6 col-sm-12">
                        <div class="form-group">
                          <label class="form-label">Professor Name</label>
                          <input type="text" class="form-control" />
                        </div>
                      </div>
                      <div class="col-lg-6 col-md-6 col-sm-12">
                        <div class="form-group">
                          <label class="form-label">
                            Cupos disponibles en el grado
                          </label>
                          <input
                            type="number"
                            class="form-control"
                            name="quotas"
                          />
                        </div>
                      </div>
                      <div class="col-lg-6 col-md-6 col-sm-12">
                        <div class="form-group">
                          <label class="form-label">Contact Number</label>
                          <input type="text" class="form-control" />
                        </div>
                      </div>
                      <div class="col-lg-12 col-md-12 col-sm-12">
                        <div class="form-group fallback w-100">
                          <label class="form-label d-block">Course Photo</label>
                          <input
                            type="file"
                            class="dropify"
                            data-default-file=""
                          />
                        </div>
                      </div>
                      <div class="col-lg-12 col-md-12 col-sm-12">
                        <button type="submit" class="btn btn-primary">
                          Submit
                        </button>
                        <button type="submit" class="btn btn-light">
                          Cancelar
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddGrade;

export async function getServerSideProps() {
  try {
    const response = await axios.get(endPoints.periods.getAllPeriods);
    const periods = await JSON.parse(JSON.stringify(response.data));

    return {
      props: { data: { periods } },
    };
  } catch (error) {
    return { props: { data: error.message } };
  }
}