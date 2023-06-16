import React from "react";
import Navbar from "./Navbar";
import styles from "../styles/Home.module.css";
import sun_rain from "../image/weather_rain_sun.png";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { BsFillArrowRightCircleFill } from 'react-icons/bs';




const Banner = () => {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [temperature, setTemperature] = useState(0);


  const [loggedIn, setLoggedIn] = useState(false);


  useEffect(() => {
    const item = sessionStorage.getItem('userid')
    if (item) {
      setLoggedIn(true);
    }
  }, [])

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLatitude(parseFloat(position.coords.latitude.toFixed(2)));
      setLongitude(parseFloat(position.coords.longitude.toFixed(2)));

    });
  });

  useEffect(() => {
    // const url ="https://api.open-meteo.com/v1/forecast?latitude=22.43&longitude=91.80&current_weather=true";
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTemperature(data.current_weather.temperature);
      });
  }, [latitude]);

  return (
    <div>



      <div className={styles.banner}>
        <div className={styles.background_wrapper}>
          <div className={styles.text}>
            {/* <h5>Based on machine learning and AI classify weather condition</h5> */}
            <h1 className="text-7xl">Weather Detection</h1>
            <p>
              Experience weather forecasting like never before with our cutting-edge ML-based web application. Real-time updates, precise forecasts, and stunning visuals in one seamless experience.
            </p>




            {
              loggedIn == true ? <Link href="/classify" type="button" class="text-blue-600 transition duration-300 bg-white hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-full text-base px-5 py-2.5 text-center inline-flex items-center">
                Predict Weather
                <BsFillArrowRightCircleFill className="ml-2  transition duration-300" size={25} />
              </Link> : <Link href="/login" type="button" class="text-blue-600 transition duration-300 bg-white hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-full text-base px-5 py-2.5 text-center inline-flex items-center">
                Predict Weather
                <BsFillArrowRightCircleFill className="ml-2  transition duration-300" size={25} />
              </Link>
            }

          </div>
          <div className={styles.current_weather}>
            <div className={styles.image_text_current}>
              <small>Current temperature</small>

              <Image
                className={styles.current_weather_image}
                src={sun_rain}
                alt="Picture of the author"
              ></Image>
            </div>
            <p className={styles.temperature}>
              {temperature}
              &#8451;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
