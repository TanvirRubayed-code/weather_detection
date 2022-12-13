import styles from "../styles/Register.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

function Register() {

  const hangleSignUpSubmit = (event) => {
    event.preventDefault();

    const data = {
      username: event.target.username.value,
      email: event.target.email.value,
      password: event.target.password.value,
      confirm_password: event.target.confirm_password.value
    };

    fetch("http://localhost/server/register.php", {
      // URL
      body: JSON.stringify(data), // data you send.
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      headers: {
        "content-type": "application/json",
      },
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "no-cors", // no-cors, cors, *same-origin
      redirect: "follow", // *manual, follow, error
      referrer: "no-referrer", // *client, no-referrer
    })
    // .then(res => res.json())
    // .then(data => userLogin(data))





  };

  return (
    <>
      <Navbar></Navbar>
      <div className={styles.register_form}>
        <form onSubmit={hangleSignUpSubmit}>
          <h1>Register</h1>
          <div className={styles.content}>
            <div className={styles.input_field}>
              <input id='username' placeholder="Username" />
            </div>

            <div className={styles.input_field}>
              <input id="email" type="email" placeholder="E-mail" />
            </div>

            <div className={styles.input_field}>
              <input
                id="password"
                type="password"
                placeholder="Password"

              />
            </div>

            <div className={styles.input_field}>
              <input
                id="confirm_password"
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
      <Footer></Footer>
    </>
  );
}

export default Register;
