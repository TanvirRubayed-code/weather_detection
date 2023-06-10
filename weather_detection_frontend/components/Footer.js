// import React from "react";
// import styles from "../styles/footer.module.scss";
// import playStore from "../image/Vector.png";
// import appleLogo from "../image/applelogo.png";
// const Footer = () => {
//   return (
//     // <div>
//     //   <div className={styles.footerMain}>
//     //     <div className={styles.footerFirst}>
//     //       <div className={styles.footerDownAndLicense}>
//     //         <a>Download Now</a>
//     //         <a>License</a>
//     //       </div>
//     //       <div className={styles.footerFeatures}>
//     //         <a>About</a>
//     //         <a>Feature</a>
//     //         <a>Pricing</a>
//     //         <a>Carriers</a>
//     //         <a>Help</a>
//     //         <a>Privacy Policy</a>
//     //       </div>
//     //       <a> © 2020 bike.All right reserved</a>
//     //     </div>

//     //     {/* embedmap */}
//     //     <div className={styles.embededmap}>
//     //        <a>
//     //         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.792247077148!2d91.80622344994619!3d22.474440085160943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd6539390bfab%3A0x162fea9510af3d6c!2sChittagong%20University%20Rd%2C%20Jobra!5e0!3m2!1sen!2sbd!4v1674105713243!5m2!1sen!2sbd"></iframe>
//     //         </a>
//     //        </div>    


//     //     <div className={styles.appLink}>
//     //       <h3 className="text-2xl ">Get the App</h3>
//     //       <div className=" border-l-4 pl-8 border-l-bermuda">
//     //         <div className={styles.appLogo}>
//     //           <a>
//     //             <img src={appleLogo.src}></img>
//     //           </a>
//     //         </div>
//     //         <div>
//     //           <a>
//     //             <h6>Download on the</h6>
//     //             <h3>App Store</h3>
//     //           </a>
//     //         </div>
//     //       </div>
//     //       <div className=" border-l-4 pl-8 border-l-bermuda">
//     //         <div className={styles.playStoreLogo}>
//     //           <a>
//     //             <img src={playStore.src}></img>
//     //           </a>
//     //         </div>
//     //         <div className={styles.playStoreText}>
//     //           <a>
//     //             {" "}
//     //             <h6>Get it on</h6>
//     //             <h3> Google Play</h3>
//     //           </a>
//     //         </div>
//     //       </div>
//     //     </div>
//     //   </div>
//     // </div>
    
//     <section id="footer">
//    <div class="footer-container">
//    <div class="logo-container">
//     <div class="icons">
//       <i class="fab fa-facebook"></i>
//       <i class="fab fa-instagram-square"></i>
//       <i class="fab fa-twitter-square"></i>
//       <i class="fab fa-pinterest-square"></i>
//     </div>
//     <div class="logo">
//       <h1>LOGO</h1>
//     </div>
//    </div>

// <div class="info">
// <i class="fas fa-map-marker-alt" data-text="xyz location"></i>
// <i class="fas fa-phone-alt" data-text="+8800000000000"></i>
// <i class="fas fa-envelop" data-text="xyz location"></i>
// </div>
  
{/* <div class ="letter">
  <h1>newslatter</h1>
  <p>enter your email</p> 
  <input type ="email" placeholder="E-mail"/>
  <input type ="submit" placeholder="submit"/>
  
</div> */}

    
//    </div>
//     </section>

// //  <footer class={styles.footer}>
// // <div class={styles.container}>
// //   {/* <div class={styles.footer-content}> */}
// //     <p>&copy; 2023 Your Website. All rights reserved.</p>
// //     <ul class={styles.footer-links}>
// //       <li><a href="#">Home</a></li>
// //       <li><a href="#">About</a></li>
// //       <li><a href="#">Services</a></li>
// //       <li><a href="#">Contact</a></li>
// //     </ul>
// //   </div>
// // </div>
// // </footer> 


//shitest
   //code ever
//   );
// };

// export default Footer;


import React from 'react';
import styles from '/styles/Footer.module.scss';
import Image from "next/image";
import google from "../image/google-play.png";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <ul className={styles.footerLinks}>
            <li><a href="">Home |</a></li>
            <li><a href="#">About | </a></li>
            <li><a href="#">Services | </a></li>
            <li>
              <a href="#">Contact us</a> 
            </li>
          </ul>
        </div>

        
        <div className={styles.embededmap}>
          <a>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.792247077148!2d91.80622344994619!3d22.474440085160943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd6539390bfab%3A0x162fea9510af3d6c!2sChittagong%20University%20Rd%2C%20Jobra!5e0!3m2!1sen!2sbd!4v1674105713243!5m2!1sen!2sbd"></iframe>
          </a>
        </div> 


        <div className={styles.white}>
          <h1>Get the app</h1>
          <br></br>
          <a href=''>
            <Image src={google}></Image>
          </a>
        </div>


        <div className={styles.white1}>
          <h1>Newsletter</h1>
          <input type ="email" placeholder="Enter your E-mail"/>
          <input type ="submit" placeholder="submit"/>
        </div>


      </div>
      <br></br>
      <p>&copy; 2023 Weather App. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
