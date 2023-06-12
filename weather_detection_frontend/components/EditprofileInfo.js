import { use, useDebugValue, useEffect, useState } from "react";
import Image from "next/image";

import { MdLocationOn, MdModeEdit, MdVideocamOff, MdVisibility, MdVisibilityOff } from "react-icons/md"
import { FaUserAlt } from "react-icons/fa"
import { FaEdit } from "react-icons/fa"
import ReactStars from "react-rating-stars-component";
import styles from "../styles/Blog.module.css";
import { FormControl, FormControlLabel, FormLabel, IconButton, Input, InputAdornment, InputLabel, OutlinedInput, Radio, RadioGroup } from "@mui/material";
import axios from "axios";


function ProfileInfo() {

    const [showPassword, setShowPassword] = useState(false);
    const [changeUerData, setChangeUserData] = useState({});
    const [userdetails, setuserDetails] = useState({});
    const [profilePhoto, setProfilePhoto] = useState("");
    const [uid, setUid] = useState("")

    let item;
    useEffect(() => {
        item = sessionStorage.getItem('userid')
        setUid(item)

        axios.get(`http://localhost:4000/userdata/${item}`).then(res => {
            setuserDetails(res.data[0]);
            setProfilePhoto(res.data[0].imageurl)
        })

    }, [])

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const convertImagetoBase64 = (e) => {

        let reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => {
            // console.log(reader.result);
            setProfilePhoto(reader.result);
        }
        reader.onerror = (e) => {
            console.log("error", e);
        }

    }

    let firstname, email, number, profession, gender, birthday, address, city, state, zip, country;
    const handleFirstname = (e) => {
        firstname = e.target.value;
    }

    const handleEmail = (e) => {
        email = e.target.value;
    }
    const handleNumber = (e) => {
        number = e.target.value;
    }
    const handleProfession = (e) => {
        profession = e.target.value;
    }
    const handleGender = (e) => {
        gender = e.target.value;
    }
    const handleBirthday = (e) => {
        birthday = e.target.value;
    }
    const handleAddress = (e) => {
        address = e.target.value;
    }
    const handleCity = (e) => {
        city = e.target.value;
    }
    const handleState = (e) => {
        state = e.target.value;
    }
    const handleZip = (e) => {
        zip = e.target.value;
    }
    const handleCountry = (e) => {
        country = e.target.value;
    }




    const handleSubmit = () => {
        setChangeUserData({
            "uid": uid,
            "userName": firstname || userdetails.userName,
            "email": email || userdetails.email,
            "phone": number || userdetails.phone,
            "profession": profession || userdetails.profession,
            "gender": gender || userdetails.gender,
            "birthday": birthday || userdetails.birthday,
            "address": address || userdetails.address,
            "city": city || userdetails.city,
            "state": state || userdetails.state,
            "zip": zip || userdetails.zip,
            "country": country || userdetails.country,
            "imageurl": profilePhoto || "",

        })

        if (changeUerData.uid) {
            axios.post(`http://localhost:4000/update-userinfo`, changeUerData)
                .then(res => {
                    console.log(res);
                });
        }



    }

    var curr = new Date();
    curr.setDate(curr.getDate() + 3);
    var date = curr.toISOString().substring(0, 10);


    const [ratingvlaue, setRatingValue] = useState(3.7);

    return (
        <div className="px-36 py-12 w-full bg-gray-200">


            <div className=" rounded-lg shadow-2xl bg-white">
                <div className="py-6 px-10 text-3xl shadow">Edit Profile</div>
                <div className=" flex flex-col items-center px-32 py-16">

                    <div className="relative">
                        <label className="flex flex-col w-full items-center justify-center">

                            {
                                profilePhoto == "" ? <img
                                    className="rounded-full h-40 w-40 ring-2 ring-blue-500 hover:opacity-90 hover:cursor-pointer"
                                    src="https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916__340.png"
                                    alt="pro pic"
                                /> : <img
                                    className="rounded-full h-40 w-40 ring-2 ring-blue-500 hover:opacity-90 hover:cursor-pointer"
                                    src={profilePhoto}
                                    alt="pro pic"
                                />
                            }

                            <div className="absolute p-2 rounded-full bg-edit-con-bg right-1 bottom-16 hover:bg-gray-700 hover:cursor-pointer">
                                <MdModeEdit size={15} color="#ffffff"></MdModeEdit>
                            </div>

                            <div className="mt-4 bg-edit-con-bg text-white rounded py-1 px-2">Change picture</div>

                            <input onChange={convertImagetoBase64} className="hidden" id="dropzone-file" type="file" accept="image/png, image/gif, image/jpeg" />
                        </label>
                    </div>




                    <div className="mt-16">

                        <div>
                            <div className="mt-5">
                                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-500 dark:text-white">Name</label>
                                <input onChange={handleFirstname} defaultValue={userdetails.userName} type="text" id="first_name" class=" border-2 w-full text-gray-800 h-10 rounded pl-8 bg-white border-blue-300 outline-none transition focus:border-blue-500" required />
                            </div>
                        </div>

                        <div>
                            <div className="mt-5">
                                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-500 dark:text-white">Email</label>
                                <input onChange={handleEmail} defaultValue={userdetails.email} type="email" id="first_name" class=" border-2 w-full text-gray-800 h-10 rounded pl-8 bg-white border-blue-300 outline-none transition focus:border-blue-500" required />
                            </div>
                        </div>
                        <div>
                            <div className="mt-5">
                                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-500 dark:text-white">Contact Number</label>
                                <input onChange={handleNumber} defaultValue={userdetails.phone} type="text" id="first_name" class=" border-2 w-full text-gray-800 h-10 rounded pl-8 bg-white border-blue-300 outline-none transition focus:border-blue-500" required />
                            </div>
                        </div>
                        <div>
                            <div className="mt-5">
                                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-500 dark:text-white">Profession</label>
                                <input onChange={handleProfession} defaultValue={userdetails.profession} type="text" id="first_name" class=" border-2 w-full text-gray-800 h-10 rounded pl-8 bg-white border-blue-300 outline-none transition focus:border-blue-500" required />
                            </div>
                        </div>
                        <div className="mt-5">
                            <FormControl>
                                <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                                <RadioGroup
                                    onChange={handleGender}

                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue={userdetails.gender}
                                    name="radio-buttons-group"
                                >
                                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                                </RadioGroup>
                            </FormControl>
                        </div>

                        <div>
                            <div className="mt-5">
                                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-500 dark:text-white">Birthday</label>
                                <input onChange={handleBirthday} defaultValue={date} type="date" id="first_name" class=" border-2 w-full text-gray-800 h-10 rounded pl-8 bg-white border-blue-300 outline-none transition focus:border-blue-500" required />
                            </div>
                        </div>
                        <div>
                            <div className="mt-5">
                                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-500 dark:text-white">Address</label>
                                <input onChange={handleAddress} defaultValue={userdetails.address} type="text" id="first_name" class=" border-2 w-full text-gray-800 h-10 rounded pl-8 bg-white border-blue-300 outline-none transition focus:border-blue-500" required />
                            </div>
                        </div>
                        <div className="flex mt-5">
                            <div className="mr-5">
                                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-500 dark:text-white">City</label>
                                <input onChange={handleCity} defaultValue={userdetails.city} type="text" id="first_name" class=" border-2 w-full text-gray-800 h-10 rounded pl-8 bg-white border-blue-300 outline-none transition focus:border-blue-500" required />
                            </div>
                            <div className="ml-5">
                                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-500 dark:text-white">State</label>
                                <input onChange={handleState} defaultValue={userdetails.state} type="text" id="first_name" class=" border-2 w-full text-gray-800 h-10 rounded pl-8 bg-white border-blue-300 outline-none transition focus:border-blue-500" required />
                            </div>
                        </div>
                        <div className="flex mt-5">
                            <div className="mr-5">
                                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-500 dark:text-white">Zip code</label>
                                <input onChange={handleZip} defaultValue={userdetails.zip} type="text" id="first_name" class=" border-2 w-full text-gray-800 h-10 rounded pl-8 bg-white border-blue-300 outline-none transition focus:border-blue-500" required />
                            </div>
                            <div className="ml-5">
                                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-500 dark:text-white">Country</label>
                                <input onChange={handleCountry} defaultValue={userdetails.country} type="text" id="first_name" class=" border-2 w-full text-gray-800 h-10 rounded pl-8 bg-white border-blue-300 outline-none transition focus:border-blue-500" required />
                            </div>
                        </div>


                        {/* <div className=" flex justify-between mt-5">
                            <div className="mr-5">
                                <FormControl size="small" variant="outlined">
                                    <InputLabel htmlFor="outlined-adornment-password">Current Password</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-password"
                                        type={showPassword ? 'text' : 'password'}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                >
                                                    {showPassword ? <MdVisibility /> : <MdVisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        label="Password"
                                    />
                                </FormControl>
                            </div>
                            <div className="ml-5">
                                <FormControl size="small" variant="outlined">
                                    <InputLabel htmlFor="outlined-adornment-password">New Password</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-password"
                                        type={showPassword ? 'text' : 'password'}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                >
                                                    {showPassword ? <MdVisibility /> : <MdVisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        label="Password"
                                    />
                                </FormControl>
                            </div>

                        </div> */}


                    </div>
                    <div onClick={handleSubmit} className="mt-8 px-7 py-2 text-white font-medium rounded  bg-edit-con-bg hover:cursor-pointer ">Save</div>
                </div>
            </div>

        </div>
    );
}
export default ProfileInfo;