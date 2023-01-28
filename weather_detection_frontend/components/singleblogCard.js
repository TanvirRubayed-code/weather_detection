import styles from "../styles/Blog.module.css";
import Image from "next/image";

function singleBlogCard(props) {
  return (
    <div className={styles.first_card}>
      <Image
        //   loader={myLoader}
        className={styles.card_image}
        src={props.image}
        alt="Picture of the author"
      />
      <div className={styles.textbox}>
        <div className={styles.category_date}>
          <small>Food</small>
          <small className={styles.hypen}>-</small>
          <small>NOV 23, 2022</small>
        </div>
        <a href="../blog/sfffs"> <h2>Aenean mattis tortor ac sapien congue molestie</h2></a>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          possimus labore impedit eveniet sequi esse?
        </p>
      </div>
    </div>
  );
}

export default singleBlogCard;
