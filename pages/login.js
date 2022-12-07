import styles from "../styles/Login.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

function Login() {
  return (
    <>
      <Navbar></Navbar>
      <div className={styles.login_form}>
        <form>
          <h1>Login</h1>
          <div className={styles.content}>
            <div className={styles.input_field}>
              <input type="email" placeholder="Email" autocomplete="nope" />
            </div>
            <div className={styles.input_field}>
              <input
                type="password"
                placeholder="Password"
                autocomplete="new-password"
              />
            </div>
            <a href="#" className={styles.link}>
              Forgot Your Password?
            </a>
          </div>
          <div className={styles.action}>
            <Link href="/signup">
              <button>Register</button>
            </Link>
            <button>Sign in</button>
            <Link href="/login"></Link>
          </div>
        </form>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Login;
