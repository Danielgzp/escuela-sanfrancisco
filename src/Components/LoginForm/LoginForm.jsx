import React, { useRef, useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from "hooks/useAuth";

import axios from "axios";
import Cookies from "js-cookie";
import Swal from "sweetalert2";

import styles from "./styles";

const LoginForm = () => {
  const formRef = useRef(null);
  const router = useRouter();
  const auth = useAuth();
  const [state, setState] = useState({
    loading: false,
    error: null,
  });

  const submitHandler = (event) => {
    event.preventDefault();
    setState({ loading: true, error: null });
    const formData = new FormData(formRef.current);
    const loginUser = Object.fromEntries([...formData.entries()]);

    auth
      .signIn(loginUser)
      .then(() => {
        router.push("/");
        setState({ loading: false, error: null });
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Loggin Successfull",
          showConfirmButton: false,
          timer: 2500,
        });
      })
      .catch((err) => {
        if (err.response?.status === 401) {
          setState({ loading: false, error: err });
          Swal.fire({
            icon: "error",
            title: "Oops...",
            // text: error.message,
            text: "Correo o Contraseña incorrectos",
          });
        } else if (err.request) {
          setState({ loading: false, error: err });
          Swal.fire({
            icon: "error",
            text: "Ha ocurrido algún problema",
          });
        } else {
          setState({ loading: false, error: err });
          Swal.fire({
            icon: "error",
            text: "No se ha podido conectar con el servidor, comprueba tu internet",
          });
        }
        setState({ loading: false });
      });
    /*axios
      .post("http://localhost:3000/api/v1/auth/login", loginUser)
      .then((resp) => {
        const token = resp.data.token;
        Cookies.set("tokenJWT", token, { expires: 5 });
        axios.defaults.headers.Authorization = `Bearer ${token}`;
        console.log(resp.data);
        console.log(token);
        // window.localStorage.setItem("loggedNoteAppUser", resp.data.token);

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

      */
  };

  if (state.loading) {
    return <h1>Login you in</h1>;
  }

  return (
    <>
      <section className="login-background">
        <div className="login">
          <div className="login-container">
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
                <button type="submit" className="sesion-button">
                  Iniciar Sesion{" "}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <style jsx>{styles}</style>
    </>
  );
};

export default LoginForm;
