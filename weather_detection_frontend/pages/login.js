import styles from "../styles/Login.module.css";
import Link from "next/link";
import axios from "axios";
import { useRouter } from 'next/router';

import { useEffect, useState } from "react"

const Login = () => {
  const router = useRouter();
  const [noUser, setNoUser] = useState();
  const [showAlert, setShowAlert] = useState(false);
  const [passUnmathced, setPassUnmatched] = useState(false);
  const [savepassFlag, setSavePassFlag] = useState(false);


  useEffect(() => {
    const localuserId = localStorage.getItem("userid");
    if (localuserId) {
      sessionStorage.setItem("userid", localuserId);
    }
    const item = sessionStorage.getItem('userid')
    if (localuserId || item) {
      router.push('/')
    }
  }, [])


  const handleUserName = (e) => {
    const typedUserName = e.target.value;

    if (noUser) {
      e.target.style.border = "0.5px solid red";
      e.target.style.outline = "0px solid red";
    }
  }

  const handleCheckbox = (e) => {
    setSavePassFlag(e.target.checked);
  }


  const handleLoginData = (e) => {
    e.preventDefault();
    const inputs = document.getElementsByTagName('input')

    let login_info = {};

    for (const input of inputs) {
      const input_name = input.name;
      const input_value = input.value;

      login_info[input_name] = input_value;


    }


    axios.get(`http://localhost:4000/user_login/${login_info.userName}`)
      .then(res => {
        if (res.data != null) {
          setNoUser(false);
          if (res.data.password == login_info.password) {
            alert("Logged in successfully")
            router.push("./")
          }
          else {
            alert("Password doesn't match")
          }
        } else {
          alert("No such user")
          setNoUser(true);
        }
      });

    if (login_info.userName == "" || login_info.password == "") {
      setShowAlert(true);
    }
    else {
      setShowAlert(false);

      axios.get(`http://localhost:4000/user_login/${login_info.userName}`)
        .then(res => {
          if (res.data != null) {
            setNoUser(false);
            if (res.data.password == login_info.password) {
              setPassUnmatched(false);
              window.location.reload(true);
              sessionStorage.setItem("userid", res.data._id);
              if (savepassFlag) {
                localStorage.setItem("userid", res.data._id);
              }
            }
            else {
              setPassUnmatched(true);
            }
          } else {
            setNoUser(true);
          }
        });
    }





    axios.get(`http://localhost:4000/user_login/${login_info.userName}`)
      .then(res => {
        if (res.data != null) {
          setNoUser(false);
          if (res.data.password == login_info.password) {
            alert("Logged in successfully")
            router.push("./")
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
            {
              showAlert == true ? <div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                <span class="font-medium">Complete all the feilds!</span>
              </div> : <div></div>
            }
            {
              passUnmathced == true ? <div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                <span class="font-medium">Password doesn't match!</span>
              </div> : <div></div>
            }

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
            <div class="flex items-center mt-2 mb-4">
              <input onClick={handleCheckbox} id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
              <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-600 dark:text-gray-300">Save password</label>
            </div>
          </div>
          <div className={styles.action}>
            <Link className={styles.action_button} href="/signup">
              <button>Singup</button>
            </Link>

            <button type="submit" className={styles.login_button}>
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
