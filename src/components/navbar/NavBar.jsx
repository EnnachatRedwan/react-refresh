import AuthContext from "../../contexts/authContext/auth-context";
import styles from "./NavBar.module.css";

import Button from "../../UI/Button";
import { useContext } from "react";

const NavBar = (props) => {
  const authCtx=useContext(AuthContext);
  return (
    <header className={styles["navbar"]}>
      <h1>En React Refresh</h1>
      <nav>
        <a href="#">Admin</a>
        <a href="#">Products</a>
        <Button onClick={authCtx.logout}>Logout</Button>
      </nav>
    </header>
  );
};

export default NavBar;
