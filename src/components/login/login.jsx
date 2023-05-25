import { useContext, useEffect, useRef, useState } from "react";
import Card from "../../UI/Card";
import Button from "../../UI/Button";
import AuthContext from "../../contexts/authContext/auth-context";

import styles from "./login.module.css";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);

  const emailHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  useEffect(() => {
    const checking = setTimeout(() => {
      console.log("checking");
      if (email.includes("@") && password.trim().length >= 8) {
        setBtnDisabled(false);
      } else {
        setBtnDisabled(true);
      }
    }, 500);
    return ()=>clearTimeout(checking);
  }, [email, password]);

  const authCtx = useContext(AuthContext);

  return (
    <form className={styles["form"]} action="POST">
      <Card className={styles["card"]}>
        <div className={styles["controls"]}>
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" onChange={emailHandler} />
          <label htmlFor="pass">Password:</label>
          <input type="password" id="pass" onChange={passwordHandler} />
        </div>
        <Button onClick={authCtx.login} disabled={btnDisabled}>
          Login
        </Button>
      </Card>
    </form>
  );
};

export default Login;
