import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";
import { loadScripts } from "utils/loadScripts";
import endPoints from "utils/endpoints";
const boom = require("@hapi/boom");

// import "../../../public/vendor/pickadate/themes/default.date.module.css";
// import styles from "../../../public/vendor/pickadate/themes/default.module.css";

const AddStudent = ({ data }) => {
  const { grades } = data;

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
    const newStudent = {
      name: objectData.name,
      lastName: objectData.lastName,
      address: objectData.address,
      // birthDate: objectData.birthDate,
      gender: objectData.gender,
      // admissionDate: objectData.admissionDate,
      birthPlace: objectData.birthPlace,
      houseProperty: objectData.houseProperty,
      representant: {
        repName: objectData.repName,
        repLastName: objectData.repLastName,
        email: objectData.email,
        phone: objectData.phone,
      },
      gradeId: objectData.grade,
    };

    setState({ loading: true, error: null });
    console.log(newStudent);
    axios
      .post(endPoints.students.addStudent, newStudent)
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Se ha agregado exitosamente el estudiante",
          showConfirmButton: false,
          timer: 1500,
        });
        setState({ loading: false, error: null });
        router.push("/");
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
    const script2 = document.createElement("script");
    const script3 = document.createElement("script");
    const script4 = document.createElement("script");
    const script5 = document.createElement("script");

    script5.src = "/js/dlabnav-init.js";
    script5.async = false;
    document.body.appendChild(script5);

    script.src = "/vendor/pickadate/picker.js";
    script.async = false;
    document.body.appendChild(script);
    script2.src = "/vendor/pickadate/picker.time.js";
    script2.async = false;
    document.body.appendChild(script2);
    script3.src = "/vendor/pickadate/picker.date.js";
    script3.async = false;
    document.body.appendChild(script3);
    script4.src = "/js/plugins-init/pickadate-init.js";
    script4.async = false;
    document.body.appendChild(script4);

    // getGrades();
  }, []);

  return (
    <>
      {/* <ContentBody /> */}
      <div className="content-body">
        <div className="container-fluid">
          <div className="row page-titles mx-0">
            <div className="col-sm-6 p-md-0">
              <div className="welcome-text">
                <h4>Añadir Estudiante</h4>
              </div>
            </div>
            <div className="col-sm-6 p-md-0 justify-content-sm-end mt-2 mt-sm-0 d-flex">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="index.html">Home</a>
                </li>
                <li className="breadcrumb-item active">
                  <a href="#!">Students</a>
                </li>
                <li className="breadcrumb-item active">
                  <a href="#!">Add Student</a>
                </li>
              </ol>
            </div>
          </div>

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
                          />
                        </div>
                      </div>
                      <div class="col-lg-6 col-md-6 col-sm-12">
                        <div class="form-group">
                          <label class="form-label">Direccion</label>
                          <textarea
                            name="address"
                            class="form-control"
                            rows="5"
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="form-group">
                          <label className="form-label">Fecha de Ingreso</label>
                          <input
                            name="admissionDate"
                            className="datepicker-default form-control"
                            id="datepicker"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="form-group">
                          <label className="form-label">
                            Fecha de nacimiento
                          </label>
                          <input
                            name="birthDate"
                            className="datepicker-default form-control"
                            id="datepicker"
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
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="form-group">
                          <label className="form-label">Grado</label>
                          <select name="grade" className="form-control">
                            <option value="">Grado</option>
                            {grades.map((grade) => (
                              <option
                                key={grade.id}
                                value={`${grade.name} ${grade.section}`}
                              >{`${grade.name} ${grade.section}`}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="form-group">
                          <label className="form-label">Género</label>
                          <select name="gender" className="form-control">
                            <option value="Gender">Género</option>
                            <option value="Male">Masculino</option>
                            <option value="Female">Femenino</option>
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
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="form-group">
                          <label className="form-label">
                            Nombre del Representante
                          </label>
                          <input
                            type="text"
                            name="repName"
                            className="form-control"
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
                          />
                          {/* <input
                            name="datepicker"
                            className="datepicker-default form-control"
                            id="datepicker1"
                          /> */}
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="form-group">
                          <label className="form-label">Email</label>
                          <input
                            type="email"
                            name="email"
                            className="form-control"
                          />
                        </div>
                      </div>

                      <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="form-group fallback w-100">
                          <input
                            type="file"
                            name=""
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
                          Cencel
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

export default AddStudent;

export async function getServerSideProps() {
  try {
    const response = await axios.get(endPoints.grades.getAllGrades);
    const grades = await JSON.parse(JSON.stringify(response.data));

    return {
      props: { data: { grades } },
    };
  } catch (error) {
    throw boom.badData(`${error.message}`);
  }
}
/*******************************************************************************/
/*******************************************************************************/
/*******************************************************************************/

// import ContentBody from "NewComponents/ContentBody.jsx";
// import Menu from "NewComponents/Menu";
// import NavHeader from "NewComponents/NavHeader";
// import NewFooter from "NewComponents/NewFooter";
// import NewHeader from "NewComponents/NewHeader";
// import PreLoader from "NewComponents/PreLoader";

// import React, { useEffect, useState } from "react";

// // import "../../../public/vendor/pickadate/themes/default.date.module.css";
// // import styles from "../../../public/vendor/pickadate/themes/default.module.css";

// const AddStudent = () => {
//   useEffect(() => {
//     const script = document.createElement("script");
//     const script2 = document.createElement("script");
//     const script3 = document.createElement("script");
//     const script4 = document.createElement("script");
//     const script5 = document.createElement("script");
//     const script6 = document.createElement("script");
//     const script7 = document.createElement("script");
//     const script8 = document.createElement("script");
//     const script9 = document.createElement("script");
//     const script10 = document.createElement("script");
//     const script11 = document.createElement("script");
//     const script12 = document.createElement("script");
//     const script13 = document.createElement("script");
//     const script14 = document.createElement("script");
//     const script15 = document.createElement("script");
//     const script16 = document.createElement("script");

//     script.src = "/vendor/global/global.min.js";
//     script.async = false;
//     document.body.appendChild(script);
//     script2.src = "/vendor/bootstrap-select/dist/js/bootstrap-select.min.js";
//     script2.async = false;
//     document.body.appendChild(script2);
//     script3.src = "/js/custom.min.js";
//     script3.async = false;
//     document.body.appendChild(script3);
//     script4.src = "/vendor/raphael/raphael.min.js";
//     script4.async = false;
//     document.body.appendChild(script4);
//     script5.src = "/vendor/morris/morris.min.js";
//     script5.async = false;
//     document.body.appendChild(script5);
//     script6.src = "/vendor/peity/jquery.peity.min.js";
//     script6.async = false;
//     document.body.appendChild(script6);
//     script7.src = "/js/dashboard/dashboard-2.js";
//     script7.async = false;
//     document.body.appendChild(script7);
//     script8.src = "/vendor/svganimation/vivus.min.js";
//     script8.async = false;
//     document.body.appendChild(script8);
//     script9.src = "/vendor/svganimation/svg.animation.js";
//     script9.async = false;
//     document.body.appendChild(script9);

//     script11.src = "/vendor/pickadate/picker.js";
//     script11.async = false;
//     document.body.appendChild(script11);
//     script12.src = "/vendor/pickadate/picker.time.js";
//     script12.async = false;
//     document.body.appendChild(script12);
//     script13.src = "/vendor/pickadate/picker.date.js";
//     script13.async = false;
//     document.body.appendChild(script13);
//     script14.src = "/js/plugins-init/pickadate-init.js";
//     script14.async = false;
//     document.body.appendChild(script14);
//     script15.src = "/js/dlabnav-init.js";
//     script15.async = false;
//     document.body.appendChild(script15);
//     script16.src = "/js/styleSwitcher.js";
//     script16.async = false;
//     document.body.appendChild(script16);
//   }, []);

//   return (
//     <>
//       <PreLoader />
//       <div id="main-wrapper">
//         <NavHeader />
//         <NewHeader />
//         <Menu />
//         {/* <ContentBody /> */}
//         <div className="content-body">
//           <div className="container-fluid">
//             <div className="row page-titles mx-0">
//               <div className="col-sm-6 p-md-0">
//                 <div className="welcome-text">
//                   <h4>Add Student</h4>
//                 </div>
//               </div>
//               <div className="col-sm-6 p-md-0 justify-content-sm-end mt-2 mt-sm-0 d-flex">
//                 <ol className="breadcrumb">
//                   <li className="breadcrumb-item">
//                     <a href="index.html">Home</a>
//                   </li>
//                   <li className="breadcrumb-item active">
//                     <a href="#!">Students</a>
//                   </li>
//                   <li className="breadcrumb-item active">
//                     <a href="#!">Add Student</a>
//                   </li>
//                 </ol>
//               </div>
//             </div>

//             <div className="row">
//               <div className="col-xl-12 col-xxl-12 col-sm-12">
//                 <div className="card">
//                   <div className="card-header">
//                     <h5 className="card-title">Basic Info</h5>
//                   </div>
//                   <div className="card-body">
//                     <form action="#" method="post">
//                       <div className="row">
//                         <div className="col-lg-6 col-md-6 col-sm-12">
//                           <div className="form-group">
//                             <label className="form-label">First Name</label>
//                             <input type="text" className="form-control" />
//                           </div>
//                         </div>
//                         <div className="col-lg-6 col-md-6 col-sm-12">
//                           <div className="form-group">
//                             <label className="form-label">Last Name</label>
//                             <input type="text" className="form-control" />
//                           </div>
//                         </div>
//                         <div className="col-lg-6 col-md-6 col-sm-12">
//                           <div className="form-group">
//                             <label className="form-label">Email</label>
//                             <input type="text" className="form-control" />
//                           </div>
//                         </div>
//                         <div className="col-lg-6 col-md-6 col-sm-12">
//                           <div className="form-group">
//                             <label className="form-label">Registration Date</label>
//                             <input
//                               name="datepicker"
//                               className="datepicker-default form-control"
//                               id="datepicker"
//                             />
//                           </div>
//                         </div>
//                         <div className="col-lg-6 col-md-6 col-sm-12">
//                           <div className="form-group">
//                             <label className="form-label">Roll No.</label>
//                             <input type="text" className="form-control" />
//                           </div>
//                         </div>
//                         <div className="col-lg-6 col-md-6 col-sm-12">
//                           <div className="form-group">
//                             <label className="form-label">Class</label>
//                             <select className="form-control">
//                               <option value="Class">Class</option>
//                               <option value="html">HTML</option>
//                               <option value="css">CSS</option>
//                               <option value="javascript">JavaScript</option>
//                               <option value="angular">Angular</option>
//                               <option value="angular">React</option>
//                               <option value="vuejs">Vue.js</option>
//                               <option value="ruby">Ruby</option>
//                               <option value="php">PHP</option>
//                               <option value="asp">ASP.NET</option>
//                               <option value="python">Python</option>
//                               <option value="mysql">MySQL</option>
//                             </select>
//                           </div>
//                         </div>
//                         <div className="col-lg-6 col-md-6 col-sm-12">
//                           <div className="form-group">
//                             <label className="form-label">Gender</label>
//                             <select className="form-control">
//                               <option value="Gender">Gender</option>
//                               <option value="Male">Male</option>
//                               <option value="Female">Female</option>
//                             </select>
//                           </div>
//                         </div>
//                         <div className="col-lg-6 col-md-6 col-sm-12">
//                           <div className="form-group">
//                             <label className="form-label">Mobile Number</label>
//                             <input type="text" className="form-control" />
//                           </div>
//                         </div>
//                         <div className="col-lg-6 col-md-6 col-sm-12">
//                           <div className="form-group">
//                             <label className="form-label">Parents Name</label>
//                             <input type="text" className="form-control" />
//                           </div>
//                         </div>
//                         <div className="col-lg-6 col-md-6 col-sm-12">
//                           <div className="form-group">
//                             <label className="form-label">
//                               Parents Mobile Number
//                             </label>
//                             <input type="text" className="form-control" />
//                           </div>
//                         </div>
//                         <div className="col-lg-6 col-md-6 col-sm-12">
//                           <div className="form-group">
//                             <label className="form-label">Date of Birth</label>
//                             <input
//                               name="datepicker"
//                               className="datepicker-default form-control"
//                               id="datepicker1"
//                             />
//                           </div>
//                         </div>
//                         <div className="col-lg-6 col-md-6 col-sm-12">
//                           <div className="form-group">
//                             <label className="form-label">Blood Group</label>
//                             <input type="text" className="form-control" />
//                           </div>
//                         </div>
//                         <div className="col-lg-12 col-md-12 col-sm-12">
//                           <div className="form-group">
//                             <label className="form-label">Address</label>
//                             <textarea className="form-control" rows="5"></textarea>
//                           </div>
//                         </div>
//                         <div className="col-lg-12 col-md-12 col-sm-12">
//                           <div className="form-group fallback w-100">
//                             <input
//                               type="file"
//                               className="dropify"
//                               data-default-file=""
//                             />
//                           </div>
//                         </div>
//                         <div className="col-lg-12 col-md-12 col-sm-12">
//                           <button type="submit" className="btn btn-primary">
//                             Submit
//                           </button>
//                           <button type="submit" className="btn btn-light">
//                             Cencel
//                           </button>
//                         </div>
//                       </div>
//                     </form>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <NewFooter />
//       </div>
//     </>
//   );
// };

// export default AddStudent;
