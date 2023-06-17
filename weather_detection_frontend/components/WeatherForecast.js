import Image from "next/image";
import lightning from '../image/few clouds.png'
import { useEffect, useState } from "react";
import _01d from '../image/01d.png';
import _01n from '../image/01n.png';
import _02d from '../image/02d.png';
import _02n from '../image/02n.png';
import _03d from '../image/03d.png';
import _03n from '../image/03n.png';
import _04d from '../image/04d.png';
import _04n from '../image/04n.png';
import _09d from '../image/09d.png';
import _09n from '../image/09n.png';
import _10d from '../image/10d.png';
import _10n from '../image/10n.png';
import _11d from '../image/11d.png';
import _11n from '../image/11n.png';

const findimage = (icon) => {
    let img;
    switch (icon) {
        case "01d":
            img = _01d;
            break;
        case "01n":
            img = _01n;
            break;
        case "02d":
            img = _02d;
            break;
        case "02n":
            img = _02n;
            break;
        case "03d":
            img = _03d;
            break;
        case "03n":
            img = _03n;
            break;
        case "04d":
            img = _04d;
            break;
        case "04n":
            img = _04n;
            break;
        case "09d":
            img = _09d;
            break;
        case "10d":
            img = _10d;
            break;
        case "10n":
            img = _10n;
            break;
        case "11d":
            img = _11n;
            break;
        case "11n":
            img = _11n;
            break;
    }
    return img;
}


