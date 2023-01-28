import styles from "../styles/Register.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import axios from 'axios'
import { useState } from "react";
import { useRouter } from 'next/router';

const Register = () => {
  const router = useRouter();
  const [userNameUsed, setUserNameUsed] = useState(true);

  const handleUserName = (e) => {
    const userName = e.target.value;
    axios.get(`http://localhost:4000/users/${userName}`)
      .then(res => {
        setUserNameUsed(res.data)
        if (res.data) {
          alert("Username already exists")
        }
      });
  };

  const hangleSignUpData = (e) => {
    e.preventDefault();

    const inputs = document.getElementsByTagName("input");

    let info = {};

    for (const input of inputs) {
      const input_name = input.name;
      const input_value = input.value;

      if (input_value == "") {
        alert(input_name + " is empty");
        return;
      }

      info[input_name] = input_value;
    }

    if(userNameUsed) {
      alert("Username already exists")
      return;
    }

    if (info.password != info.confirmPassword) {
      alert("Passwords aren't matched")
      return;
    }

    const finalValue = {
      userName: info.userName,
      email: info.email,
      password: info.password
    };
    axios.post(`http://localhost:4000/users`, finalValue)
      .then(res => {
        if (res.data.insertedId) {
          alert("Signed up successfully");
          router.push("./login")
        }
      })
  };



  return (
    <>
      <div className={styles.register_form}>
        <form onSubmit={hangleSignUpData}>
          <h1>Register</h1>
          <div className={styles.content}>
            <div className={styles.input_field}>
              <input id='username' name="userName" onBlur={handleUserName} placeholder="Username" />
            </div>

            <div className={styles.input_field}>
              <input id="email" name="email" type="email" placeholder="E-mail" />
            </div>

            <div className={styles.input_field}>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Password"

              />
            </div>

            <div className={styles.input_field}>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="Confirm password"

              />
            </div>

            <div className={styles.container_signin}>
              <h5>
                Already have an account?{" "}
                <Link className={styles.login_text} href="/login">
                  Log in
                </Link>
                .
              </h5>
            </div>

            <div className={styles.legacy}>
              <p>
                {" "}
                <input type="checkbox"></input> By creating an account you agree
                to our <a href="#">Terms & Privacy</a>.
              </p>
            </div>
          </div>
          <div className={styles.action}>
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
    </>
  );

};
export default Register;
