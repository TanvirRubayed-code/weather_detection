import React from "react";
import styles from "../styles/Home.module.css";
import playStore from "../image/Vector.png";
import appleLogo from "../image/applelogo.png";
const Footer = () => {
  return (
    <div>
      <div className={styles.footerMain}>
        <div className={styles.footerFirst}>
          <div className={styles.footerDownAndLicense}>
            <a>Download Now</a>
            <a>License</a>
          </div>
          <div className={styles.footerFeatures}>
            <a>About</a>
            <a>Feature</a>
            <a>Pricing</a>
            <a>Carriers</a>
            <a>Help</a>
            <a>Privacy Policy</a>
          </div>
          <a> © 2020 bike.All right reserved</a>
        </div>

        <div className={styles.embededmap}>
           <a>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.792247077148!2d91.80622344994619!3d22.474440085160943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd6539390bfab%3A0x162fea9510af3d6c!2sChittagong%20University%20Rd%2C%20Jobra!5e0!3m2!1sen!2sbd!4v1674105713243!5m2!1sen!2sbd"></iframe>
            </a>
           </div>    


        <div className={styles.appLink}>
          <h3 className="text-2xl ">Get the App</h3>
          <div className=" border-l-4 pl-8 border-l-bermuda">
            <div className={styles.appLogo}>
              <a>
                <img src={appleLogo.src}></img>
              </a>
            </div>
            <div>
              <a>
                <h6>Download on the</h6>
                <h3>App Store</h3>
              </a>
            </div>
          </div>
          <div className=" border-l-4 pl-8 border-l-bermuda">
            <div className={styles.playStoreLogo}>
              <a>
                <img src={playStore.src}></img>
              </a>
            </div>
            <div className={styles.playStoreText}>
              <a>
                {" "}
                <h6>Get it on</h6>
                <h3> Google Play</h3>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
