import axios from "axios";
import AdminMainPagination from "Components/AdminMainPagination";
import RecordStudentModal from "Components/Modal/RecordStudentModal";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";
import endPoints from "utils/endpoints";
import GradeService from "services/grade.service";
import StudentsService from "services/students.service";
import SearchRepresentant from "Components/Modal/SearchRepresentant";

const service = new GradeService();
const studentService = new StudentsService();

const EditStudent = ({ data }) => {
  const { student, grades } = data;
  console.log(student);

  const formRef = useRef(null);
  const router = useRouter();
  const [state, setState] = useState({
    loading: false,
    error: null,
  });
  const [representant, setRepresentant] = useState(null);

  useEffect(() => {}, [representant]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    let addNewStudent = {};

    const formData = new FormData(formRef.current);

    const objectData = Object.fromEntries([...formData.entries()]);
    const newStudentNoRepresententant = {
      schoolarshipCi: objectData.schoolId,
      nativeCi: objectData.nativeCi || undefined,
      name: objectData.name,
      lastName: objectData.lastName,
      address: objectData.address,
      birthDate: objectData.birthDate,
      gender: objectData.gender,
      admissionDate: objectData.admissionDate,
      birthPlace: objectData.birthPlace,
      houseProperty: objectData.houseProperty,
      representantCi: representant?.ci,
      gradeId: objectData.grade,
    };

    const newStudent = {
      schoolarshipCi: objectData.schoolId,
      nativeCi: objectData.nativeCi || undefined,
      name: objectData.name,
      lastName: objectData.lastName,
      address: objectData.address,
      birthDate: objectData.birthDate,
      gender: objectData.gender,
      admissionDate: objectData.admissionDate,
      birthPlace: objectData.birthPlace,
      houseProperty: objectData.houseProperty,
      representant: {
        ci: objectData.repCI,
        repName: objectData.repName,
        repLastName: objectData.repLastName,
        email: objectData.email,
        phone: objectData.phone,
      },
      gradeId: objectData.grade,
    };

    setState({ loading: true, error: null });

    if (representant !== null) {
      addNewStudent = newStudentNoRepresententant;
    } else {
      addNewStudent = newStudent;
    }

    setState({ loading: true, error: null });
    axios
      .patch(
        endPoints.students.updateStudent(student.schoolarshipCi),
        updateDataStudent
      )
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Se ha actualizado exitosamente el estudiante",
          showConfirmButton: false,
          timer: 1500,
        });
        setState({ loading: false, error: null });
        router.push("/admin/estudiantes");
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
                  <h4 className="text-primary mb-4">Información Personal</h4>
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
                            defaultValue={student.schoolarshipCi}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="form-group">
                          <label className="form-label">
                            Cedula de Identidad Venezolana
                          </label>
                          <input
                            type="text"
                            name="nativeCi"
                            className="form-control"
                            defaultValue={student.nativeCi || "No tiene"}
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
                            defaultValue={student.gender}
                          >
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
                      <div className="card-header col-lg-9 col-md-12 col-sm-12">
                        <h4 className="text-primary mb-4">
                          Información del representante
                        </h4>
                      </div>
                      <div className="card-header col-lg-3 col-md-12 col-sm-12">
                        <a
                          className="btn btn-primary"
                          data-bs-toggle="modal"
                          data-bs-target={`#searchRepresentant`}
                        >
                          Buscar Representante
                        </a>
                        <SearchRepresentant
                          setRepresentant={setRepresentant}
                          representant={representant}
                        />
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="form-group">
                          <label className="form-label">
                            Nombre del Representante
                          </label>
                          <input
                            type="text"
                            name="repName"
                            className={`form-control ${
                              representant !== null && "disabled"
                            }
                            `}
                            disabled={representant !== null && "true"}
                            defaultValue={
                              representant !== null
                                ? representant?.repName
                                : student.representant?.repName
                            }
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
                            className={`form-control ${
                              representant !== null && "disabled"
                            }
                            `}
                            disabled={representant !== null && "true"}
                            defaultValue={
                              representant !== null
                                ? representant?.repLastName
                                : student.representant?.repLastName
                            }
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
                            className={`form-control ${
                              representant !== null && "disabled"
                            }
                            `}
                            disabled={representant !== null && "true"}
                            defaultValue={
                              representant !== null
                                ? representant?.ci
                                : student.representant?.ci
                            }
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="form-group">
                          <label className="form-label">Telefono</label>

                          <input
                            type="text"
                            name="phone"
                            className={`form-control ${
                              representant !== null && "disabled"
                            }
                            `}
                            disabled={representant !== null && "true"}
                            defaultValue={
                              representant !== null
                                ? representant?.phone
                                : student.representant?.phone
                            }
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="form-group">
                          <label className="form-label">Email</label>
                          <input
                            type="email"
                            name="email"
                            className={`form-control ${
                              representant !== null && "disabled"
                            }
                            `}
                            disabled={representant !== null && "true"}
                            defaultValue={
                              representant !== null
                                ? representant?.email
                                : student.representant?.email
                            }
                          />
                        </div>
                      </div>

                      <div className="col-lg-12 col-md-12 col-sm-12">
                        <button type="submit" className="btn btn-primary">
                          Guardar
                        </button>
                        <button
                          type="button"
                          className="btn btn-warning ml-2 text-white"
                        >
                          Cancelar
                        </button>
                        <button
                          type="button"
                          data-bs-toggle="modal"
                          data-bs-target={`#record-${student.schoolarshipCi}`}
                          className="btn btn-primary mr-3 float-right"
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
  const { ci } = query;

  const response = await service.find();
  const grades = await JSON.parse(JSON.stringify(response));
  const response2 = await studentService.findOne(ci);
  const student = await JSON.parse(JSON.stringify(response2));

  return {
    props: {
      data: {
        grades,
        student,
      },
    },
  };
}
