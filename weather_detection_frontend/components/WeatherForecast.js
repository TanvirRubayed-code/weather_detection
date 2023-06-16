import Image from "next/image";
import lightning from '../image/few clouds.png'



function WeatherForecast() {
    return <div className="bg-gray-100 pb-20">
        <div className="py-8 px-20 bg-white">
            <h1 className="text-5xl font-bold">Weather <span className="text-teal-500">Forecast</span></h1>
        </div>
        <div className="flex flex-row px-20 bg-gray-100">
            <div className="w-1/3 flex flex-col">
                <div className="py-1">
                    <h3 className="text-4xl pt-4 font-bold">Today</h3>
                </div>
                <div class="max-w-sm mb-20 p-6 bg-white border border-gray-200 rounded-lg shadow-xl dark:bg-gray-800 dark:border-gray-700">

                    <div>
                        <div className="flex pt-4">
                            <h3 className="text-8xl">30<sup>o</sup>C</h3>
                        </div>


                        <div className=" flex items-center">
                            <div className="text-4xl pr-4">
                                <h2>Sunny</h2>
                            </div>
                            <div className="pl-10">
                                <Image className="w-24" src={lightning} alt="" />
                            </div>
                        </div>
                        <div>
                            <h4 className=" tracking-wider">Monday 27, July '23</h4>
                        </div>
                    </div>
                    <hr class="h-1 rounded my-4 bg-gray-300 border-0 dark:bg-gray-700"></hr>
                    <div className="mb-16 pt-4">
                        <h4 className="tracking-wide text-gray-500">RealFeel : <span>37<sup>o</sup></span></h4>
                        <h4 className="tracking-wide pt-1 text-gray-500">Humidity : <span>66%</span></h4>
                        <h4 className="tracking-wide pt-1 text-gray-500">UV Index : <span>37<sup>o</sup></span></h4>
                        <h4 className="tracking-wide pt-1 text-gray-500">Cloud Cover : <span>37<sup>o</sup></span></h4>
                        <h4 className="tracking-wide pt-1 text-gray-500">Visibility : <span>37<sup>o</sup></span></h4>
                    </div>
                </div>
            </div>

            <div className="mt-16 w-full ml-8 justify-around  flex flex-row flex-wrap">
                <div class="max-w-sm h-72 p-10 w-72 bg-white border border-gray-200 rounded-lg shadow-xl dark:bg-gray-800 dark:border-gray-700">
                    <h4 className="text-6xl font-semibold">28<sup>o</sup>C</h4>
                    <div className=" flex items-center  h-28">
                        <div className="text-4xl pr-4">
                            <h2>Rain</h2>
                        </div>
                        <div className="">
                            <Image className="w-28" src={lightning} alt="" />
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl tracking-wide">Tue 28, July '23</h3>
                    </div>
                </div>
                <div class="max-w-sm h-72 p-10 w-72 bg-white border border-gray-200 rounded-lg shadow-xl dark:bg-gray-800 dark:border-gray-700">
                    <h4 className="text-6xl font-semibold">32<sup>o</sup>C</h4>
                    <div className=" flex items-center h-28">
                        <div className="text-4xl pr-4">
                            <h2>Sunny</h2>
                        </div>
                        <div className="">
                            <Image className="w-28" src={lightning} alt="" />
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl tracking-wide">Wed 29, July '23</h3>
                    </div>
                </div>
                <div class="max-w-sm h-72 p-10 w-72 bg-white border border-gray-200 rounded-lg shadow-xl dark:bg-gray-800 dark:border-gray-700">
                    <h4 className="text-6xl font-semibold">35<sup>o</sup>C</h4>
                    <div className=" flex items-center  h-28">
                        <div className="text-4xl pr-4">
                            <h2>Clear Sky</h2>
                        </div>
                        <div className="">
                            <Image className="w-28" src={lightning} alt="" />
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl tracking-wide">Thu 30, July '23</h3>
                    </div>
                </div>
                <div class="max-w-sm h-72 p-10 w-72 bg-white border border-gray-200 rounded-lg shadow-xl dark:bg-gray-800 dark:border-gray-700">
                    <h4 className="text-6xl font-semibold">28<sup>o</sup>C</h4>
                    <div className=" flex items-center  h-28">
                        <div className="text-4xl pr-4">
                            <h2>Rain</h2>
                        </div>
                        <div className="">
                            <Image className="w-28" src={lightning} alt="" />
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl tracking-wide">Tue 28, July '23</h3>
                    </div>
                </div>
                <div class="max-w-sm h-72 p-10 w-72 bg-white border border-gray-200 rounded-lg shadow-xl dark:bg-gray-800 dark:border-gray-700">
                    <h4 className="text-6xl font-semibold">25<sup>o</sup>C</h4>
                    <div className=" flex items-center h-28 ">
                        <div className="text-4xl pr-4">
                            <h2>Rain</h2>
                        </div>
                        <div className="">
                            <Image className="w-28" src={lightning} alt="" />
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl tracking-wide">Tue 28, July '23</h3>
                    </div>
                </div>
                <div class="max-w-sm h-72 p-10 w-72 bg-white border border-gray-200 rounded-lg shadow-xl dark:bg-gray-800 dark:border-gray-700">
                    <h4 className="text-6xl font-semibold">31<sup>o</sup>C</h4>
                    <div className=" flex items-center  h-28">
                        <div className="text-4xl pr-4">
                            <h2>Rain</h2>
                        </div>
                        <div className="">
                            <Image className="w-28" src={lightning} alt="" />
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl tracking-wide">Tue 28, July '23</h3>
                    </div>
                </div>
            </div>

        </div>
    </div>
}
export default WeatherForecast;