import styles from "../styles/single_blog_post.module.css";
import imagedemo from "../image/spring.jpg";
import imageAvatar from "../image/food.jpg";
import Image from "next/image";

import { useEffect, useState } from "react";
import StarRatings from 'react-star-ratings';

import { BsHandThumbsUp, BsHandThumbsDown, BsHandThumbsUpFill, BsHandThumbsDownFill, BsFillHandThumbsDownFill } from 'react-icons/bs';




function Post({ title }) {

  const [rating, setRating] = useState(4);

  const [likeCount, setLikeCount] = useState(50);
  const [dislikeCount, setDislikeCount] = useState(25);

  const [activeBtn, setActiveBtn] = useState("none");

  const [fullpost, setFullPost] = useState(null);

 

  // ----------------like and dislike handeling ------------

  const handleLikeClick = () => {
    if (activeBtn === "none") {
      setLikeCount(likeCount + 1);
      setActiveBtn("like");
      return;
    }

    if (activeBtn === 'like') {
      setLikeCount(likeCount - 1);
      setActiveBtn("none");
      return;
    }

    if (activeBtn === "dislike") {
      setLikeCount(likeCount + 1);
      setDislikeCount(dislikeCount - 1);
      setActiveBtn("like");
    }
  };

  const handleDisikeClick = () => {
    if (activeBtn === "none") {
      setDislikeCount(dislikeCount + 1);
      setActiveBtn("dislike");
      return;
    }

    if (activeBtn === 'dislike') {
      setDislikeCount(dislikeCount - 1);
      setActiveBtn("none");
      return;
    }

    if (activeBtn === "like") {
      setDislikeCount(dislikeCount + 1);
      setLikeCount(likeCount - 1);
      setActiveBtn("dislike");
    }
  };


  // ----------------like and dislike handeling end------------




  const changeRating = (newRating) => {
    setRating(newRating);
    console.log(newRating);
  }



  useEffect(() => {
    fetch(`http://localhost:4000/single-post?posttitle=${title}`)
      .then(res => res.json())
      .then(data => setFullPost(data[0]));
  }, [title])


  // console.log(fullpost);


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
        <div className="mt-10 w-1/2">
          <form >
            <div class="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
              <div class="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                <label for="comment" class="sr-only">Your comment</label>
                <textarea id="comment" rows="4" class="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Write a comment..." required></textarea>
              </div>
              <div class="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
                <button type="submit" class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                  Post comment
                </button>
                <div class="flex pl-0 space-x-1 sm:pl-2">
                  <button type="button" class="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clip-rule="evenodd"></path></svg>
                    <span class="sr-only">Attach file</span>
                  </button>
                  <button type="button" class="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path></svg>
                    <span class="sr-only">Set location</span>
                  </button>
                  <button type="button" class="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd"></path></svg>
                    <span class="sr-only">Upload image</span>
                  </button>
                </div>
              </div>
            </div>
          </form>
          <p class="ml-auto text-xs text-gray-500 dark:text-gray-400">Remember, contributions to this topic should follow our <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline">Community Guidelines</a>.</p>

          <div className="mr-0">
            <article class="mt-2 rounded bg-gray-100 p-6 text-base  border-t border-gray-200 dark:border-gray-700 dark:bg-gray-900">
              <footer class="flex justify-between items-center mb-2">
                <div class="flex items-center">
                  <p class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white"><img
                    class="mr-2 w-6 h-6 rounded-full"
                    src="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
                    alt="Helene Engels"></img>Helene Engels</p>
                  <p class="text-sm text-gray-600 dark:text-gray-400"><time pubdate datetime="2022-06-23"
                    title="June 23rd, 2022">Jun. 23, 2022</time></p>
                </div>


              </footer>
              <p class="text-gray-500 dark:text-gray-400">Thanks for sharing this. I do came from the Backend development and explored some of the tools to design my Side Projects.</p>
              <div class="flex items-center mt-4 space-x-4">
                <button type="button"
                  class="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400">
                  <svg aria-hidden="true" class="mr-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                  Reply
                </button>
              </div>
            </article>
          </div>

          <article class="bg-gray-100 p-6 text-base  border-t border-gray-200 dark:border-gray-700 dark:bg-gray-900">
            <footer class="flex justify-between items-center mb-2">
              <div class="flex items-center">
                <p class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white"><img
                  class="mr-2 w-6 h-6 rounded-full"
                  src="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
                  alt="Helene Engels"></img>Helene Engels</p>
                <p class="text-sm text-gray-600 dark:text-gray-400"><time pubdate datetime="2022-06-23"
                  title="June 23rd, 2022">Jun. 23, 2022</time></p>
              </div>


            </footer>
            <p class="text-gray-500 dark:text-gray-400">Thanks for sharing this. I do came from the Backend development and explored some of the tools to design my Side Projects.</p>
            <div class="flex items-center mt-4 space-x-4">
              <button type="button"
                class="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400">
                <svg aria-hidden="true" class="mr-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                Reply
              </button>
            </div>
          </article>

        </div>


        <div className="flex flex-col rounded-lg bg-white mt-10 items-center justify-center content-center h-80 w-1/2 mx-auto">

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

          <div className="mt-4">
            <h2 className=" text-4xl text-center py-3">Rate this post</h2>
            <StarRatings
              rating={rating}
              starRatedColor="darkblue"
              starDimension="40px"
              starSpacing="15px"
              changeRating={changeRating}
              numberOfStars={5}
              name='rating'
            />
            <h3 className="text-center py-4">Average ratings: 3.4</h3>
          </div>

        </div>


      </div>


      <div className="flex justify-center mt-20">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/AGcTCvn-a6g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    </div>
  );
}

export default Post;
