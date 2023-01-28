import { useState } from "react";
import Image from "next/image";
import summer from "../image/Summer.jpg";
import { MdLocationOn } from "react-icons/md"
import { FaUserAlt } from "react-icons/fa"
import { FaEdit } from "react-icons/fa"
import ReactStars from "react-rating-stars-component";
import styles from "../styles/Blog.module.css";
import { FaBrain } from "react-icons/fa"
import Link from "next/link";


function ProfileInfo() {

    const [ratingvlaue, setRatingValue] = useState(3.7);

    return (
        <div className="px-36 bg-gray-200 py-12 w-full">
            <div className="flex rounded-lg shadow-xl bg-white p-10">

                <div className="w-1/3">

                    <Image
                        className="rounded-full ring-2 ring-blue-500 h-60 w-60 hover:opacity-90 "
                        src={summer}
                        alt="Picture of the author"
                    />


                    <div className="flex">
                        <div className="text-xs text-gray-400 mt-12 ">
                            SKILLS

                        </div>
                        <div className="w-full ml-2 border-b-2 border-b-gray-400"></div>
                    </div>
                    <div className="mt-4">
                        Branding<br />
                        UI/UX <br />
                        Web-design<br />
                        Packaging<br />
                        Print & Editorial <br />
                    </div>

                    <div className="flex">
                        <div className="text-xs text-gray-400 mt-12 ">
                            All posts

                        </div>
                        <div className="w-full ml-2 border-b-2 border-b-gray-400"></div>
                    </div>

                    <div className="">
                        <div className="flex mt-2">
                            <div className={styles.top_post_number}>
                                <h3>1</h3>
                            </div>
                            <div className="text-sm pl-4">
                                <h2 className=" hover:underline cursor-pointer"> Aenean mattisg tortor ac sapen congue molestie.</h2>
                                <div>
                                    <small>Food</small>
                                    <small className={styles.caterogy_small}>-</small>
                                    <small>NOV 17, 2022</small>
                                </div>
                            </div>
                        </div>

                        <div className="flex mt-2">
                            <div className={styles.top_post_number}>
                                <h3>2</h3>
                            </div>
                            <div className="text-sm pl-4">
                                <h2 className=" hover:underline cursor-pointer"> Aenean mattisg tortor ac sapen congue molestie.</h2>
                                <div>
                                    <small>Food</small>
                                    <small className={styles.caterogy_small}>-</small>
                                    <small>NOV 17, 2022</small>
                                </div>
                            </div>
                        </div>

                        <div className="flex mt-2">
                            <div className={styles.top_post_number}>
                                <h3>3</h3>
                            </div>
                            <div className="text-sm pl-4">
                                <h2 className=" hover:underline cursor-pointer">Aenean mattisg tortor ac sapen congue molestie.</h2>
                                <div>
                                    <small>Food</small>
                                    <small className={styles.caterogy_small}>-</small>
                                    <small>NOV 17, 2022</small>
                                </div>
                            </div>
                        </div>

                        <div className="flex mt-2">
                            <div className={styles.top_post_number}>
                                <h3>4</h3>
                            </div>
                            <div className="text-sm pl-4">
                                <h2 className=" hover:underline cursor-pointer">Aenean mattisg tortor ac sapen congue molestie.</h2>
                                <div>
                                    <small>Food</small>
                                    <small className={styles.caterogy_small}>-</small>
                                    <small>NOV 17, 2022</small>
                                </div>
                            </div>
                        </div>

                        <div className="flex mt-2">
                            <div className={styles.top_post_number}>
                                <h3>5</h3>
                            </div>
                            <div className="text-sm pl-4">
                                <h2 className=" hover:underline cursor-pointer"> Aenean mattisg tortor ac sapen congue molestie.</h2>
                                <div>
                                    <small>Food</small>
                                    <small className={styles.caterogy_small}>-</small>
                                    <small>NOV 17, 2022</small>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
                <div className="ml-20 w-2/3">
                    <div className="flex items-center">
                        <div className=" text-xl m-0 ">Tanvir Rubayed Tauhid</div>
                        <div className="ml-5 flex items-center justify-center">
                            <MdLocationOn color="#EA4335"></MdLocationOn>
                            <div className="ml-1 text-sm text-gray-700">Bangladesh</div>
                        </div>
                    </div>
                    <div className="text-blue-500 text-sm font-semibold">Student</div>
                    <div className="text-sm mt-4 text-gray-700">Ratings</div>
                    <div className="flex items-center ">
                        <div className="font-semibold">{ratingvlaue}</div>
                        <div className="flex items-center">
                            <div className="pl-2">
                                <ReactStars
                                    count={5}
                                    value={ratingvlaue}
                                    activeColor="#ffd700"
                                    edit={false}
                                />
                            </div>
                            <div className="ml-20">
                                <Link href="/user/edit">
                                    <div className="flex bg-blue-500 text-white text-sm font-semibold px-4 py-2 rounded">Edit profile <FaEdit size={22} color="black" className="ml-3"></FaEdit></div>
                                </Link>
                            </div>
                        </div>

                    </div>
                    <div className="flex mt-8 border-b-2 border-gray-400 w-full">
                        <div className=" flex items-center w-auto border-b-2 border-y-tahiti">
                            <FaUserAlt></FaUserAlt>
                            <div className="ml-4 text-lg">About</div>
                        </div>
                    </div>
                    <div className="text-xs text-gray-400 mt-6">
                        CONTACT INFORMATION
                    </div>

                    <div className="text-md mt-6">
                        <table>
                            <tbody>
                                <tr>
                                    <td className="">Phone </td>
                                    <td className="pl-4">: </td>
                                    <td className="pl-8 text-tahiti">01740214137</td>
                                </tr>

                                <tr>
                                    <td className="py-6">Address </td>
                                    <td className="pl-4">: </td>
                                    <td className="pl-8">525 E 68th street <br /> Dhaka, Bangladesh</td>
                                </tr>
                                <tr>
                                    <td>E-mail </td>
                                    <td className="pl-4">: </td>
                                    <td className="pl-8 text-tahiti">tanvirrubayedtauhid@gmail.com</td>
                                </tr>
                                <tr>
                                    <td className="py-6">Site </td>
                                    <td className="pl-4">: </td>
                                    <td className="pl-8 text-tahiti">https://www.facebook.com/tanvir.rubayed.5/</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>

                    <div className="text-xs text-gray-400 mt-8">
                        BASIC INFORMATION
                    </div>
                    <div className="text-md mt-6">
                        <table>
                            <tbody>
                                <tr>
                                    <td className="">Birthday</td>
                                    <td className="pl-4">: </td>
                                    <td className="pl-8 text-tahiti">February 24, 1998</td>
                                </tr>
                                <tr>
                                    <td className="py-6">Gender </td>
                                    <td className="pl-4">: </td>
                                    <td className="pl-8">Male</td>
                                </tr>
                            </tbody>

                        </table>

                    </div>

                    <div className="flex mt-8 border-b-2 border-gray-400 w-full">
                        <div className=" flex items-center w-auto border-b-2 border-y-tahiti">
                            <FaBrain></FaBrain>
                            <div className="ml-4 text-lg">Image Classification</div>
                        </div>
                    </div>

                    <div className="text-xs text-gray-400 mt-8">
                        CLASSIFICATION INFORMATION
                    </div>

                    <div className="text-md mt-6">
                        <table>
                            <tbody>
                                <tr>
                                    <td className="">Toal image classification</td>
                                    <td className="pl-4">: </td>
                                    <td className="pl-8 text-tahiti">28</td>
                                </tr>
                                <tr>
                                    <td className="py-6">Average ratings </td>
                                    <td className="pl-4">: </td>
                                    <td className="pl-8">4.5</td>
                                </tr>
                                <tr>
                                    <td className="">Average confidence </td>
                                    <td className="pl-4">: </td>
                                    <td className="pl-8">0.04342</td>
                                </tr>
                            </tbody>

                        </table>

                    </div>

                </div>

            </div>




        </div>
    );
}
export default ProfileInfo;