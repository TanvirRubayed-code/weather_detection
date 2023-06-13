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
    // <footer className={styles.footer}>
    //   <div className={styles.container}>
    //     <div className={styles.footerContent}>
    //       <ul className={styles.footerLinks}>
    //         <li><a href="">Home |</a></li>
    //         <li><a href="#">About | </a></li>
    //         <li><a href="#">Services | </a></li>
    //         <li>
    //           <a href="#">Contact us</a> 
    //         </li>
    //       </ul>
    //     </div>

        
    //     <div className={styles.embededmap}>
    //       <a>
    //         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.792247077148!2d91.80622344994619!3d22.474440085160943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd6539390bfab%3A0x162fea9510af3d6c!2sChittagong%20University%20Rd%2C%20Jobra!5e0!3m2!1sen!2sbd!4v1674105713243!5m2!1sen!2sbd"></iframe>
    //       </a>
    //     </div> 


        // <div className={styles.white}>
        //   <h1>Get the app</h1>
        //   <br></br>
        //   <a href=''>
        //     <Image src={google}></Image>
        //   </a>
        // </div>


    //     <div className={styles.white1}>
    //       <h1>Newsletter</h1>
    //       <input type ="email" placeholder="Enter your E-mail"/>
    //       <input type ="submit" placeholder="submit"/>
    //     </div>


    //   </div>
    //   <br></br>
    //   <p>&copy; 2023 Weather App. All rights reserved.</p>
    // </footer>

<footer className={styles.footer}>
   <div className="text-white py-8">

