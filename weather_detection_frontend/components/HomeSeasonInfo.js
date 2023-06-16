import React from 'react';
import HomeSeasonCard from './HomeSeasonCard';
import styles from '../styles/HomeSeasonCard.module.css'
import snow from '../image/snow.jpg'
import rain from '../image/rainy2.jpg'
import drew from '../image/drew.jpg'
import rainbow from '../image/rainbow.webp'
import lightning from '../image/lightning.jpg'

import classify from '../image/classify.jpg'
const HomeSeasonInfo = () => {
    return (
        <div className='bg-gray-100 pt-10 w-full'>
            <div className={styles.besttitle}>
                <h1>Weather Information</h1>
                <hr class="h-1 rounded my-2 w-28 bg-navbar border-0" />
            </div>


            <div className="flex flex-row flex-wrap justify-center items-center mt-8">

                <HomeSeasonCard title="Rainbow" image={rainbow.src} paragraph="Rainbows grace the heavens, a prism of colors woven in the sky, painting a bridge between dreams and reality. Each hue whispers hope, reminding us of nature's vibrant embrace, and the promise of brighter days ahead."></HomeSeasonCard>
                <HomeSeasonCard title="Ligthning" image={lightning.src} paragraph="Lightning strikes, nature's electric dance in the sky, illuminating the night with its powerful beauty. It crackles with energy, a fleeting moment of awe and wonder."></HomeSeasonCard>
                <HomeSeasonCard title="Rain" image={rain.src} paragraph="The rain kisses the earth, quenching its thirst with nature's sweet tears. It brings life, rejuvenating the world with its gentle touch, and dances with joy as it falls from the sky."></HomeSeasonCard>
                <HomeSeasonCard title="Snow" image={snow.src} paragraph="Snowflakes blanket the world, turning it into a winter wonderland of pure enchantment. Softly descending from the sky, they create a serene and magical landscape. Each snowflake whispers a tale of beauty, capturing the imagination in its delicate embrace."></HomeSeasonCard>
                <HomeSeasonCard title="Drew" image={drew.src} paragraph="Drew, a shining star among friends, radiates kindness and compassion wherever they go. Their creativity and determination inspire others to reach for the stars. With Drew by your side, every day becomes a brighter adventure."></HomeSeasonCard>
            </div>
        </div>
    );
};

export default HomeSeasonInfo;