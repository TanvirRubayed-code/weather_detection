import styles from "../styles/single_blog_post.module.css";
import imagedemo from "../image/spring.jpg";
import imageAvatar from "../image/food.jpg";
import Image from "next/image";
import axios from "axios";
import { useEffect, useState } from "react";

import Comment from './Comment';

import { BsHandThumbsUp, BsHandThumbsDown, BsHandThumbsUpFill, BsHandThumbsDownFill, BsFillHandThumbsDownFill } from 'react-icons/bs';

const CommentContainer = ({ postID }) => {

  const [allPostComments, setAllComments] = useState([]);
  const previousComments = new Set([]);
  const previousCommentsArray = [];

  const [comments, setComments] = useState([]);

  //--------------------------get all comments from database-----------------------------  
  useEffect(() => {
    if (postID !== undefined) {
        axios.get(`http://localhost:4000/comments/${postID}`).then(res => {
            setComments(res.data);   
        })
      }
  }, [postID])

  // console.log(comments);
  


  const handleAddComment = e => {

    const commentCon = document.getElementById('comment_content');
    const comment = commentCon.value;

    //----------------------------upload comment to database----------------------------

    let data = { userName: "tauhid", comment };
    
    axios.post(`http://localhost:4000/comments/${postID}`, data)
            .then(res => {
                if (res.data?.insertedId) {
                    data = { ...data }
                    setComments([...comments, data]);
                    // console.log(res.data);
                    commentCon.value = ""
                }
                else {
                    alert("failed")
                }
            })
  }
  return (
    <div className="mt-10 w-1/2">
      <form >
        <div class="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
          <div class="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
            <label for="comment" class="sr-only">Your comment</label>
            <textarea id="comment_content" rows="4" class="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Write a comment..." required></textarea>
          </div>
          <div class="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
            <div class="inline-flex cursor-pointer items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
              onClick={handleAddComment}>
              Post comment
            </div>
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

      {
        comments.map(singleComment => 
          <div className="mr-0">
            <article class="mt-2 rounded bg-gray-100 p-6 text-base  border-t border-gray-200 dark:border-gray-700 dark:bg-gray-900">
              <footer class="flex justify-between items-center mb-2">
                <div class="flex items-center">
                  <p class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white"><img
                    class="mr-2 w-6 h-6 rounded-full"
                    src="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
                    alt="Helene Engels"></img>{singleComment.userName}</p>
                  <p class="text-sm text-gray-600 dark:text-gray-400"><time pubdate datetime="2022-06-23"
                    title="June 23rd, 2022">{singleComment.comment_date}</time></p>
                </div>


              </footer>
              <p class="text-gray-500 dark:text-gray-400">{singleComment.comment}</p>
              <div class="flex items-center mt-4 space-x-4">
                <button type="button"
                  class="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400">
                  <svg aria-hidden="true" class="mr-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                  Reply
                </button>
              </div>
            </article>
          </div>

        )
      }

    </div>
  );
}

export default CommentContainer;