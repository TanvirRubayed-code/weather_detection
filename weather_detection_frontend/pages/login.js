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
  const [showSpinner, setShowSpinner] = useState(false);


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
    setShowSpinner(true);
    const inputs = document.getElementsByTagName('input')

    let login_info = {};

    for (const input of inputs) {
      const input_name = input.name;
      const input_value = input.value;

      login_info[input_name] = input_value;


    }

    if (login_info.userName == "" || login_info.password == "") {
      setShowAlert(true);
    }
    else {
      setShowAlert(false);

      axios.get(`http://localhost:4000/user_login/${login_info.userName}`)
        .then(res => {
          setShowSpinner(false);
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

  }


  return (
    <>
      <div className={styles.login_form}>
        <form onSubmit={handleLoginData}>
          <h1>Login</h1>
          {
            showSpinner == true && showAlert != true && <div class="text-center mt-6">
              <div role="status">
                <svg aria-hidden="true" class="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                </svg>
                <span class="sr-only">Loading...</span>
              </div>
            </div>
          }
          <div className={styles.content}>
            {
              showAlert == true ? <div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                <span class="font-medium">Complete all the feilds!</span>
              </div> : <div></div>
            }
            {
              passUnmathced == true ? <div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                <span class="font-medium">Username or Password doesn't match!</span>
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
              <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-600 dark:text-gray-300">Remember me!</label>
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
