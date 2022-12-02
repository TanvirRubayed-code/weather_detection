import logo from "../image/cloudy.png"
import styles from "../styles/login.module.css"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const login = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className={styles.upper}>
                <div className={styles.title}>
                    <div>
                        <img src={logo.src} />
                    </div>
                    <div>
                        <h1>Weather App</h1>
                    </div>
                </div>

                <div className={styles.login}>
                    <div>
                        <h1>Log in</h1>
                    </div>
                </div>
            </div>

            <div className={styles.lower}>
                <div className={styles.fromBox}>
                    <form>
                        <input type="email" placeholder="Email"></input>
                        <input type="password" placeholder="Password"></input>
                    </form>
                </div>
            </div>


            <Footer></Footer>
        </div>
    );
};

export default login;