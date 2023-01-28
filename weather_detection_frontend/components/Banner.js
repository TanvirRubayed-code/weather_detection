import React from "react";
import Navbar from "./Navbar";
import styles from "../styles/Home.module.css";
import sun_rain from "../image/weather_rain_sun.png";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const Banner = () => {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [temperature, setTemperature] = useState(0);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLatitude(parseFloat(position.coords.latitude.toFixed(2)));
      setLongitude(parseFloat(position.coords.longitude.toFixed(2)));
      console.log("Latitude is :", latitude);
      console.log("Longitude is :", longitude);
    });
  });

  useEffect(() => {
    // const url ="https://api.open-meteo.com/v1/forecast?latitude=22.43&longitude=91.80&current_weather=true";
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setTemperature(data.current_weather.temperature);
      });
  }, [latitude]);

  return (
    <div>



      <div className={styles.banner}>
        <div className={styles.background_wrapper}>
          <div className={styles.text}>
            <h5>Based on machine learning and AI classify weather condition</h5>
            <h1>Predict Weather Condition</h1>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>

            <Link className={styles.btnStyle} href="/classify">
              Predict Weather
            </Link>
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
