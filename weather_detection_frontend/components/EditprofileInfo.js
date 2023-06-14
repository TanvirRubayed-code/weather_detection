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
    const [spinner, showSpinner] = useState(false);

    const [country, setCountry] = useState(null);
    const [countryDB, setCountryDB] = useState(null);
    const [state, setState] = useState(null);
    const [stateDB, setStateDB] = useState(null);
    const [district, setDistrict] = useState(null);
    const [districtDB, setDistrictDB] = useState(null);

    const [countryIdx, setcountryIdx] = useState(null);

    const addressData = [
        {
            country: 'Bangladesh',
            states: [
                {
                    state: 'Dhaka',
                    district: ['Dhaka', 'Gazipur', 'Narsingdi', 'Manikganj', 'Munshiganj', 'Narayanganj', 'Mymensingh', 'Sherpur', 'Jamalpur', 'Netrokona', 'Kishoreganj', 'Tangail', 'Faridpur', 'Maradipur', 'Shariatpur', 'Rajbari', 'Gopalganj']
                },
                {
                    state: 'Chattogram',
                    district: ['Brahmanbaria ', 'Comilla', 'Chandpur', 'Lakshmipur', 'Noakhali', 'Feni', 'Khagrachhari', 'Rangamati', 'Bandarban', 'Chittagong', "Cox's Bazar"]
                },
                {
                    state: 'Rajshahi',
                    district: ['Joypurhat ', 'Naogaon', 'Nawabganj', 'Natore', 'Pabna', 'Bogra', 'Rajshahi', 'Sirajganj']
                },
                {
                    state: 'Khulna',
                    district: ['Bagherhat ', 'Chuadanga', 'Jessore', 'Jinaidaha', 'Khulna', 'Magura', 'Meherpur', 'Satkhira']
                }

            ]
        },
        {
            country: 'India',
            states: [
                {
                    state: 'Mumbai',
                    district: ['Dhaka', 'Gazipur', 'Narsingdi', 'Manikganj', 'Munshiganj', 'Narayanganj', 'Mymensingh', 'Sherpur', 'Jamalpur', 'Netrokona', 'Kishoreganj', 'Tangail', 'Faridpur', 'Maradipur', 'Shariatpur', 'Rajbari', 'Gopalganj']
                },
                {
                    state: 'Chennai',
                    district: ['Brahmanbaria ', 'Comilla', 'Chandpur', 'Lakshmipur', 'Noakhali', 'Feni', 'Khagrachhari', 'Rangamati', 'Bandarban', 'Chittagong', "Cox's Bazar"]
                }
            ]
        },
    ]


    let item;
    useEffect(() => {
        item = sessionStorage.getItem('userid')
        setUid(item)

        axios.get(`http://localhost:4000/userdata/${item}`).then(res => {
            setuserDetails(res.data[0]);
            setProfilePhoto(res.data[0].imageurl)


            let i = 1;
            for (const input of addressData) {
                if (input.country == res.data[0].country) {
                    setCountry(input)
                    if (typeof document !== 'undefined') {
                        var select = document.getElementById("countrySelect")
                        select.selectedIndex = i;
                    }

                    let j = 1;

                    for (const input2 of input.states) {
                        if (input2.state == res.data[0].state) {
                            // console.log(input2.state);
                            setState(input2)

                            if (typeof document !== 'undefined') {
                                var select = document.getElementById("stateSelect")
                                select.selectedIndex = j;
                            }

                            let k = 1;

                            for (const input3 of input2.district) {
                                if (input3 == res.data[0].city) {
                                    console.log(input3);

                                    if (typeof document !== 'undefined') {
                                        var select = document.getElementById("districtSelect")
                                        select.selectedIndex = k;
                                    }
                                }
                                k++;
                            }

                        }
                        j++;
                    }

                }
                i++;
            }

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

    let firstname, email, number, profession, gender, birthday, address, city_old, state_old, zip, country_old;
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
        city_old = e.target.value;
    }
    const handleState = (e) => {
        state_old = e.target.value;
    }
    const handleZip = (e) => {
        zip = e.target.value;
    }
    const handleCountry = (e) => {
        country_old = e.target.value;
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
            "city": districtDB || userdetails.city,
            "state": stateDB || userdetails.state,
            "zip": zip || userdetails.zip,
            "country": countryDB || userdetails.country,
            "imageurl": profilePhoto || "",

        })

        if (changeUerData.uid) {
            showSpinner(true)
            axios.post(`http://localhost:4000/update-userinfo`, changeUerData)
                .then(res => {
                    showSpinner(false);
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
                                    name="radio-buttons-group"
                                >
                                    <FormControlLabel value="Female" control={<Radio />} label="Female" />
                                    <FormControlLabel value="Male" control={<Radio />} label="Male" />
                                    <FormControlLabel value="Other" control={<Radio />} label="Other" />
                                </RadioGroup>
                            </FormControl>
                        </div>

                        <div>
                            <div className="mt-5">
                                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-500 dark:text-white">Birthday</label>
                                <input onChange={handleBirthday} defaultValue={userdetails.birthday} type="date" id="first_name" class=" border-2 w-full text-gray-800 h-10 rounded pl-8 bg-white border-blue-300 outline-none transition focus:border-blue-500" required />
                            </div>
                        </div>
                        <div>
                            <div className="mt-5">
                                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-500 dark:text-white">Address</label>
                                <input onChange={handleAddress} defaultValue={userdetails.address} type="text" id="first_name" class=" border-2 w-full text-gray-800 h-10 rounded pl-8 bg-white border-blue-300 outline-none transition focus:border-blue-500" required />
                            </div>
                        </div>
                        <div className="flex items-center justify-center content-center mt-5">

                            <div className="mr-5">
                                <select
                                    id="countrySelect"
                                    onChange={e => {
                                        setCountry(addressData[e.target.selectedIndex - 1])
                                        setCountryDB(addressData[e.target.selectedIndex - 1].country);
                                        setState(null)
                                        setDistrict(null)

                                    }}>
                                    <option>Country</option>
                                    {
                                        addressData.map(allCountry =>
                                            <option value={allCountry.country} >{allCountry.country}</option>
                                        )
                                    }
                                </select>
                            </div>
                            <div className="ml-0">

                                <select
                                    id="stateSelect"
                                    onChange={e => {
                                        country && setState(country.states[e.target.selectedIndex - 1])
                                        setStateDB(country.states[e.target.selectedIndex - 1].state);
                                        setDistrict(null)
                                    }} >
                                    <option>State</option>
                                    {
                                        country && country['states'].map(allState =>
                                            <option value={allState.state}>{allState.state}</option>)
                                    }
                                </select>

                            </div>


                            <div className="mr-5 ml-5">
                                {
                                    <select
                                        id="districtSelect"
                                        onChange={e => {
                                            state && setDistrict(state.district[e.target.selectedIndex - 1])
                                            setDistrictDB(state.district[e.target.selectedIndex - 1]);
                                        }}>
                                        <option>District</option>
                                        {
                                            state && state['district'].map(allDistrict =>
                                                <option value={allDistrict} >{allDistrict}</option>)
                                        }
                                    </select>
                                }
                            </div>
                        </div>


                        <div>
                            <div className=" mt-5">
                                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-500 dark:text-white">Zip code</label>
                                <input onChange={handleZip} defaultValue={userdetails.zip} type="text" id="first_name" class=" border-2 w-full text-gray-800 h-10 rounded pl-8 bg-white border-blue-300 outline-none transition focus:border-blue-500" required />
                            </div>
                        </div>

                        {/* <div className="flex mt-5">

    <div className="mr-5">
        <label for="first_name" class="block mb-2 text-sm font-medium text-gray-500 dark:text-white">Country</label>
        <input onChange={handleCountry} defaultValue={userdetails.country} type="text" id="first_name" class=" border-2 w-full text-gray-800 h-10 rounded pl-8 bg-white border-blue-300 outline-none transition focus:border-blue-500" required />
    </div>
    <div className="ml-5">
        <label for="first_name" class="block mb-2 text-sm font-medium text-gray-500 dark:text-white">State</label>
        <input onChange={handleState} defaultValue={userdetails.state} type="text" id="first_name" class=" border-2 w-full text-gray-800 h-10 rounded pl-8 bg-white border-blue-300 outline-none transition focus:border-blue-500" required />
    </div>
</div>
<div className="flex mt-5">
    <div className="mr-5">
        <label for="first_name" class="block mb-2 text-sm font-medium text-gray-500 dark:text-white">City</label>
        <input onChange={handleCity} defaultValue={userdetails.city} type="text" id="first_name" class=" border-2 w-full text-gray-800 h-10 rounded pl-8 bg-white border-blue-300 outline-none transition focus:border-blue-500" required />
    </div>
    <div className="ml-5">
        <label for="first_name" class="block mb-2 text-sm font-medium text-gray-500 dark:text-white">Zip code</label>
        <input onChange={handleZip} defaultValue={userdetails.zip} type="text" id="first_name" class=" border-2 w-full text-gray-800 h-10 rounded pl-8 bg-white border-blue-300 outline-none transition focus:border-blue-500" required />
    </div>
</div> */}



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
                    {
                        spinner == true ? <div class="text-center mt-8">
                            <div role="status">
                                <svg aria-hidden="true" class="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                </svg>
                                <span class="sr-only">Loading...</span>
                            </div>
                        </div> : <div onClick={handleSubmit} className="mt-8 px-7 py-2 text-white font-medium rounded  bg-edit-con-bg hover:cursor-pointer ">Save</div>

                    }
                </div>
            </div>

        </div>
    );
}
export default ProfileInfo;