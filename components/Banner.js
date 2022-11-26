import React from 'react';
import Navbar from './Navbar';
import styles from '../styles/Home.module.css'
import image from '../image/img.png'

const Banner = () => {
    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>

            <div className={styles.banner}>
                <div className={styles.text} >
                    <h5>Based on machine learning and AI classify weather condition</h5>
                    <h1>Predict Weather Condition</h1>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    <button className={styles.btnStyle}>Predict Weather</button>
                </div>
                <div className={styles.dogImage}>
                    {/* <img src={image.src}></img> */}
                </div>
            </div>

        </div>
    );
};

export default Banner;