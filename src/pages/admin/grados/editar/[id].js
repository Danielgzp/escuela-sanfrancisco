import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";
import { loadScripts } from "utils/loadScripts";
import endPoints from "utils/endpoints";
import AdminMainPagination from "Components/AdminMainPagination";

const AddGrade = ({ data }) => {
  const { periods, grade } = data;
  const formRef = useRef(null);
  const router = useRouter();
  const [state, setState] = useState({
    loading: false,
    error: null,
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(formRef.current);
    const objectData = Object.fromEntries([...formData.entries()]);
    const editGrade = {
      name: objectData.name,
      section: objectData.section,
      periodId: objectData.period,
      // quotas: objectData.quotas,
    };

    setState({ loading: true, error: null });
    console.log(editGrade);
    axios
      .patch(endPoints.grades.updateGrade, editGrade)
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Se ha actualizado exitosamente el grado",
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
      <div className="content-body">
        <div className="container-fluid">
          <AdminMainPagination pageName={"Grados"} crudName={"Editar Grado"} />
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Detalles del grado</h4>
                </div>
                <div className="card-body">
                  <form onSubmit={handleSubmit} ref={formRef}>
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="form-group">
                          <label className="form-label">Nombre</label>
                          <input
                            type="text"
                            className="form-control"
                            name="name"
                            defaultValue={grade.name}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="form-group">
                          <label className="form-label">Sección</label>
                          <input
                            type="text"
                            className="form-control"
                            name="section"
                            defaultValue={grade.section}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="form-group">
                          <label className="form-label">Período Escolar</label>
                          <select
                            name="period"
                            className="form-control"
                            defaultValue={grade.id}
                          >
                            <option>{grade.period.name}</option>
                            {periods?.map((period) => (
                              <option
                                key={period.id}
                                value={`${period.id}`}
                              >{`${period.name}`}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="form-group">
                          <label className="form-label">Course Details</label>
                          <textarea className="form-control" rows="5"></textarea>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="form-group">
                          <label className="form-label">Start Form</label>
                          <input
                            name="datepicker"
                            className="datepicker-default form-control"
                            id="datepicker"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="form-group">
                          <label className="form-label">Course Duration</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="form-group">
                          <label className="form-label">Course Price</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="form-group">
                          <label className="form-label">Professor Name</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="form-group">
                          <label className="form-label">
                            Cupos disponibles en el grado
                          </label>
                          <input
                            type="number"
                            className="form-control"
                            name="quotas"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="form-group">
                          <label className="form-label">Contact Number</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="form-group fallback w-100">
                          <label className="form-label d-block">Course Photo</label>
                          <input
                            type="file"
                            className="dropify"
                            data-default-file=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12">
                        <button type="submit" className="btn btn-primary">
                          Submit
                        </button>
                        <button type="submit" className="btn btn-light">
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

export async function getServerSideProps(req) {
  const { id } = req.query;

  try {
    const response = await axios.get(endPoints.periods.getAllPeriods);
    const periods = await JSON.parse(JSON.stringify(response.data));
    const response2 = await axios.get(endPoints.grades.getGrade(id));
    const grade = await JSON.parse(JSON.stringify(response2.data));
    return {
      props: { data: { periods, grade } },
    };
  } catch (error) {
    return { props: { data: error.message } };
  }
}
