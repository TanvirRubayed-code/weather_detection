import styles from "../styles/Login.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import axios from "axios";
import { useRouter } from 'next/router';
import { useState } from "react"

const Login = () => {
  const router = useRouter();
  const [noUser, setNoUser] = useState();

  const handleUserName = (e) => {
    const typedUserName = e.target.value;

    if (noUser) {
      e.target.style.border = "0.5px solid red";
      e.target.style.outline = "0px solid red";
    }
  }

  const handleLoginData = (e) => {
    e.preventDefault();
    const inputs = document.getElementsByTagName('input')

    let login_info = {};

    for (const input of inputs) {
      const input_name = input.name;
      const input_value = input.value;

      if (input_value == "") {
        alert(input_name + " is empty");
        return;
      }

      login_info[input_name] = input_value;
    }

    axios.get(`http://localhost:4000/user_login/${login_info.userName}`)
      .then(res => {
        if (res.data != null) {
          setNoUser(false);
          if (res.data.password == login_info.password) {
            alert("Logged in successfully")
            // router.push("./")
          }
          else {
            alert("Password doesn't match")
          }
        } else {
          alert("No such user")
          setNoUser(true);
        }
      });
  }


  return (
    <>
      <div className={styles.login_form}>
        <form onSubmit={handleLoginData}>
          <h1>Login</h1>
          <div className={styles.content}>
            <div className={styles.input_field}>
              <input id="username" name="userName" type="text" placeholder="username" onSubmit={handleUserName} />
            </div>
            <div className={styles.input_field}>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="password"
                autoComplete="off"
              />
            </div>
            <a href="#" className={styles.link}>
              Forgot Your Password?
            </a>
          </div>
          <div className={styles.action}>
            <Link className={styles.action_button} href="/signup">
              <button>Register</button>
            </Link>

            <button type="submit" className={styles.login_button}>
              Sign in
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
