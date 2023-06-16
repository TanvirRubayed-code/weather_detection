import { useDebugValue, useEffect, useState } from "react";
import Image from "next/image";
import summer from "../image/Summer.jpg";
import { MdLocationOn } from "react-icons/md"
import { FaUserAlt } from "react-icons/fa"
import { FaEdit } from "react-icons/fa"
import ReactStars from "react-rating-stars-component";
import styles from "../styles/Blog.module.css";
import { FaBrain } from "react-icons/fa"
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";


function ProfileInfo() {

    const router = useRouter();
    const [userdetails, setuserDetails] = useState({});
    const [predictions, setPrediction] = useState(null);


    let item;
    useEffect(() => {
        item = sessionStorage.getItem('userid')
        if (!item) {
            router.push('/')
        }
    }, [])


    useEffect(() => {
        axios.get(`http://localhost:4000/get-prediction/${item}`).then(res => {

            setPrediction(res.data.length);

        })
    }, [])


    const [ratingvlaue, setRatingValue] = useState(3.7);

    // useEffect(() => {

    //     axios.get(`http://localhost:4000/userdata/${item}`).then(res => {
    //         setuserDetails(res.data[0]);
    //     })

    // }, [])



    // -----------fetch user data using graphql ---------------


    var query = `query GetUser($item: ID) {
        getUser(id: $item) {
            address
    birthday
    city
    country
    email
    gender
    id
    imageurl
    phone
    profession
    state
    userName
    zip
        }
      }`


    const endpoint = "http://localhost:4001/gql";

    useEffect(() => {
        console.log(typeof (userid));
        fetch(endpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                query,
                variables: { item },
            })
        }).then(res => res.json()).then(data => setuserDetails(data.data.getUser))
    }, [])








    return (
        <div className="px-36 bg-gray-200 py-12 w-full">
            <div className="flex rounded-lg shadow-xl bg-white p-10">

                <div className="w-1/3">
                    <img className="rounded-full ring-2 ring-blue-500 h-60 w-60 hover:opacity-90 " src={userdetails.imageurl}></img>


                    <div className="flex">
                        <div className="text-xs text-gray-400 mt-12 ">
                            SKILLS

                        </div>
                        <div className="w-full ml-2 border-b-2 border-b-gray-400"></div>
                    </div>
                    <div className="mt-4">
                        UI/UX <br />
                        Web-design<br />
                        Mobile Application development<br />
                        Graphics design<br />
                        Video Editing
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
                        <div className=" text-xl m-0 ">{userdetails.userName}</div>
                        <div className="ml-5 flex items-center justify-center">
                            <MdLocationOn color="#EA4335"></MdLocationOn>
                            <div className="ml-1 text-sm text-gray-700">{userdetails.country}</div>
                        </div>
                    </div>
                    <div className="text-blue-500 text-sm font-semibold">{userdetails.profession}</div>
                    <div className="flex items-center">

                        <div className="mt-4">
                            <Link href="/user/edit">
                                <div className="flex bg-blue-500 text-white text-sm font-semibold px-4 py-2 rounded">Edit profile <FaEdit size={22} color="black" className="ml-3"></FaEdit></div>
                            </Link>
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
                                    <td className="pl-8 text-tahiti">{userdetails.phone}</td>
                                </tr>

                                <tr>
                                    <td className="py-6">Address </td>
                                    <td className="pl-4">: </td>
                                    <td className="pl-8">{userdetails.address + ", " + userdetails.city + ", " + userdetails.country + ", " + userdetails.zip}</td>                                </tr>
                                <tr>
                                    <td>E-mail </td>
                                    <td className="pl-4">: </td>
                                    <td className="pl-8 text-tahiti">{userdetails.email}</td>
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
                                    <td className="pl-8 text-tahiti">{userdetails.birthday}</td>
                                </tr>
                                <tr>
                                    <td className="py-6">Gender </td>
                                    <td className="pl-4">: </td>
                                    <td className="pl-8">{userdetails.gender}</td>
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
                                <tr className="">
                                    <td className="">Toal image classification</td>
                                    <td className="pl-4">: </td>
                                    <td className="pl-8 text-tahiti">{predictions}</td>
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