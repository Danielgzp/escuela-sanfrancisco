import React, { useRef, useState } from "react";
import { useRouter } from "next/router";

import axios from "axios";
import Swal from "sweetalert2";

// import "./styles.css";

const LoginForm = () => {
  const formRef = useRef(null);
  const router = useRouter();
  const [state, setState] = useState({
    loading: false,
    error: null,
  });

  const submitHandler = (event) => {
    event.preventDefault();
    setState({ loading: true, error: null });
    const formData = new FormData(formRef.current);
    const loginUser = Object.fromEntries([...formData.entries()]);
    console.log(loginUser);

    axios
      .post("http://localhost:3000/api/v1/auth/login", loginUser)
      .then((resp) => {
        console.log(resp);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Loggin Successfull",
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
          // text: error.message,
          text: "Correo o Contraseña incorrectos",
        });
        console.log(error);
        setState({ loading: false, error: null });
      });
    // auth
    //   .signIn(email, password)
    //   .then(() => {
    //     router.push("/dashboard");
    //     setState({ loading: false, error: null });
    //     Swal.fire("Login Success !!!");
    //   })
    //   .catch((err) => {
    //     if (err.response?.status === 401) {
    //       setState({ loading: false, error: err });
    //       Swal.fire({
    //         icon: "error",
    //         text: "Password o Contrasenia incorrecta",
    //       });
    //     } else if (err.request) {
    //       setState({ loading: false, error: err });
    //       Swal.fire({
    //         icon: "error",
    //         text: "Ha ocurrido algún problema",
    //       });
    //     } else {
    //       setState({ loading: false, error: err });
    //       Swal.fire({
    //         icon: "error",
    //         text: "No se ha podido conectar con el servidor, comprueba tu internet",
    //       });
    //     }
    //     setState({ loading: false });
    //   });
  };

  if (state.loading) {
    return <h1>Login you in</h1>;
  }

  return (
    <section className="login-background">
      <form
        autoComplete="off"
        className="full-box logInForm"
        onSubmit={submitHandler}
        ref={formRef}
        id="user-form"
      >
        <p className="center-align text-muted">
          <i className="zmdi zmdi-account-circle zmdi-hc-5x"></i>
        </p>
        <h2 className="center-align">Inicia sesión con tu cuenta</h2>
        <div className="form-group label-floating">
          <p className="help-block">Correo</p>
          <input
            className="form-control"
            id="user-email"
            type="email"
            name="email"
            required
            placeholder="Email address"
          />
        </div>
        <div className="form-group label-floating">
          <p className="help-block">Contraseña</p>
          <input
            className="form-control"
            id="user-password"
            type="password"
            name="password"
            required
            placeholder="Password"
          />
        </div>
        <div className="form-group center-align">
          <button
            type="submit"
            value="Iniciar sesión"
            className="btn red btn-raised btn-danger"
          />
        </div>
      </form>
    </section>
  );
};

export default LoginForm;
