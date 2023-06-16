
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
              <li><a href="#">Features | </a></li>
              <li>
                <a href="#">Contact us</a>
              </li>
            </ul>
          </div>

          <div className={styles.footerContent}>
            <ul className={styles.footerLinks}>
              <li><a href="#">About  | </a></li>
              <li><a href="#">Services | </a></li>

            </ul>
          </div>


          <div >
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
