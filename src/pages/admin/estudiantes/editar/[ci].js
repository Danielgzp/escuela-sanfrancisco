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
import Cookies from "js-cookie";
import EditRepresentantModal from "Components/Modal/EditRepresentantModal";
import Loading from "Components/Loaders/Loading";
import Link from "next/link";

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
  const [editedStudent, setEditedStudent] = useState(student);
  const cookie = Cookies.get("userJWT");
  const config = {
    headers: { Authorization: `Bearer ${cookie}` },
  };

  const fetchStudent = () => {
    setState({ loading: true, error: null });
    axios
      .get(endPoints.students.getStudent(editedStudent.schoolarshipCi))
      .then((response) => {
        setEditedStudent(response.data);
        setState({ loading: false, error: null });
      })
      .catch((err) => {
        setState({ loading: false, error: err });
        console.log(err);
      });
  };

  useEffect(() => {}, [representant]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    let addNewStudent = {};

    const formData = new FormData(formRef.current);

    const objectData = Object.fromEntries([...formData.entries()]);
    // const newStudentNoRepresententant = {
    //   schoolarshipCi: objectData.schoolId,
    //   nativeCi: objectData.nativeCi || undefined,
    //   name: objectData.name,
    //   lastName: objectData.lastName,
    //   address: objectData.address,
    //   birthDate: objectData.birthDate,
    //   gender: objectData.gender,
    //   admissionDate: objectData.admissionDate,
    //   birthPlace: objectData.birthPlace,
    //   houseProperty: objectData.houseProperty,
    //   representantCi: representant?.ci,
    //   gradeId: objectData.grade,
    // };

    const editStudent = {
      schoolarshipCi: objectData.schoolarshipCi,
      nativeCi: objectData.nativeCi || null,
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

    // if (representant !== null) {
    //   addNewStudent = newStudentNoRepresententant;
    // } else {
    //   addNewStudent = newStudent;
    // }

    console.log(editStudent);
    axios
      .patch(
        endPoints.students.updateStudent(editedStudent.schoolarshipCi),
        editStudent,
        config
      )
      .then(() => {
        router.reload();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Se ha actualizado exitosamente el estudiante",
          showConfirmButton: false,
          timer: 5000,
        });
        // fetchStudent();
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

          {state.loading ? (
            <Loading />
          ) : (
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
                              defaultValue={editedStudent.name}
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
                              defaultValue={editedStudent.lastName}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                          <div className="form-group">
                            <label className="form-label">
                              Cedula de Identidad Escolar
                            </label>
                            <input
                              type="text"
                              name="schoolarshipCi"
                              className="form-control disabled"
                              defaultValue={editedStudent.schoolarshipCi}
                              disabled
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
                              defaultValue={editedStudent.nativeCi || null}
                              placeholder={
                                editedStudent.nativeCi === null && "No tiene"
                              }
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
                              defaultValue={editedStudent.address}
                            ></textarea>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                          <div className="form-group">
                            <label className="form-label">
                              Fecha de Ingreso
                            </label>
                            <input
                              type="date"
                              name="admissionDate"
                              className="datepicker-default form-control"
                              id="datepicker"
                              defaultValue={editedStudent.admissionDate}
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
                              defaultValue={editedStudent.birthDate}
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
                              defaultValue={editedStudent.birthPlace}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                          <div className="form-group">
                            <label className="form-label">Grado</label>
                            <select
                              name="grade"
                              className="form-control"
                              defaultValue={editedStudent.gradeId}
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
                            <label className="form-label">Sexo</label>
                            <select
                              name="gender"
                              className="form-control"
                              defaultValue={editedStudent.gender}
                            >
                              <option value="Masculino">Masculino</option>
                              <option value="Femenino">Femenino</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12">
                          <div className="form-group">
                            <label className="form-label">
                              Condición de la vivienda
                            </label>
                            <input
                              type="text"
                              name="houseProperty"
                              className="form-control"
                              defaultValue={editedStudent.houseProperty}
                            />
                          </div>
                        </div>

                        <div className="card-header col-lg-6 col-md-6 col-sm-12 mb-4">
                          <h4 className="text-primary">
                            Información del Representante
                          </h4>
                        </div>
                        <div className="card-header col-lg-6 col-md-6 col-sm-12 mb-4">
                          {!student?.representant && (
                            <a
                              className="btn btn-primary"
                              data-bs-toggle="modal"
                              data-bs-target={`#searchRepresentant`}
                            >
                              Buscar Representante
                            </a>
                          )}
                          {!representant && student?.representant && (
                            <a
                              className="btn btn-primary"
                              data-bs-toggle="modal"
                              data-bs-target={`#editRepresentant`}
                            >
                              Editar Representante
                            </a>
                          )}

                          <EditRepresentantModal
                            representant={editedStudent?.representant}
                            editedStudent={setEditedStudent}
                            fetchData={fetchStudent}
                          />
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
                              className={`form-control  disabled
                            `}
                              disabled
                              defaultValue={
                                representant !== null
                                  ? representant?.repName
                                  : editedStudent.representant?.repName
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
                              className={`form-control  disabled
                            `}
                              disabled
                              defaultValue={
                                representant !== null
                                  ? representant?.repLastName
                                  : editedStudent.representant?.repLastName
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
                              className={`form-control  disabled
                            `}
                              disabled
                              defaultValue={
                                representant !== null
                                  ? representant?.ci
                                  : editedStudent.representant?.ci
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
                              className={`form-control  disabled
                            `}
                              disabled
                              defaultValue={
                                representant !== null
                                  ? representant?.phone
                                  : editedStudent.representant?.phone
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
                              className={`form-control  disabled
                            `}
                              disabled
                              defaultValue={
                                representant !== null
                                  ? representant?.email
                                  : editedStudent.representant?.email
                              }
                            />
                          </div>
                        </div>

                        <div className="col-lg-12 col-md-12 col-sm-12">
                          <button type="submit" className="btn btn-primary">
                            Guardar
                          </button>
                          {/* <button
                            type="button"
                            className="btn btn-warning ml-2 text-white"
                          >
                            Cancelar
                          </button> */}
                          <Link
                            href={`/admin/estudiantes/perfil/${student.schoolarshipCi}`}
                          >
                            <a
                              type="button"
                              className="btn btn-warning ml-2 text-white"
                            >
                              Ir al Perfil
                            </a>
                          </Link>
                          <button
                            type="button"
                            data-bs-toggle="modal"
                            data-bs-target={`#record-${editedStudent.schoolarshipCi}`}
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
          )}
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
