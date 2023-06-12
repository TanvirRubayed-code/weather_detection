import React, { useState } from 'react';
import styles from '../styles/HomeSeasonCard.module.css'

const HomeSeasonCard = (props) => {
    const [showModal, setShowModal] = useState(false);
    const [season, setSeason] = useState("");

    const handleCardClick = (e) => {
        setShowModal(true);
        setSeason(e);
    }



    const seasonPost = {
        "summer": "Summer, the sun-kissed season of joy and vitality, enchants us with its bountiful gifts and mesmerizing tapestry of sights, sounds, and sensations. As the Earth tilts closer to the sun, the days stretch luxuriously long, offering us ample time to indulge in the abundance of nature's splendor. From the gentle sway of emerald leaves on ancient trees to the vibrant hues of wildflowers that carpet meadows and hillsides, the world awakens in a symphony of colors. Fragrant blossoms bloom, delicately perfuming the air with their sweet perfume, while birdsong fills the sky, a melodic chorus that celebrates life's enduring spirit. Under the warm embrace of the sun's rays, we are drawn to the shimmering waters that beckon us to immerse ourselves in their refreshing depths. From tranquil lakes to crashing ocean waves, these watery havens offer respite from the heat and a playground for adventure. With each step on sandy shores, we leave footprints of memories, and the rhythmic crash of waves against the shore becomes a soothing soundtrack to our summer escapades. In this season of joy and exploration, the world becomes a canvas for discovery. We embark on journeys to far-flung destinations, where ancient ruins whisper stories of bygone civilizations, and bustling markets overflow with vibrant colors and tantalizing scents. Festivals abound, their lively energy contagious as people come together to celebrate traditions and create cherished moments. From firework-lit skies to open-air concerts, summer brings people closer, fostering connections and forging memories that last a lifetime. But it is not just the external world that transforms during this magical season. Summer invites us to embark on a personal journey of self-discovery and growth. We shed the weight of daily routines and embrace a slower pace, allowing ourselves the luxury of idle afternoons spent lost in a captivating book or lounging beneath the shade of a sprawling tree. As the sun casts its golden glow, we find solace in reflection and introspection, discovering new passions and nurturing the flame of creativity within. Summer is a time of heightened senses and untamed possibility. It invites us to release our worries and immerse ourselves in the present moment, to savor the sweetness of juicy fruits and the coolness of ice-cold treats. It is a season that encourages us to embrace our inner child, to relish in the simple pleasures of barefoot strolls on dewy grass and laughter that echoes into the twilight hours.In the tapestry of seasons, summer holds a special place, offering a vibrant mosaic of experiences and a respite from the ordinary. It reminds us to slow down, to appreciate the beauty that surrounds us, and to seize the fleeting moments that make life extraordinary. So, let us embrace the warmth of the sun, the rhythm of the waves, and the enchantment of long, lazy days. For in the heart of summer, we find the essence of life's purest joys.",
        "rainy": "The rainy season, a gentle symphony of water and earth, transforms the world into a lush oasis of renewal and contemplation. As the gray clouds gather overhead, anticipation fills the air, heralding the arrival of nature's cleansing embrace. The first droplets descend, delicately kissing the parched earth, reviving dormant seeds and coaxing sprouts to emerge from their slumber. Pitter-patter becomes the soundtrack of our days, as raindrops dance upon leaves, rooftops, and windowpanes, creating a soothing melody that invites us to pause and reflect. In the midst of the downpour, a quiet beauty unfolds. Rain-washed streets shimmer under the soft glow of streetlights, reflecting a kaleidoscope of colors. The world is awash with vibrant greens, as trees and plants drink greedily, growing with newfound vitality. The aroma of wet soil permeates the air, mingling with the scent of blooming flowers, a fragrant reminder of life's resilience and the cyclical nature of existence. The rainy season also holds a certain allure, inviting us to seek solace in cozy corners. We wrap ourselves in warmth, clutching steaming cups of tea or coffee, while the rhythmic patter of raindrops against the window creates a soothing backdrop for introspection and creativity. It is a time for introspection, for delving into the depths of our thoughts and emotions, finding inspiration amidst the gentle chaos of rain. In the midst of showers, life takes on a slower pace. The hustle and bustle of daily routines retreat, replaced by a tranquil atmosphere that encourages us to engage in activities that nourish the soul. We may lose ourselves in the pages of a beloved book, indulge in a creative pursuit, or simply revel in the soothing sounds of raindrops as they compose their own melodies. The rainy season also fosters a sense of connection and togetherness. Sheltered from the elements, we gather with loved ones, engaging in heartfelt conversations and shared laughter. We find comfort in the simple act of companionship, as raindrops form a rhythmic backdrop to moments of connection and warmth. Ultimately, the rainy season is a reminder of nature's ability to cleanse, nourish, and replenish. It is a season of transformation, where gray skies give way to vibrant rainbows, and barren landscapes are transformed into verdant havens. It teaches us the value of patience, of embracing the ebb and flow of life, and finding beauty even in the most seemingly mundane moments. So, as the rain falls gently upon the earth, let us open ourselves to its enchantment. Let us embrace the serenity and introspection it brings, and find solace in the gentle rhythm of nature's symphony. For in the rainy season, we discover the beauty of renewal and the profound connection we share with the world around us."
    }

    return (
        <>

            <div onClick={() => handleCardClick(props.title)} className={styles.bestCard}>
                <img src={props.image}></img>
                <h2>{props.title}</h2>
                <p className='overflow-hidden'>{props.paragraph}</p>
            </div>


            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto h-24 max-w-4xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        {season}
                                    </h3>
                                    <button
                                        className="p-1 ml-auto border-1 text-red float-right text-3xl leading-none font-semibold outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="text-black h-6 w-6 text-2xl block outline-none hover:text-tred">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                    <p className="my-4 text-slate-500 text-lg leading-relaxed modal-scroll">
                                        {
                                            season == "Summer" ? seasonPost.summer : season == "Rainy" ? seasonPost.rainy : null
                                        }
                                    </p>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none hover:bg-gray-200 focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}

        </>

    );
};

export default HomeSeasonCard;