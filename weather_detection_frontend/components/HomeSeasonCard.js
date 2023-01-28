import React from 'react';
import styles from '../styles/HomeSeasonCard.module.css'

const HomeSeasonCard = (props) => {
    return (
        <>

            <div className={styles.bestCard}>
                <img src={props.image}></img>
                <a href='../blog/sadssd'> <h2>{props.title}</h2></a>
                <p>{props.paragraph}</p>
            </div>

        </>

    );
};

export default HomeSeasonCard;