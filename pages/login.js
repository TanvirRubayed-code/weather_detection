import styles from "../styles/Login.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

function Login() {

  const userLogin = (data) => {
    if (data == 1) {
      prompt("Wrong username or password.")
    }
    else if (data[0].username.length > 0) {
      const userEmail = data[0].email;
      prompt("User successfully logged In.", "Your email address: " + userEmail);
    }
  }

  const hangleSignUpSubmit = (event) => {
    event.preventDefault();

    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    };

    fetch("http://localhost/server/login.php", {
      // URL
      body: JSON.stringify(data), // data you send.
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      headers: {
        "content-type": "application/json",
      },
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, cors, *same-origin
      redirect: "follow", // *manual, follow, error
      referrer: "no-referrer", // *client, no-referrer
    })
      .then(res => res.json())
      .then(data => userLogin(data))


  }


  return (
    <>
      <Navbar></Navbar>
      <div className={styles.login_form}>
        <form onSubmit={hangleSignUpSubmit}>
          <h1>Login</h1>
          <div className={styles.content}>
            <div className={styles.input_field}>
              <input id="username" type="text" placeholder="Username" />
            </div>
            <div className={styles.input_field}>
              <input
                id="password"
                type="password"
                placeholder="Password"
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
      <Footer></Footer>
    </>
  );
}

export default Login;