{/* <footer className="px-4 divide-y dark:bg-gray-800 dark:text-gray-100"> */}
    {/* <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0"> */}


      <div className="grid grid-cols-4 text-sm gap-x-3 gap-y-8 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 mr-5">
        {/* about us */}
        <div className={styles.aboutus}>
          <div className="space-y-3.ml-5">
            <h3 className="tracking-wide uppercase dark:text-gray-50">About US</h3>
            <ul className="space-y-1">
              <li>
                <a rel="noopener noreferrer" href="#">Features</a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">Integrations</a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">Support</a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">Terms of Service</a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">FAQ</a>
              </li>
            </ul>
          </div>
        </div>

        {/* contact us */}
        <div className={styles.contactus}>
        <div className="space-y-3 ml-5 mt-0">
          {/* <div className="space-y-3"> */}
            <h3 className="tracking-wide uppercase dark:text-gray-50"></h3>
            <ul className="space-y-1">
              <li>
                <a rel="noopener noreferrer" href="#">CONTACT US</a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">+880148445454</a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">Hathazari,Chittagong</a>
              </li>
            </ul>
          {/* </div> */}
        </div>
        </div>

        {/* SOCIAL MEDIA */}
        <div className={styles.socialmedia}>
        <div className="space-y-3 ml-5">
          <div className="uppercase dark:text-gray-50">Social media</div>
          <div className="flex justify-start space-x-3">
              <a rel="noopener noreferrer" href="#" title="Facebook" className="flex items-center p-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                  <path d="M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z"></path>
                </svg>
              </a>
              <a rel="noopener noreferrer" href="#" title="Twitter" className="flex items-center p-1">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current">
                  <path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"></path>
                </svg>
              </a>
              <a rel="noopener noreferrer" href="#" title="Instagram" className="styles.flex items-center p-1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="w-5 h-5 fill-current">
                  <path d="M16 0c-4.349 0-4.891 0.021-6.593 0.093-1.709 0.084-2.865 0.349-3.885 0.745-1.052 0.412-1.948 0.959-2.833 1.849-0.891 0.885-1.443 1.781-1.849 2.833-0.396 1.020-0.661 2.176-0.745 3.885-0.077 1.703-0.093 2.244-0.093 6.593s0.021 4.891 0.093 6.593c0.084 1.704 0.349 2.865 0.745 3.885 0.412 1.052 0.959 1.948 1.849 2.833 0.885 0.891 1.781 1.443 2.833 1.849 1.020 0.391 2.181 0.661 3.885 0.745 1.703 0.077 2.244 0.093 6.593 0.093s4.891-0.021 6.593-0.093c1.704-0.084 2.865-0.355 3.885-0.745 1.052-0.412 1.948-0.959 2.833-1.849 0.891-0.885 1.443-1.776 1.849-2.833 0.391-1.020 0.661-2.181 0.745-3.885 0.077-1.703 0.093-2.244 0.093-6.593s-0.021-4.891-0.093-6.593c-0.084-1.704-0.355-2.871-0.745-3.885-0.412-1.052-0.959-1.948-1.849-2.833-0.885-0.891-1.776-1.443-2.833-1.849-1.020-0.396-2.181-0.661-3.885-0.745-1.703-0.077-2.244-0.093-6.593-0.093zM16 2.88c4.271 0 4.781 0.021 6.469 0.093 1.557 0.073 2.405 0.333 2.968 0.553 0.751 0.291 1.276 0.635 1.844 1.197 0.557 0.557 0.901 1.088 1.192 1.839 0.22 0.563 0.48 1.411 0.553 2.968 0.072 1.688 0.093 2.199 0.093 6.469s-0.021 4.781-0.099 6.469c-0.084 1.557-0.344 2.405-0.563 2.968-0.303 0.751-0.641 1.276-1.199 1.844-0.563 0.557-1.099 0.901-1.844 1.192-0.556 0.22-1.416 0.48-2.979 0.553-1.697 0.072-2.197 0.093-6.479 0.093s-4.781-0.021-6.48-0.099c-1.557-0.084-2.416-0.344-2.979-0.563-0.76-0.303-1.281-0.641-1.839-1.199-0.563-0.563-0.921-1.099-1.197-1.844-0.224-0.556-0.48-1.416-0.563-2.979-0.057-1.677-0.084-2.197-0.084-6.459 0-4.26 0.027-4.781 0.084-6.479 0.083-1.563 0.339-2.421 0.563-2.979 0.276-0.761 0.635-1.281 1.197-1.844 0.557-0.557 1.079-0.917 1.839-1.199 0.563-0.219 1.401-0.479 2.964-0.557 1.697-0.061 2.197-0.083 6.473-0.083zM16 7.787c-4.541 0-8.213 3.677-8.213 8.213 0 4.541 3.677 8.213 8.213 8.213 4.541 0 8.213-3.677 8.213-8.213 0-4.541-3.677-8.213-8.213-8.213zM16 21.333c-2.948 0-5.333-2.385-5.333-5.333s2.385-5.333 5.333-5.333c2.948 0 5.333 2.385 5.333 5.333s-2.385 5.333-5.333 5.333zM26.464 7.459c0 1.063-0.865 1.921-1.923 1.921-1.063 0-1.921-0.859-1.921-1.921 0-1.057 0.864-1.917 1.921-1.917s1.923 0.86 1.923 1.917z"></path>
                </svg>
              </a>      
          </div>

          <div>
              <Image src={google}></Image>
          </div>
          {/* <div className="w-full md:w-auto mt-4 md:mt-0"> */}

      {/* </div> */}

      </div>
        </div>
        
        <div className={styles.location}>
        <div className="space-y-3 ml-5">
          <h2 className={styles.chuks}>OUR LOCATION</h2>
          <div className={styles.white1}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.792247077148!2d91.80622344994619!3d22.474440085160943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd6539390bfab%3A0x162fea9510af3d6c!2sChittagong%20University%20Rd%2C%20Jobra!5e0!3m2!1sen!2sbd!4v1674105713243!5m2!1sen!2sbd"
              className="styles.w-full h-20 md:h-40"
              title="Embedded Map"
            ></iframe>
          </div>
        </div>
        </div>

      </div>
    </div>
    {/* </div> */}

	<div className="py-6 text-sm text-center dark:text-gray-400">©2023  Company Co. All rights reserved.</div>
{/* </div> */}
</footer>




  );
};

export default Footer;
