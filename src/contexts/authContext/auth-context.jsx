import React from "react";

const AuthContext = React.createContext({
  email: "",
  password: "",
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

export default AuthContext;
