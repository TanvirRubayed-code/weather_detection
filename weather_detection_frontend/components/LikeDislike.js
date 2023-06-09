import styles from "../styles/single_blog_post.module.css";
import imagedemo from "../image/spring.jpg";
import imageAvatar from "../image/food.jpg";
import Image from "next/image";
import axios from "axios";
import { useEffect, useState } from "react";

import Comment from './Comment';

import { BsHandThumbsUp, BsHandThumbsDown, BsHandThumbsUpFill, BsHandThumbsDownFill, BsFillHandThumbsDownFill, BsAlarm } from 'react-icons/bs';

const LikeDislike = ({ postID }) => {

    const [likeCount, setLikeCount] = useState(50);
    const [dislikeCount, setDislikeCount] = useState(25);

    const [activeBtn, setActiveBtn] = useState("none");

    const userName = "saif";

    const [newUser, setNewUser] = useState(true);

    const [allLikesDislikes, setAllLikeDislike] = useState([]);

    
    //------------------fetches all likes and dislikes--------------
    
    useEffect(() => {
        if (postID !== undefined) {
            axios.get(`http://localhost:4000/get-like-dislike/${postID}`).then(res => {
                setAllLikeDislike(res.data);
                // console.log(res.data.length);
            })
        }
    }, [postID])


    //-------------------------fetches only likes------------------------

    useEffect(() => {
        if (postID !== undefined) {
            let data = { activeState: "like" };
                axios.post(`http://localhost:4000/get-like-or-dislike/${postID}`, data).then(res => {
                    console.log(res.data.length);
                    setLikeCount(res.data.length);
                })
        }
    }, [postID])


    //-------------------------fetches only dislikes------------------------

    useEffect(() => {
        if (postID !== undefined) {
            let data = { activeState: "dislike" };
                axios.post(`http://localhost:4000/get-like-or-dislike/${postID}`, data).then(res => {
                    console.log(res.data.length);
                    setDislikeCount(res.data.length);
                })
        }
    }, [postID])


    //-------------------------fetches user's like, dislike, or none------------------------

    useEffect(() => {
        if (postID !== undefined) {
            let data = { userName };
                axios.post(`http://localhost:4000/get-user-like-dislike/${postID}`, data).then(res => {
                    if(res.data?.activeState == undefined) {
                        setActiveBtn("none");
                        setNewUser(true)
                    } else {
                        setActiveBtn(res.data?.activeState);
                        setNewUser(false);
                    }
                })
        }
    }, [postID])

    // console.log(newUser);
    // console.log(activeBtn);

    // ----------------like and dislike handeling ------------

    const handleLikeClick = () => {
        if (activeBtn === "none") {
            setLikeCount(likeCount + 1);
            setActiveBtn("like");

            if (newUser) {
                let data = { userName, activeState: "like" };
                axios.post(`http://localhost:4000/new-like-dislike/${postID}`, data)
                    .then(res => {
                        if (res.data?.insertedId) {
                            console.log(res.data);
                        }
                        else {
                            alert("failed")
                        }
                    })
            } else {
                let data = { userName, activeState: "like" };
                axios.put(`http://localhost:4000/update-like-dislike/${postID}`, data)
                    .then(res => 
                        console.log(res.data))
            }

            return;
        }

        if (activeBtn === 'like') {
            setLikeCount(likeCount - 1);
            setActiveBtn("none");

            let data = { userName, activeState: "none" };
                axios.put(`http://localhost:4000/update-like-dislike/${postID}`, data)
                    .then(res => 
                        console.log(res.data))
            return;
        }

        if (activeBtn === "dislike") {
            setLikeCount(likeCount + 1);
            setDislikeCount(dislikeCount - 1);
            setActiveBtn("like");

            let data = { userName, activeState: "like" };
                axios.put(`http://localhost:4000/update-like-dislike/${postID}`, data)
                    .then(res => 
                        console.log(res.data))
        }

    };

    const handleDisikeClick = () => {
        if (activeBtn === "none") {
            setDislikeCount(dislikeCount + 1);
            setActiveBtn("dislike");

            if (newUser) {
                let data = { userName, activeState: "dislike" };
                axios.post(`http://localhost:4000/new-like-dislike/${postID}`, data)
                    .then(res => {
                        if (res.data?.insertedId) {
                            console.log(res.data);
                        }
                        else {
                            alert("failed")
                        }
                    })
            } else {
                let data = { userName, activeState: "dislike" };
                axios.put(`http://localhost:4000/update-like-dislike/${postID}`, data)
                    .then(res => 
                        console.log(res.data))

            }
            return;
        }

        if (activeBtn === 'dislike') {
            setDislikeCount(dislikeCount - 1);
            setActiveBtn("none");

            let data = { userName, activeState: "none" };
                axios.put(`http://localhost:4000/update-like-dislike/${postID}`, data)
                    .then(res => 
                        console.log(res.data))
            return;
        }

        if (activeBtn === "like") {
            setDislikeCount(dislikeCount + 1);
            setLikeCount(likeCount - 1);
            setActiveBtn("dislike");

            let data = { userName, activeState: "dislike" };
                axios.put(`http://localhost:4000/update-like-dislike/${postID}`, data)
                    .then(res => 
                        console.log(res.data))
        }
    };


    // ----------------like and dislike handeling end------------

    return (
        <div className="bg-gray-100 w-1/2 flex flex-col items-center justify-center content-center mb-5 p-5 rounded shadow ">
            <div>
                <button onClick={handleLikeClick} className="mr-4">
                    {activeBtn == "like" ? <BsHandThumbsUpFill color="blue" size={35} /> : <BsHandThumbsUp size={35} />}
                </button>

                <button onClick={handleDisikeClick} className="ml-4">
                    {activeBtn == "dislike" ? <BsFillHandThumbsDownFill color="blue" size={35} /> : <BsHandThumbsDown size={35} />}
                </button>
            </div>
            <div className="flex ">
                <h4 className="mr-2">{likeCount} likes </h4>
                <h4 className="ml-2">{dislikeCount} dislikes</h4>
            </div>
        </div>
    );
}

export default LikeDislike;