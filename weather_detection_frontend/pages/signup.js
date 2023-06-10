import styles from "../styles/Register.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import axios from 'axios'
import { use, useEffect, useState } from "react";
import { useRouter } from 'next/router';

const Register = () => {
  const router = useRouter();

  const [existingUsers, setExistingUsers] = useState([]);
  const [userNameTyped, setUserNameTyped] = useState("");
  const [phoneNoTyped, setPhoneNoTyped] = useState();
  const [passwordTyped, setPasswordTyped] = useState();
  const [noUserName, setNoUserName] = useState();
  const [userExists, setUserExits] = useState();
  const [invalidEmail, setInvalidEmail] = useState();
  const [invalidPhoneNo, setInvalidPhoneNo] = useState();
  const [weakPassword, setWeakPassword] = useState();
  const [passwordNotMatched, setPasswordNotMatched] = useState();

  useEffect(() => {
    axios.get(`http://localhost:4000/users`).
      then((res) => {
        setExistingUsers(res.data);
      });
  }, []);

  const handleUserName = (e) => {
    const typedUserName = e.target.value;

    for (const user of existingUsers) {
      const userName = user.userName;
      if (userName == typedUserName) {
        setUserExits(true);
        setNoUserName(false);
        e.target.style.border = "0.5px solid red";
        e.target.style.outline = "0px solid red";


      } else if (typedUserName == "") {

        setNoUserName(true);
        setUserExits(false);
        e.target.style.border = "0.5px solid red";
        e.target.style.outline = "0px solid red";
      } else {
        setNoUserName(false);
        setUserExits(false);
        e.target.style.border = "0.5px solid green";
        e.target.style.outline = "0px solid green";
      }
    }
    setUserNameTyped(typedUserName);
  };

  const handleEmail = (e) => {
    const typedEmail = e.target.value;
    const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!emailPattern.test(typedEmail)) {
      setInvalidEmail(true);
      e.target.style.border = "0.5px solid red";
      e.target.style.outline = "0px solid red";

    } else if (typedEmail == "") {

      e.target.style.border = "0.5px solid red";
      e.target.style.outline = "0px solid red";
    } else {
      setInvalidEmail(false)
      e.target.style.border = "0.5px solid green";
      e.target.style.outline = "0px solid green";
    }
  }

  const handlePhoneNo = (e) => {
    const typedPhoneNo = e.target.value;
    const phoneNoPattern = /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/;

    if (!phoneNoPattern.test(typedPhoneNo)) {
      setInvalidPhoneNo(true);
      e.target.style.border = "0.5px solid red";
      e.target.style.outline = "0px solid red";
    } else if (typedPhoneNo == "") {

      e.target.style.border = "0.5px solid red";
      e.target.style.outline = "0px solid red";
    } else {
      setInvalidPhoneNo(false);
      e.target.style.border = "0.5px solid green";
      e.target.style.outline = "0px solid green";
    }
  }

  const handlePassword = (e) => {
    const typedPassword = e.target.value;
    const passwordPattern = /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{5,}$/

    if (!passwordPattern.test(typedPassword)) {
      setWeakPassword(true);
      e.target.style.border = "0.5px solid red";
      e.target.style.outline = "0px solid red";

    } else if (typedPassword == "") {

      e.target.style.border = "0.5px solid red";
      e.target.style.outline = "0px solid red";
    } else {
      setWeakPassword(false);
      e.target.style.border = "0.5px solid green";
      e.target.style.outline = "0px solid green";
    }
    setPasswordTyped(typedPassword);
  }

  const handleConfirmPassword = (e) => {
    const typedConfirmPassword = e.target.value;

    if (passwordTyped != typedConfirmPassword) {
      setPasswordNotMatched(true);
      e.target.style.border = "0.5px solid red";
      e.target.style.outline = "0px solid red";

    } else if (typedConfirmPassword == "") {

      e.target.style.border = "0.5px solid red";
      e.target.style.outline = "0px solid red";
    } else {
      setPasswordNotMatched(false);
      e.target.style.border = "0.5px solid green";
      e.target.style.outline = "0px solid green";
    }

  }

  const hangleSignUpData = (e) => {
    e.preventDefault();


    if (userNameTyped == "") {

      setNoUserName(true);
    } else {
      setNoUserName(false);
    }

    if (invalidEmail != false) {
      setInvalidEmail(true);
    }
    if (invalidPhoneNo != false) {
      setInvalidPhoneNo(true);
    }
    if (weakPassword != false) {
      setWeakPassword(true);
    }
    if (passwordNotMatched != false) {
      setPasswordNotMatched(true);
    }

    if (userExists || invalidEmail || invalidPhoneNo || weakPassword || passwordNotMatched) {
      return;
    }




    const inputs = document.getElementsByTagName("input");

    let info = {};

    for (const input of inputs) {
      const input_name = input.name;
      const input_value = input.value;

      if (input_value == "") {
        //alert(input_name + " is empty");
        return;
      }

      info[input_name] = input_value;
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
          <h1>Sign Up</h1>
          <div className={styles.content}>
            <div className={styles.input_field}>
              <input id='username' name="userName" placeholder="Username" onChange={handleUserName} />
            </div>
            {userExists === true && (
              <div class={styles.errorMessage}>Username Already Used</div>
            )}
            {userExists === false && userNameTyped != "" && (
              <div class={styles.acceptenceMessage}>Username Available</div>
            )}
            {noUserName == true && (
              <div class={styles.errorMessage}>Empty Field</div>
            )}

            <div className={styles.input_field}>
              <input id="email" name="email" type="email" placeholder="E-mail" onChange={handleEmail} />
            </div>
            {invalidEmail === true && (
              <div class={styles.errorMessage}>Invalid Email</div>
            )}
            {invalidEmail === false && (
              <div class={styles.acceptenceMessage}>Valid Email</div>
            )}

            <div className={styles.input_field}>
              <input id="phoneNo" name="email" type="tel" placeholder="Phone No" onChange={handlePhoneNo} />
            </div>
            {invalidPhoneNo === true && (
              <div class={styles.errorMessage}>Invalid Phone Number</div>
            )}
            {invalidPhoneNo === false && (
              <div class={styles.acceptenceMessage}>Valid Phone Number</div>
            )}

            <div className={styles.input_field}>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Password"
                onChange={handlePassword}
              />
            </div>
            {weakPassword === true && (
              <div class={styles.errorMessage}>Please use at least 1 characters and 1 digit. Minimum length 5</div>
            )}
            {weakPassword === false && (
              <div class={styles.acceptenceMessage}>Strong Password</div>
            )}

            <div className={styles.input_field}>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="Confirm password"
                onChange={handleConfirmPassword}
              />
            </div>
            {passwordNotMatched === true && (
              <div class={styles.errorMessage}>Posswords Doesn't Match</div>
            )}

            <div className={styles.container_signin}>
              <h5>
                Already have an account?{" "}
                <Link className={styles.login_text} href="/login">
                  Log in
                </Link>
                .
              </h5>
            </div>


          </div>
          <div className={styles.action}>
            <button type="submit">Signup</button>
          </div>
        </form>
      </div>
    </>
  );

};
export default Register;