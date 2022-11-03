import { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import endPoints from "utils/endpoints";

// const { config } = require("../../config/config");

// import endPoints from "services/api";

const AuthContext = createContext();

export function ProviderAuth({ children }) {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  return useContext(AuthContext);
};

function useProvideAuth() {
  const [user, setUser] = useState(null);
  const [state, setState] = useState({
    loading: false,
    error: null,
  });

  const signIn = async (loginForm) => {
    const options = {
      headers: {
        accept: "*/*",
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(endPoints.auth.login, loginForm, options);

    if (data) {
      const token = data.token;
      const userData = data.user;

      Cookies.set("userJWT", token, { expires: 5 });
      Cookies.set("userData", JSON.stringify(userData), { expires: 5 });

      // axios.defaults.headers.Authorization = `Bearer ${token}`;
      setUser(userData);
    }
  };

  const logout = () => {
    Cookies.remove("userJWT");
    Cookies.remove("userData");
    setUser(null);
    delete axios.defaults.headers.Authorization;
    window.location.href = "/login";
  };

  return {
    user,
    signIn,
    logout,
  };
}