function WeatherForecast() {


    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);
    const [currentweather, setCurrentWeather] = useState(0);
    const [futureWeather, setFutureweather] = useState(null);


    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    let d = new Date();
    let year = d.getFullYear().toString();

    let today = days[d.getDay()] + " " + d.getDate() + ", " + monthNames[d.getMonth()] + " '" + year.slice(2, 4)
    let day2 = days[(d.getDay() + 1) % 7] + " " + (d.getDate() + 1) % 31 + ", " + monthNames[d.getMonth()] + " '" + year.slice(2, 4)
    let day3 = days[(d.getDay() + 2) % 7] + " " + (d.getDate() + 2) % 31 + ", " + monthNames[d.getMonth()] + " '" + year.slice(2, 4)
    let day4 = days[(d.getDay() + 3) % 7] + " " + (d.getDate() + 3) % 31 + ", " + monthNames[d.getMonth()] + " '" + year.slice(2, 4)
    let day5 = days[(d.getDay() + 4) % 7] + " " + (d.getDate() + 4) % 31 + ", " + monthNames[d.getMonth()] + " '" + year.slice(2, 4)
    let day6 = days[(d.getDay() + 5) % 7] + " " + (d.getDate() + 5) % 31 + ", " + monthNames[d.getMonth()] + " '" + year.slice(2, 4)
    let day7 = days[(d.getDay() + 6) % 7] + " " + (d.getDate() + 6) % 31 + ", " + monthNames[d.getMonth()] + " '" + year.slice(2, 4)

    // ---------------current weather details----------------




    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function (position) {
            setLatitude(parseFloat(position.coords.latitude.toFixed(2)));
            setLongitude(parseFloat(position.coords.longitude.toFixed(2)));

        });
    });

    useEffect(() => {
        // const url ="https://api.open-meteo.com/v1/forecast?latitude=22.43&longitude=91.80&current_weather=true";
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setCurrentWeather(data.current_weather);
            });
    }, [latitude]);

    useEffect(() => {
        // const url ="https://api.open-meteo.com/v1/forecast?latitude=22.43&longitude=91.80&current_weather=true";
        const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly%2Cminutely&units=metric&appid=49cc8c821cd2aff9af04c9f98c36eb74&fbclid=IwAR15ViPJTl3FQSxAOYiR33UnU5aU3h-JJDNQ_dxtnPbv465iPhSXJZ9YhiQ`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setFutureweather(data);
            });
    }, [latitude]);
    const icon1 = futureWeather?.current.weather[0].icon;
    const icon2 = futureWeather?.daily[0].weather[0].icon;
    const icon3 = futureWeather?.daily[1].weather[0].icon;
    const icon4 = futureWeather?.daily[2].weather[0].icon;
    const icon5 = futureWeather?.daily[3].weather[0].icon;
    const icon6 = futureWeather?.daily[4].weather[0].icon;
    const icon7 = futureWeather?.daily[5].weather[0].icon;



    const todayimg = findimage(icon1);
    const day2img = findimage(icon2);
    const day3img = findimage(icon3);
    const day4img = findimage(icon4);
    const day5img = findimage(icon5);
    const day6img = findimage(icon6);
    const day7img = findimage(icon7);





    return <div className="bg-gray-100 pb-20">
        <div className="py-8 px-20 bg-white">
            <h1 className="text-5xl font-bold">Weather <span className="text-teal-500">Forecast</span></h1>
        </div>
        <div className="flex flex-row px-20 bg-gray-100">
            <div className="w-1/3 flex flex-col">
                <div className="py-1">
                    <h3 className="text-4xl pt-4 font-bold">Today</h3>
                </div>
                <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-xl dark:bg-gray-800 dark:border-gray-700">

                    <div>
                        <div className="flex pt-4">
                            <h3 className="text-7xl">{currentweather.temperature}<sup>o</sup>C</h3>
                        </div>


                        <div className=" flex items-center">
                            <div className="text-4xl pr-4">
                                <h2>{futureWeather?.current.weather[0].main}</h2>
                            </div>
                            <div className="pl-10">
                                <Image className="w-24" src={todayimg} alt="" />
                            </div>
                        </div>
                        <div>
                            <h4 className=" tracking-wider">{today}</h4>
                        </div>
                    </div>
                    <hr class="h-1 rounded my-4 bg-gray-300 border-0 dark:bg-gray-700"></hr>
                    <div className="mb-16 pt-4">
                        <h4 className="tracking-wide pt-1 text-gray-500">Weather description : <span>{futureWeather?.current.weather[0].description}</span></h4>
                        <h4 className="tracking-wide pt-1 text-gray-500">Wind direction : <span>{currentweather.winddirection}</span><sup>o</sup></h4>
                        <h4 className="tracking-wide pt-1 text-gray-500">Wind Speed : <span>{currentweather.windspeed}</span></h4>
                        <h4 className="tracking-wide pt-1 text-gray-500">Humidity  : <span>{futureWeather?.current.humidity}</span></h4>
                        <h4 className="tracking-wide pt-1 text-gray-500">Pressure  : <span>{futureWeather?.current.pressure}</span></h4>
                        <h4 className="tracking-wide pt-1 text-gray-500">UVI index  : <span>{futureWeather?.current.uvi}</span></h4>

                    </div>
                </div>
            </div>

            <div className="mt-16 w-full ml-8 justify-around  flex flex-row flex-wrap">
                <div class="max-w-sm h-72 p-10 w-72 bg-white border border-gray-200 rounded-lg shadow-xl dark:bg-gray-800 dark:border-gray-700">
                    <h4 className="text-6xl ">{futureWeather?.daily[0].temp.day}<sup>o</sup>C</h4>
                    <div className=" flex items-center  h-28">
                        <div className="text-4xl pr-4">
                            <h2>{futureWeather?.daily[0].weather[0].main}</h2>
                        </div>
                        <div className="">
                            <Image className="w-28" src={day2img} alt="" />
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl tracking-wide">{day2}</h3>
                    </div>
                </div>
                <div class="max-w-sm h-72 p-10 w-72 bg-white border border-gray-200 rounded-lg shadow-xl dark:bg-gray-800 dark:border-gray-700">
                    <h4 className="text-6xl ">{futureWeather?.daily[1].temp.day}<sup>o</sup>C</h4>
                    <div className=" flex items-center h-28">
                        <div className="text-4xl pr-4">
                            <h2>{futureWeather?.daily[1].weather[0].main}</h2>
                        </div>
                        <div className="">
                            <Image className="w-28" src={day3img} alt="" />
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl tracking-wide">{day3}</h3>
                    </div>
                </div>
                <div class="max-w-sm h-72 p-10 w-72 bg-white border border-gray-200 rounded-lg shadow-xl dark:bg-gray-800 dark:border-gray-700">
                    <h4 className="text-6xl ">{futureWeather?.daily[2].temp.day}<sup>o</sup>C</h4>
                    <div className=" flex items-center  h-28">
                        <div className="text-4xl pr-4">
                            <h2>{futureWeather?.daily[2].weather[0].main}</h2>
                        </div>
                        <div className="">
                            <Image className="w-28" src={day4img} alt="" />
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl tracking-wide">{day4}</h3>
                    </div>
                </div>
                <div class="max-w-sm h-72 p-10 w-72 bg-white border border-gray-200 rounded-lg shadow-xl dark:bg-gray-800 dark:border-gray-700">
                    <h4 className="text-6xl ">{futureWeather?.daily[3].temp.day}<sup>o</sup>C</h4>
                    <div className=" flex items-center  h-28">
                        <div className="text-4xl pr-4">
                            <h2>{futureWeather?.daily[3].weather[0].main}</h2>
                        </div>
                        <div className="">
                            <Image className="w-28" src={day5img} alt="" />
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl tracking-wide">{day5}</h3>
                    </div>
                </div>
                <div class="max-w-sm h-72 p-10 w-72 bg-white border border-gray-200 rounded-lg shadow-xl dark:bg-gray-800 dark:border-gray-700">
                    <h4 className="text-6xl ">{futureWeather?.daily[4].temp.day}<sup>o</sup>C</h4>
                    <div className=" flex items-center h-28 ">
                        <div className="text-4xl pr-4">
                            <h2>{futureWeather?.daily[4].weather[0].main}</h2>
                        </div>
                        <div className="">
                            <Image className="w-28" src={day6img} alt="" />
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl tracking-wide">{day6}</h3>
                    </div>
                </div>
                <div class="max-w-sm h-72 p-10 w-72 bg-white border border-gray-200 rounded-lg shadow-xl dark:bg-gray-800 dark:border-gray-700">
                    <h4 className="text-6xl ">{futureWeather?.daily[5].temp.day}<sup>o</sup>C</h4>
                    <div className=" flex items-center  h-28">
                        <div className="text-4xl pr-4">
                            <h2>{futureWeather?.daily[5].weather[0].main}</h2>
                        </div>
                        <div className="">
                            <Image className="w-28" src={day7img} alt="" />
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl tracking-wide">{day7}</h3>
                    </div>
                </div>
            </div>

        </div>
    </div>
}
export default WeatherForecast;