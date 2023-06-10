import styles from "../styles/Blog.module.css";
import Image from "next/image";

function singleBlogCard(props) {
  const { postTitle, post, image } = props.post;
  if (postTitle != "") {
    return (

      <div className="max-w-sm w-full  h-96 overflow-hidden  m-1 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

        <img className={styles.card_image} src={image}></img>
        <div className={styles.textbox}>
          <div className={styles.category_date}>
            <small>Food</small>
            <small className={styles.hypen}>-</small>
            <small>NOV 23, 2022</small>
          </div>
          <a className="pt-6" href={`../blog/${postTitle}`}> <h2>{postTitle}</h2></a>

        </div>

      </div>
    );
  }

}

export default singleBlogCard;
