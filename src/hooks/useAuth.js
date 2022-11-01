import { createContext, useContext, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import endPoints from "utils/endpoints";

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

  const signIn = async (email, password) => {
    const options = {
      headers: {
        accept: "*/*",
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      endPoints.auth.login,
      { email, password },
      options
    );

    console.log(data);
    if (data) {
      const token = data.token;
      const userData = data.user;
      Cookies.set("tokenJWT", token, { expires: 5 });

      axios.defaults.headers.Authorization = `Bearer ${token}`;
      console.log(axios.defaults.headers.Authorization);
      
      console.log(userData);
      setUser(userData);
    }
  };

  const logout = () => {
    Cookies.remove("tokenJWT");
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
