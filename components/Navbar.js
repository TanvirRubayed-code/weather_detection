import React from 'react';
import styles from '../styles/Home.module.css'
import logo from '../image/logo.png'
const Navigation = () => {
    return (
        <div className={styles.NavLogo}>
            <div className={styles.logoTitle}>
                <div className={styles.logo}>
                    <img src={logo.src}></img>
                </div>
                <div className={styles.PageTitle}>
                    <h2>Dog Person</h2>
                </div>
            </div>
            <div className={styles.Navbar}>
                <ul>
                    <li>Home</li>
                    <li className={styles.shopNav}>Shop
                        <ul className={styles.productType}>
                            <li className={styles.med}>Medicine
                                <ul className={styles.medOptions}>
                                    <li>Antibiotics</li>
                                    <li>Antiparasitics</li>
                                    <li>Antifungals</li>
                                    <li>Steroids</li>
                                    <li> Pain Relievers</li>
                                </ul>
                            </li>
                            <li className={styles.food}>Food
                                <ul className={styles.foodOptions}>
                                    <li>Kibble</li>
                                    <li>Canned</li>
                                    <li>Semi-Moist</li>
                                    <li>Home Cooked</li>
                                    <li>Raw</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>Classify</li>
                    <button className={styles.loginbtn}>Log In</button>
                </ul>
            </div>
        </div>
    );
};

export default Navigation;