 
import styles from '../styles/Register.module.css';
 import Navbar from "../components/Navbar"
 import Footer from "../components/Footer"

function Register(){
  return <>
  <Navbar></Navbar>
  <div className={styles.register_form}>
      <form>
          <h1>Register</h1>
          <div className={styles.content}>
              <div className={styles.input_field}>
                  <input type="email" placeholder="username or e-mail" autocomplete="nope" />
              </div>

              <div className={styles.input_field}>
                  <input type="email" placeholder="enter your e-mail" autocomplete="nope" />
              </div>

              <div className={styles.input_field}>
                  <input type="password" placeholder="password" autocomplete="new-password" />
              </div>
              
              <div className={styles.input_field}>
                  <input type="password" placeholder="confirm password" autocomplete="new-password" />
              </div>

              <div class={styles.container_signin}>
                 <h5>Already have an account? <a href="#">Log in</a>.</h5>
              </div>
              

              <div class ={styles.legacy}>
              <p>  <input type="checkbox"></input> By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>  
              </div>


          </div>
          <div className={styles.action}>
              <button>Register</button>
          </div>
      </form>
  </div>
  <Footer></Footer>
</>

  

}

export default Register