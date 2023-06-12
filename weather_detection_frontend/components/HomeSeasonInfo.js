import React from 'react';
import HomeSeasonCard from './HomeSeasonCard';
import styles from '../styles/HomeSeasonCard.module.css'
import product1 from '../image/Summer.jpg'
import product2 from '../image/rainy2.jpg'
import product3 from '../image/autumn.jpg'
import product4 from '../image/late_autumn.jpg'
import product5 from '../image/winter.jpg'
import product6 from '../image/spring.jpg'

import classify from '../image/classify.jpg'
const HomeSeasonInfo = () => {
    return (
        <div style={{
            marginTop: '50px'
        }}>
            <div className={styles.besttitle}>
                <h1>Weather Information</h1>
            </div>
            <div className={styles.HomeSeasonCardContainer}>

                <HomeSeasonCard title="Summer" image={product1.src} paragraph="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia corporir sit amet consectetur adipisicing elit. Quia corporir sit amet consectetur adipisicing elit. Quia corporir sit amet consectetur adipisicing elit. Quia corporir sit amet consectetur adipisicing elit. Quia corporis consequatur neque aliquam! Dicta quasi totam, harum sunt minima dolore?"></HomeSeasonCard>
                <HomeSeasonCard title="Rainy" image={product2.src} paragraph="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia corporis consequatur neque aliquam! Dicta quasi totam, harum sunt minima dolore?"></HomeSeasonCard>
                <HomeSeasonCard title="Autumn" image={product3.src} paragraph="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia corporis consequatur neque aliquam! Dicta quasi totam, harum sunt minima dolore?"></HomeSeasonCard>
                <HomeSeasonCard title="Late Autumn" image={product4.src} paragraph="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia corporis consequatur neque aliquam! Dicta quasi totam, harum sunt minima dolore?"></HomeSeasonCard>
                <HomeSeasonCard title="Winter" image={product5.src} paragraph="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia corporis consequatur neque aliquam! Dicta quasi totam, harum sunt minima dolore?"></HomeSeasonCard>
                <HomeSeasonCard title="Spring" image={product6.src} paragraph="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia corporis consequatur neque aliquam! Dicta quasi totam, harum sunt minima dolore?"></HomeSeasonCard>
            </div>
        </div>
    );
};

export default HomeSeasonInfo;