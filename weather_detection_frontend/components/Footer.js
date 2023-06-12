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
import logo from "../image/cloudy2.png";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className='flex flex-col ml-10'>

          <div className="flex items-center mb-8">
            <img className=" w-12 mr-4" src={logo.src}></img>
            <Link class=" text-white text-3xl font-semibold whitespace-nowrap dark:text-white" href="/">Weather App</Link>
          </div>

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

          <div>
            <p>&copy; 2023 Weather App. All rights reserved.</p>
          </div>
        </div>


        <div className={styles.embededmap}>

          <a>
            <h3 className='text-white text-center mb-2 text-xl'>Meet us here</h3>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.8954523030848!2d91.78077587297867!3d22.470562734400172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd6fcf93fffff%3A0x12b289338778d80f!2sIT%20Building!5e0!3m2!1sen!2sbd!4v1686558964138!5m2!1sen!2sbd" width="700" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>          </a>
        </div>








      </div>


    </footer>
  );
};

export default Footer;
