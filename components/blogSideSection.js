import imagedemo from "../image/autumn.jpg";
import styles from "../styles/Blog.module.css";

function blogSideSection() {
  return (
    <div className={styles.categories_section}>
      <form className={styles.search_form}>
        <input type="text" placeholder="search..."></input>
        <button type="submit">Submit</button>
      </form>
      <div className={styles.categories}>
        <h3>Categories</h3>
        <ul>
          <li>Culture</li>
          <li>Creativity</li>
          <li>Food</li>
          <li>Travel</li>
          <li>Humor</li>
          <li>Music</li>
        </ul>
      </div>

      <div className={styles.top_post_section}>
        <h3>Top posts</h3>
        <div className={styles.top_post}>
          <div className={styles.top_post_number}>
            <h3>1</h3>
          </div>
          <div className={styles.top_post_header}>
            <h2> Aenean mattisg tortor ac sapen congue molestie.</h2>
            <div>
              <small>Food</small>
              <small className={styles.caterogy_small}>-</small>
              <small>NOV 17, 2022</small>
            </div>
          </div>
        </div>

        <div className={styles.top_post}>
          <div className={styles.top_post_number}>
            <h3>2</h3>
          </div>
          <div className={styles.top_post_header}>
            <h2> Aenean mattisg tortor ac sapen congue molestie.</h2>
            <div>
              <small>Food</small>
              <small className={styles.caterogy_small}>-</small>
              <small>NOV 17, 2022</small>
            </div>
          </div>
        </div>

        <div className={styles.top_post}>
          <div className={styles.top_post_number}>
            <h3>3</h3>
          </div>
          <div className={styles.top_post_header}>
            <h2> Aenean mattisg tortor ac sapen congue molestie.</h2>
            <div>
              <small>Food</small>
              <small className={styles.caterogy_small}>-</small>
              <small>NOV 17, 2022</small>
            </div>
          </div>
        </div>

        <div className={styles.top_post}>
          <div className={styles.top_post_number}>
            <h3>4</h3>
          </div>
          <div className={styles.top_post_header}>
            <h2> Aenean mattisg tortor ac sapen congue molestie.</h2>
            <div>
              <small>Food</small>
              <small className={styles.caterogy_small}>-</small>
              <small>NOV 17, 2022</small>
            </div>
          </div>
        </div>

        <div className={styles.top_post}>
          <div className={styles.top_post_number}>
            <h3>5</h3>
          </div>
          <div className={styles.top_post_header}>
            <h2> Aenean mattisg tortor ac sapen congue molestie.</h2>
            <div>
              <small>Food</small>
              <small className={styles.caterogy_small}>-</small>
              <small>NOV 17, 2022</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default blogSideSection;
