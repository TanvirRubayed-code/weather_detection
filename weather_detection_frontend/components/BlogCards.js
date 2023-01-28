import styles from "../styles/Blog.module.css";
import Image from "next/image";
import SingleBlogCard from "../components/singleblogCard";
import BlogSideSection from "./blogSideSection";
import autumn from "../image/autumn.jpg";
import food from "../image/food.jpg";
import late_autumn from "../image/late_autumn.jpg";
import rainy from "../image/rainy2.jpg";
import spring from "../image/spring.jpg";
import summer from "../image/Summer.jpg";
import plus from "../image/plus.png";
import Link from "next/link";
import { AiFillPlusCircle } from "react-icons/ai"
import { BiEdit } from "react-icons/bi"
import { FaEdit, FiEdit } from 'react-icons/fa'

function BlogCards() {
  return (
    <div className={styles.main_back}>
      <div className={styles.blog_text_des}>
        <h3>Blog</h3>
        <p>HOME / BLOG</p>
      </div>
      <div className="fixed p-3 rounded bg-navbar bottom-6 right-6 ">
        <Link href="/blog/post">
          <BiEdit size={30} color="#ffffff"></BiEdit>
        </Link>

      </div>

      <div className={styles.blog_container}>
        <div className={styles.blog_side_sec}>
          <BlogSideSection></BlogSideSection>
        </div>
        <div className={styles.card_section}>
          <SingleBlogCard image={spring} />
          <SingleBlogCard image={food} />
          <SingleBlogCard image={late_autumn} />
          <SingleBlogCard image={rainy} />
          <SingleBlogCard image={autumn} />
          <SingleBlogCard image={summer} />
        </div>
      </div>
      <div className={styles.pagination}>
        <a href="#">&laquo;</a>
        <a href="#">1</a>
        <a className={styles.active} href="#">
          2
        </a>
        <a href="#">3</a>
        <a href="#">4</a>
        <a href="#">5</a>
        <a href="#">6</a>
        <a href="#">&raquo;</a>
      </div>
    </div>
  );
}
export default BlogCards;
