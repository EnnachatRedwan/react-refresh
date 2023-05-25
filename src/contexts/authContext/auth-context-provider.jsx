import { useState } from "react";
import AuthContext from "./auth-context";

const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setIsLoggedIn(true);
    localStorage.setItem("IS_LOGGED_IN", "1");
  };

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.setItem("IS_LOGGED_IN", "0");
  };

  return (
    <AuthContext.Provider
      value={{ email: "", password: "", isLoggedIn, login, logout }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
