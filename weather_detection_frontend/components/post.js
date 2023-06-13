import styles from "../styles/single_blog_post.module.css";
import imagedemo from "../image/spring.jpg";
import imageAvatar from "../image/food.jpg";
import Image from "next/image";

import { useEffect, useState } from "react";
import StarRatings from 'react-star-ratings';

import LikeDislike from './LikeDislike';
import CommentContainer from './CommentContainer';

import { BsHandThumbsUp, BsHandThumbsDown, BsHandThumbsUpFill, BsHandThumbsDownFill, BsFillHandThumbsDownFill } from 'react-icons/bs';
import axios from "axios";




function Post({ title }) {

  const [rating, setRating] = useState(0);


  const [fullpost, setFullPost] = useState({});

  const [userid, setUserId] = useState('');
  const [ratingDetails, setRatingDetails] = useState([]);
  const [givenRating, setGivenRating] = useState(0);
  const [change, setChange] = useState(false);
  const [updater, setUpdater] = useState(false);
  const [reloader, setReloader] = useState(false);



  useEffect(() => {
    const uid = sessionStorage.getItem("userid");
    setUserId(uid);
  }, [])




  useEffect(() => {
    axios.get(`http://localhost:4000/get-ratings`)
      .then(res => setRatingDetails(res.data))
  }, [reloader]);


  let grt = 0;
  let ratingFlag = false;
  let addRating = false;
  let previousSum = 0;
  const rateDetail = [];
  let ratingcount = 0;

  ratingDetails.map(rating => {
    if (rating._id == fullpost?._id) {
      addRating = true;
      rating.ratingdetails.map(gRating => {
        previousSum += gRating.rating;
        ratingcount++;

        if (gRating._id == userid) {
          grt = gRating.rating;
          ratingFlag = true;
        }
        ratingFlag = false;
      })
    }

  })

  console.log(addRating);



  useEffect(() => {
    fetch(`http://localhost:4000/single-post?posttitle=${title}`)
      .then(res => res.json())
      .then(data => setFullPost(data[0]));
  }, [title])

  let averageRate = 0;
  averageRate = previousSum / ratingcount;

  const changeRating = (newRating) => {
    setRating(newRating);
    setReloader(!reloader);


    setGivenRating(newRating);

    const rating = {
      _id: fullpost?._id,
      posttitle: fullpost?.postTitle,
      ratingdetails: [
        {
          _id: userid,
          rating: newRating
        }
      ]

    }

    if (addRating && !ratingFlag && !updater) {
      setUpdater(true);
      axios.post('http://localhost:4000/update-ratings', rating)
        .then(res => console.log(res))
    }
    else if (ratingFlag || change || updater) {
      console.log("update");
      axios.post('http://localhost:4000/update-previous-rating', rating)
        .then(res => console.log(res))

    }

    else if (!addRating) {
      setChange(true);
      axios.post(`http://localhost:4000/post-ratings`, rating)
        .then(res => console.log(res))

    }

  }


  return (
    <div className="py-12 px-32 w-full bg-gray-200">
      <div className="pb-10 bg-white rounded-lg" >
        <div className="py-10 px-20 shadow-md">
          <h1 className="text-4xl">
            {fullpost?.postTitle}
          </h1>
        </div>
        <div className=" px-20">
          <div className="flex mt-5 ">
            <Image
              className="rounded-full h-10 w-10"
              src={imageAvatar}
              alt="Picture of the author"
            ></Image>
            <div className="flex flex-col pl-4">
              <small className="">By Jordan Mirchev</small>
              <small className="">Date: November 20, 2020</small>
            </div>


          </div>


          <div className={styles.image_height}>
            <div className="h-full mt-8 flex justify-center" >
              {/* <Image
                className=" rounded  object-cover "
                src={imagedemo}
                alt="Picture of the author"
              ></Image> */}
              <img src={fullpost?.image} className=" rounded  object-cover "></img>
            </div>
          </div>


          <div className={styles.post}>
            <div className={styles.main_post}>
              {/* {fullpost?.post} */}
              <div dangerouslySetInnerHTML={{ __html: fullpost?.post }}></div>
            </div>



            <div className={styles.popular_post}>
              <div className="shadow-xl bg-gray-100 pb-2" >
                <h3 className=" px-2 py-2 shadow" >POPULAR POSTS</h3>
                <div className="flex h-16 mx-2 my-2 items-center justify-center bg-white shadow-xl hover:bg-gray-100 hover:cursor-pointer">
                  <Image
                    className="h-full w-12 object-none"
                    src={imagedemo}
                    alt="Picture of the author"
                  ></Image>
                  <h2 className="text-xs pl-2 overflow-hidden">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Magnam, nulla!
                  </h2>
                </div>
                <div className="flex h-16 mx-2 my-2 items-center justify-center bg-white shadow-xl hover:bg-gray-100 hover:cursor-pointer">
                  <Image
                    className="h-full w-12 object-none"
                    src={imagedemo}
                    alt="Picture of the author"
                  ></Image>
                  <h2 className="text-xs pl-2 overflow-hidden">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Magnam, nulla!
                  </h2>
                </div>
                <div className="flex h-16 mx-2 my-2 items-center justify-center bg-white shadow-xl hover:bg-gray-100 hover:cursor-pointer">
                  <Image
                    className="h-full w-12 object-none"
                    src={imagedemo}
                    alt="Picture of the author"
                  ></Image>
                  <h2 className="text-xs pl-2 overflow-hidden">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Magnam, nulla!
                  </h2>
                </div>
                <div className="flex h-16 mx-2 my-2 items-center justify-center bg-white shadow-xl hover:bg-gray-100 hover:cursor-pointer">
                  <Image
                    className="h-full w-12 object-none"
                    src={imagedemo}
                    alt="Picture of the author"
                  ></Image>
                  <h2 className="text-xs pl-2 overflow-hidden">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Magnam, nulla!
                  </h2>
                </div>


              </div>

            </div>
          </div>


        </div>

      </div>


      <div className="flex">


        <CommentContainer postID={fullpost?._id}></CommentContainer>

        <div className="flex flex-col rounded-lg bg-white mt-10 items-center justify-center content-center h-80 w-1/2 mx-auto">

          <LikeDislike postID={fullpost?._id}></LikeDislike>


          <div className="mt-4">
            <h2 className=" text-4xl text-center py-3">Rate this post</h2>
            {
              givenRating > 0 ? <StarRatings
                rating={givenRating}
                starRatedColor="darkblue"
                starDimension="40px"
                starSpacing="15px"
                changeRating={changeRating}
                numberOfStars={5}
                name='rating'
              /> : <StarRatings
                rating={grt}
                starRatedColor="darkblue"
                starDimension="40px"
                starSpacing="15px"
                changeRating={changeRating}
                numberOfStars={5}
                name='rating'
              />
            }
            <h3 className="text-center py-4">Average ratings: {averageRate.toFixed(1) >= 0 ? averageRate.toFixed(1) : 0}</h3>
          </div>

        </div>


      </div>



    </div>
  );
}

export default Post;
