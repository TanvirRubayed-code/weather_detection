import styles from "../styles/Register.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

function Register() {
  return (
    <>
      <Navbar></Navbar>
      <div className={styles.register_form}>
        <form>
          <h1>Register</h1>
          <div className={styles.content}>
            <div className={styles.input_field}>
              <input type="email" placeholder="Username" autocomplete="nope" />
            </div>

            <div className={styles.input_field}>
              <input type="email" placeholder="E-mail" autocomplete="nope" />
            </div>

            <div className={styles.input_field}>
              <input
                type="password"
                placeholder="Password"
                autocomplete="new-password"
              />
            </div>

            <div className={styles.input_field}>
              <input
                type="password"
                placeholder="Confirm password"
                autocomplete="new-password"
              />
            </div>

            <div class={styles.container_signin}>
              <h5>
                Already have an account?{" "}
                <Link className={styles.login_text} href="/login">
                  Log in
                </Link>
                .
              </h5>
            </div>

            <div class={styles.legacy}>
              <p>
                {" "}
                <input type="checkbox"></input> By creating an account you agree
                to our <a href="#">Terms & Privacy</a>.
              </p>
            </div>
          </div>
          <div className={styles.action}>
            <button>Register</button>
          </div>
        </form>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Register;
