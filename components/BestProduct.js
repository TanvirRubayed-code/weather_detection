import React from 'react';
import BestProductCard from './BestProductCard';
import styles from '../styles/bestproductcard.module.css'
import product1 from '../image/Summer.jpg'
import product2 from '../image/rainy2.jpg'
import product3 from '../image/autumn.jpg'
import product4 from '../image/late_autumn.jpg'
import product5 from '../image/winter.jpg'
import product6 from '../image/spring.jpg'

import classify from '../image/classify.jpg'
const BestProduct = () => {
    return (
        <div style={{
            marginTop: '50px'
        }}>
            <div className={styles.besttitle}>
                <h1>Weather Information</h1>
            </div>
            <div className={styles.bestProductCardContainer}>
                
                <BestProductCard title="Summer" image={product1.src} paragraph="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia corporis consequatur neque aliquam! Dicta quasi totam, harum sunt minima dolore?"></BestProductCard>
                <BestProductCard title="Rainy" image={product2.src} paragraph="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia corporis consequatur neque aliquam! Dicta quasi totam, harum sunt minima dolore?"></BestProductCard>
                <BestProductCard title="Autumn" image={product3.src} paragraph="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia corporis consequatur neque aliquam! Dicta quasi totam, harum sunt minima dolore?"></BestProductCard>
                <BestProductCard title="Late Autumn" image={product4.src} paragraph="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia corporis consequatur neque aliquam! Dicta quasi totam, harum sunt minima dolore?"></BestProductCard>
                <BestProductCard title="Winter" image={product5.src} paragraph="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia corporis consequatur neque aliquam! Dicta quasi totam, harum sunt minima dolore?"></BestProductCard>
                <BestProductCard title="Spring" image={product6.src} paragraph="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia corporis consequatur neque aliquam! Dicta quasi totam, harum sunt minima dolore?"></BestProductCard>
            </div>
        </div>
    );
};

export default BestProduct;