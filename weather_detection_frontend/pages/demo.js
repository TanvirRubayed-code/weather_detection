import React, { useState } from 'react';
import axios from 'axios';

const demo = () => {

    const [weather_info, setWeather] = useState([])

    axios.get('http://localhost:4000/weather')
        .then(res => {
            setWeather(res.data)
        })
    return (
        <div>
            Names:
            <div>
                {weather_info.map((item, index) => {
                    if (index !== weather_info.length - 1) {
                        return <span>{item.name}, </span>
                    }
                    else {
                        return <span>{item.name}</span>
                    }
                }
                )}
            </div>
        </div>
    );
};

export default demo;