import React, { useRef, useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from "hooks/useAuth";

import axios from "axios";
import Cookies from "js-cookie";
import Swal from "sweetalert2";

import styles from "./styles";
import LoginLoader from "Components/Loaders/LoginLoader";
import Loading from "Components/Loaders/Loading";
import Link from "next/link";

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

    console.log(loginUser);
    auth
      .signIn(loginUser)
      .then(() => {
        setState({ loading: false, error: null });
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Inicio de sesión exitoso",
          showConfirmButton: false,
          timer: 1500,
        });
        router.push("/admin");
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
            text: "Correo o Contraseña incorrectos",
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
                <i className="zmdi zmdi-account-circle zmdi-hc-2x"></i>
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
                  placeholder="Correo Electrónico"
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
                  placeholder="Contraseña"
                />
              </div>
              <div className="form-group left-align forgotPassword">
                <Link href="/recovery">
                  <a>Olvidaste tú contraseña?</a>
                </Link>
              </div>
              <div className="form-group center-align">
                <button type="submit" className="sesion-button">
                  Iniciar Sesion{" "}
                </button>
              </div>
              <div className="form-group center-align">
                {state.loading && (
                  <LoginLoader
                    color={"#fff"}
                    containerHeight={"30px"}
                    containerWidth={"30px"}
                    border={"4px"}
                    spinnerHeigth={"50px"}
                    spinnerWidth={"50px"}
                    top={"25px"}
                    left={"25px"}
                  />
                )}
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
