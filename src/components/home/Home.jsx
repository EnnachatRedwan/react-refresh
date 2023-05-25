import styles from "./Home.module.css";
import NavBar from "../navbar/NavBar";
import Button from "../../UI/Button";
import { useContext } from "react";
import AuthContext from "../../contexts/authContext/auth-context";

const Home = (props) => {
  const authCtx=useContext(AuthContext)
  return (
    <>
      <NavBar />
      <main className={styles["main"]}>
        <h1>Comming soon</h1>
        <Button onClick={authCtx.logout}>Logout</Button>
      </main>
    </>
  );
};

export default Home;
