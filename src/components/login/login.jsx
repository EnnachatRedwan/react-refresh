import { useContext } from "react";
import Card from "../../UI/Card";
import Button from "../../UI/Button";
import AuthContext from "../../contexts/authContext/auth-context";

import styles from "./login.module.css";

const Login = (props) => {
  const authCtx=useContext(AuthContext);
  return (
    <form className={styles["form"]} action="POST">
      <Card className={styles["card"]}>
        <div className={styles["controls"]}>
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" />
          <label htmlFor="pass">Password:</label>
          <input type="password" id="pass" />
        </div>
        <Button onClick={authCtx.login}>Login</Button>
      </Card>
    </form>
  );
};

export default Login;
