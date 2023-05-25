import { useContext } from "react";
import Home from "./components/home/Home";
import AuthContext from "./contexts/authContext/auth-context";

import "./App.css";
import Login from "./components/login/login";

function App() {
  const authCtx = useContext(AuthContext);
  return (
    <>
      {authCtx.isLoggedIn && <Home />}
      {!authCtx.isLoggedIn && <Login />}
    </>
  );
}

export default App;
