import axios from "axios";
import AdminMainPagination from "Components/AdminMainPagination";
import RecordStudentModal from "Components/Modal/RecordStudentModal";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";
import endPoints from "utils/endpoints";

const EditStudent = ({ data }) => {
  const { student, grades } = data;
  console.log(student);

  const formRef = useRef(null);
  const router = useRouter();
  const [state, setState] = useState({
    loading: false,
    error: null,
  });

  useEffect(() => {
    // const script = document.createElement("script");
    // const script2 = document.createElement("script");
    // const script3 = document.createElement("script");
    // const script4 = document.createElement("script");
    // script.src = "/vendor/pickadate/picker.js";
    // script.async = false;
    // document.body.appendChild(script);
    // script2.src = "/vendor/pickadate/picker.time.js";
    // script2.async = false;
    // document.body.appendChild(script2);
    // script3.src = "/vendor/pickadate/picker.date.js";
    // script3.async = false;
    // document.body.appendChild(script3);
    // script4.src = "/js/plugins-init/pickadate-init.js";
    // script4.async = false;
    // document.body.appendChild(script4);
  }, []);
  // const [grades, setGrades] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(formRef.current);
    const objectData = Object.fromEntries([...formData.entries()]);
    const updateDataStudent = {
      ci: objectData.schoolId,
      name: objectData.name,
      lastName: objectData.lastName,
      address: objectData.address,
      birthDate: objectData.birthDate,
      gender: objectData.gender,
      admissionDate: objectData.admissionDate,
      birthPlace: objectData.birthPlace,
      houseProperty: objectData.houseProperty,
      // no funciona bien el actualizar el representante
      // representantId: 7,
      // representant: {
      //   repName: objectData.repName,
      //   repLastName: objectData.repLastName,
      //   email: objectData.email,
      //   phone: objectData.phone,
      // },
      gradeId: objectData.grade,
    };

    setState({ loading: true, error: null });
    axios
      .patch(endPoints.students.updateStudent(student.ci), updateDataStudent)
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Se ha actualizado exitosamente el estudiante",
          showConfirmButton: false,
          timer: 1500,
        });
        setState({ loading: false, error: null });
        router.push("/admin/students");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response.data,
        });
        setState({ loading: false, error: null });
      });
  };
  return (
    <>
      <div className="content-body">
        <div className="container-fluid">
          <AdminMainPagination pageName={"Estudiantes"} crudName={"Editar"} />

          <div className="row">
            <div className="col-xl-12 col-xxl-12 col-sm-12">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Información Básica</h5>
                </div>
                <div className="card-body">
                  <form onSubmit={handleSubmit} ref={formRef}>
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="form-group">
                          <label className="form-label">Nombres</label>
                          <input
                            type="text"
                            name="name"
                            className="form-control"
                            defaultValue={student.name}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="form-group">
                          <label className="form-label">Apellidos</label>
                          <input
                            type="text"
                            name="lastName"
                            className="form-control"
                            defaultValue={student.lastName}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="form-group">
                          <label className="form-label">
                            Cedula de Identidad Escolar
                          </label>
                          <input
                            type="number"
                            name="schoolId"
                            className="form-control"
                            defaultValue={student.ci}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="form-group">
                          <label className="form-label">Direccion</label>
                          <textarea
                            name="address"
                            className="form-control"
                            rows="5"
                            defaultValue={student.address}
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="form-group">
                          <label className="form-label">Fecha de Ingreso</label>
                          <input
                            type="date"
                            name="admissionDate"
                            className="datepicker-default form-control"
                            id="datepicker"
                            defaultValue={student.admissionDate}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="form-group">
                          <label className="form-label">
                            Fecha de nacimiento
                          </label>
                          <input
                            type="date"
                            name="birthDate"
                            className="datepicker-default form-control"
                            id="datepicker"
                            defaultValue={student.birthDate}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="form-group">
                          <label className="form-label">
                            Lugar de Nacimiento
                          </label>
                          <input
                            type="text"
                            name="birthPlace"
                            className="form-control"
                            defaultValue={student.birthPlace}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="form-group">
                          <label className="form-label">Grado</label>
                          <select
                            name="grade"
                            className="form-control"
                            defaultValue={student.gradeId}
                          >
                            <option value="">Grado</option>
                            {grades.map((grade) => (
                              <option
                                key={grade.id}
                                value={`${grade.id}`}
                              >{`${grade.name} ${grade.section}`}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="form-group">
                          <label className="form-label">Género</label>
                          <select
                            name="gender"
                            className="form-control"
                            // defaultValue={student.gender}
                          >
                            <option value="Genero">Género</option>
                            <option value="Masculino">Masculino</option>
                            <option value="Femenino">Femenino</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="form-group">
                          <label className="form-label">
                            Condición de la vivienda
                          </label>
                          <input
                            type="text"
                            name="houseProperty"
                            className="form-control"
                            defaultValue={student.houseProperty}
                          />
                        </div>
                      </div>
                      {/* <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="form-group">
                          <label className="form-label">
                            Nombre del Representante
                          </label>
                          <input
                            type="text"
                            name="repName"
                            className="form-control"
                            defaultValue={student.representant.repName}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="form-group">
                          <label className="form-label">
                            Apellidos del Representante
                          </label>
                          <input
                            type="text"
                            name="repLastName"
                            className="form-control"
                            defaultValue={student.representant.repLastName}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="form-group">
                          <label className="form-label">
                            Cedula de Identidad del Representante
                          </label>
                          <input
                            type="number"
                            name="repCI"
                            className="form-control"
                            defaultValue={student.representant.ci}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="form-group">
                          <label className="form-label">Telefono</label>

                          <input
                            type="text"
                            name="phone"
                            className="form-control"
                            defaultValue={student.representant.phone}
                          />
                          
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="form-group">
                          <label className="form-label">Email</label>
                          <input
                            type="email"
                            name="email"
                            className="form-control"
                            defaultValue={student.representant.email}
                          />
                        </div>
                      </div> */}

                      <div className="col-lg-12 col-md-12 col-sm-12">
                        <button type="submit" className="btn btn-primary">
                          Guardar
                        </button>
                        <button type="submit" className="btn btn-light">
                          Cancelar
                        </button>
                        <button
                          type="button"
                          data-bs-toggle="modal"
                          data-bs-target={`#record-${student.ci}`}
                          className="btn btn-primary mr-3 right"
                        >
                          <span className="mr-3">
                            <i className="fa fa-pencil"></i>
                          </span>
                          Agregar Eventualidad
                        </button>
                      </div>
                    </div>
                    <RecordStudentModal student={student} />
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

export default EditStudent;

export async function getServerSideProps({ query }) {
  console.log(query);
  const { ci } = query;

  try {
    const response = await axios.get(endPoints.students.getStudent(ci));
    const student = await JSON.parse(JSON.stringify(response.data));
    const response2 = await axios.get(endPoints.grades.getAllGrades);
    const grades = await JSON.parse(JSON.stringify(response2.data));
    console.log(student);

    return {
      props: { data: { student, grades } },
    };
  } catch (error) {
    return { props: { data: error.message } };
  }
}
