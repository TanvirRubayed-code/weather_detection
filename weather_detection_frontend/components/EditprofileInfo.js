import { useState } from "react";
import Image from "next/image";
import summer from "../image/Summer.jpg";
import { MdLocationOn, MdModeEdit, MdVideocamOff, MdVisibility, MdVisibilityOff } from "react-icons/md"
import { FaUserAlt } from "react-icons/fa"
import { FaEdit } from "react-icons/fa"
import ReactStars from "react-rating-stars-component";
import styles from "../styles/Blog.module.css";
import { FormControl, FormControlLabel, FormLabel, IconButton, Input, InputAdornment, InputLabel, OutlinedInput, Radio, RadioGroup } from "@mui/material";



function ProfileInfo() {

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const [ratingvlaue, setRatingValue] = useState(3.7);

    return (
        <div className="px-36 py-12 w-full">


            <div className=" rounded shadow-xl bg-gray-100">
                <div className="p-6 text-3xl">Edit Profile</div>
                <div className=" flex flex-col items-center px-32 py-16">

                    <div className="relative">
                        <label className="flex flex-col w-full items-center justify-center">

                            <Image
                                className="rounded-full h-40 w-40 ring-2 ring-blue-500 hover:opacity-90 hover:cursor-pointer"
                                src={summer}
                                alt="Picture of the author"
                            />
                            <div className="absolute p-2 rounded-full bg-edit-con-bg right-1 bottom-16 hover:bg-gray-700 hover:cursor-pointer">
                                <MdModeEdit size={15} color="#ffffff"></MdModeEdit>
                            </div>

                            <div className="mt-4 bg-edit-con-bg text-white rounded py-1 px-2">Change picture</div>

                            <input className="hidden" id="dropzone-file" type="file" accept="image/png, image/gif, image/jpeg" />
                        </label>
                    </div>




                    <div className="mt-16">
                        <div className="flex">
                            <div className="mr-5">
                                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-500 dark:text-white">First Name</label>
                                <input type="text" id="first_name" class=" border-2 w-full text-gray-800 h-10 rounded pl-8 bg-white border-blue-300 outline-none transition focus:border-blue-500" defaultValue="Tanvir Rubayed" required />
                            </div>
                            <div className="ml-5">
                                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-500 dark:text-white">Last Name</label>
                                <input type="text" id="first_name" class=" border-2 w-full text-gray-800 h-10 rounded pl-8 bg-white border-blue-300 outline-none transition focus:border-blue-500" defaultValue="Tauhid" required />
                            </div>
                        </div>

                        <div>
                            <div className="mt-5">
                                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-500 dark:text-white">Email</label>
                                <input type="email" id="first_name" class=" border-2 w-full text-gray-800 h-10 rounded pl-8 bg-white border-blue-300 outline-none transition focus:border-blue-500" defaultValue="exanple@gmail.com" required />
                            </div>
                        </div>
                        <div>
                            <div className="mt-5">
                                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-500 dark:text-white">Contact Number</label>
                                <input type="text" id="first_name" class=" border-2 w-full text-gray-800 h-10 rounded pl-8 bg-white border-blue-300 outline-none transition focus:border-blue-500" defaultValue="01740214137" required />
                            </div>
                        </div>
                        <div>
                            <div className="mt-5">
                                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-500 dark:text-white">Profession</label>
                                <input type="text" id="first_name" class=" border-2 w-full text-gray-800 h-10 rounded pl-8 bg-white border-blue-300 outline-none transition focus:border-blue-500" defaultValue="Student" required />
                            </div>
                        </div>
                        <div className="mt-5">
                            <FormControl>
                                <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="female"
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
                                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-500 dark:text-white">Website</label>
                                <input type="text" id="first_name" class=" border-2 w-full text-gray-800 h-10 rounded pl-8 bg-white border-blue-300 outline-none transition focus:border-blue-500" defaultValue="https://www.example.com" required />
                            </div>
                        </div>
                        <div>
                            <div className="mt-5">
                                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-500 dark:text-white">Birthday</label>
                                <input type="date" id="first_name" class=" border-2 w-full text-gray-800 h-10 rounded pl-8 bg-white border-blue-300 outline-none transition focus:border-blue-500" required />
                            </div>
                        </div>
                        <div>
                            <div className="mt-5">
                                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-500 dark:text-white">Address</label>
                                <input type="text" id="first_name" class=" border-2 w-full text-gray-800 h-10 rounded pl-8 bg-white border-blue-300 outline-none transition focus:border-blue-500" defaultValue="2 no gate, University of Chittagong" required />
                            </div>
                        </div>
                        <div className="flex mt-5">
                            <div className="mr-5">
                                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-500 dark:text-white">City</label>
                                <input type="text" id="first_name" class=" border-2 w-full text-gray-800 h-10 rounded pl-8 bg-white border-blue-300 outline-none transition focus:border-blue-500" defaultValue="Chittagong" required />
                            </div>
                            <div className="ml-5">
                                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-500 dark:text-white">State</label>
                                <input type="text" id="first_name" class=" border-2 w-full text-gray-800 h-10 rounded pl-8 bg-white border-blue-300 outline-none transition focus:border-blue-500" defaultValue="" required />
                            </div>
                        </div>
                        <div className="flex mt-5">
                            <div className="mr-5">
                                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-500 dark:text-white">Zip code</label>
                                <input type="text" id="first_name" class=" border-2 w-full text-gray-800 h-10 rounded pl-8 bg-white border-blue-300 outline-none transition focus:border-blue-500" defaultValue="5710" required />
                            </div>
                            <div className="ml-5">
                                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-500 dark:text-white">Country</label>
                                <input type="text" id="first_name" class=" border-2 w-full text-gray-800 h-10 rounded pl-8 bg-white border-blue-300 outline-none transition focus:border-blue-500" defaultValue="Bangladesh" required />
                            </div>
                        </div>
                        <div>
                            <div className="mt-5">
                                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-500 dark:text-white">Current Password</label>
                                <input type="password" id="first_name" class=" border-2 w-full text-gray-800 h-10 rounded pl-8 bg-white border-blue-300 outline-none transition focus:border-blue-500" defaultValue="" required />
                            </div>
                        </div>
                        <div>
                            <div className="mt-5">
                                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-500 dark:text-white">New Password</label>
                                <input type="password" id="first_name" class=" border-2 w-full text-gray-800 h-10 rounded pl-8 bg-white border-blue-300 outline-none transition focus:border-blue-500" defaultValue="" required />
                            </div>
                        </div>

                        <div className=" flex justify-between mt-5">
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

                        </div>


                    </div>
                    <div className="mt-8 px-7 py-2 text-white font-medium rounded  bg-edit-con-bg hover:cursor-pointer ">Save</div>
                </div>
            </div>

        </div>
    );
}
export default ProfileInfo;