import React from 'react';
import styles from '../styles/Home.module.css'
import logo from '../image/cloudy2.png'
import Link from 'next/link';

const Navigation = () => {
    return (
        <div className={styles.NavLogo}>
            <div className={styles.logoTitle}>
                <div className={styles.logo}>
                    <img src={logo.src}></img>
                </div>
                <div className={styles.PageTitle}>
                    <h2><Link href="/">Weather App</Link></h2>
                </div>
            </div>
            <div className={styles.Navbar}>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li className={styles.shopNav}>Blog
                        <ul className={styles.productType}>
                            <li className={styles.med}>Weather Info
                                <ul className={styles.medOptions}>
                                    <li>Daily </li>
                                    <li>Weekly </li>
                                    <li>Monthly</li>
                                </ul>
                            </li>
                            <li className={styles.food}>Seasonal Info
                                <ul className={styles.foodOptions}>
                                    <li>Summer</li>
                                    <li>Rainy</li>
                                    <li>Autumn</li>
                                    <li>Late Autumn</li>
                                    <li>Winter</li>
                                    <li>Spring</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li><Link href="/classify">Classify</Link></li>
                    <button className={styles.loginbtn}><Link href="/login">Log In</Link></button>
                </ul>
            </div>
        </div>
    );
};

export default Navigation;