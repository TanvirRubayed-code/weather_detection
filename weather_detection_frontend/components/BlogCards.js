import styles from "../styles/Blog.module.css";
import SingleBlogCard from "../components/singleblogCard";
import BlogSideSection from "./blogSideSection";
import Link from "next/link";

import { BiEdit } from "react-icons/bi"
import { FaEdit, FiEdit } from 'react-icons/fa'
import { useEffect, useState } from "react";

function BlogCards() {
  const [allposts, setAllposts] = useState([]);
  const [totalpost, setTotalPost] = useState(0);
  const [pagin, setPagin] = useState(1);
  const [pagenumber, setPageNumber] = useState(1);

  const [loggedIn, setLoggedIn] = useState(false);

  const paginArray = ["<"];


  useEffect(() => {
    const item = sessionStorage.getItem('userid')
    if (item) {
      setLoggedIn(true);
    }
  }, [])




  const setAllData = (data) => {
    setAllposts(data.result);
    setTotalPost(data.count);
    console.log(data.count);
    setPagin(Math.ceil(totalpost / 4.0));

  }

  const handlePage = (pagenumber) => {
    setPageNumber(pagenumber);
  }

  const clickedOnPost = (title) => {
    console.log(title);
  }

  for (let i = 1; i <= pagin; i++) {
    paginArray.push(i);
  }

  useEffect(() => {
    fetch(`http://localhost:4000/all-posts?page=${pagenumber}`)
      .then(res => res.json())
      .then(data => setAllData(data));
  }, [pagenumber])


  return (
    <div className="bg-gray-200">
      <div className={styles.blog_text_des}>
        <h3>Blog</h3>
        <p>HOME / BLOG</p>
      </div>

      {
        loggedIn === true ? <Link href="/blog/post">
          <div className="fixed p-3 shadow-xl rounded bg-navbar border-2 transition border-gray-600 bottom-10 right-7 hover:bg-blue-400">
            <BiEdit size={30} color="#ffffff"></BiEdit>
          </div>
        </Link> : <Link href="/login">
          <div className="fixed p-3 shadow-xl rounded bg-navbar border-2 transition border-gray-600 bottom-10 right-7 hover:bg-blue-400">
            <BiEdit size={30} color="#ffffff"></BiEdit>
          </div>
        </Link>
      }



      <div className={styles.blog_container}>
        <div className={styles.blog_side_sec}>
          <BlogSideSection></BlogSideSection>
        </div>
        <div className="flex w-full flex-wrap">
          {
            allposts.map(post => {
              return (
                <SingleBlogCard post={post} />
              )

            })
          }


        </div>
      </div>
      <div className="pb-2">
        <div className={styles.pagination}>
          {
            paginArray.map(page => {
              return (
                pagenumber == page ?
                  <h3 className={styles.active} onClick={() => handlePage(page)}>{page}</h3> :
                  <h3 onClick={() => handlePage(page)}>{page}</h3>
              )
            })
          }




        </div>
      </div>
    </div>
  );
}
export default BlogCards;
