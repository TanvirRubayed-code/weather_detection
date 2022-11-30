import styles from "../styles/Blog.module.css";
import imagedemo from "../image/autumn.jpg";
function BlogCards() {
  return (
    <div className={styles.main_back}>
      <div className={styles.blog_container}>
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

        {/* card  --------------------- */}
        <div className={styles.main_card}>
          <div className={styles.card_section}>
            <div className={styles.first_card}>
              <img className={styles.card_image} src={imagedemo.src} alt="" />
              <div className={styles.textbox}>
                <div className={styles.category_date}>
                  <small>Food</small>
                  <small className={styles.hypen}>-</small>
                  <small>NOV 23, 2022</small>
                </div>
                <h2>Aenean mattis tortor ac sapien congue molestie</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptas possimus labore impedit eveniet sequi esse?
                </p>
              </div>
            </div>
            <div className={styles.second_card}>
              <img className={styles.card_image} src={imagedemo.src} alt="" />

              <div className={styles.textbox}>
                <div className={styles.category_date}>
                  <small>Food</small>
                  <small className={styles.hypen}>-</small>
                  <small>NOV 23, 2022</small>
                </div>
                <h2>Aenean mattis tortor ac sapien congue molestie</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptas possimus labore impedit eveniet sequi esse?
                </p>
              </div>
            </div>
          </div>

          <div className={styles.card_section}>
            <div className={styles.first_card}>
              <img className={styles.card_image} src={imagedemo.src} alt="" />
              <div className={styles.textbox}>
                <div className={styles.category_date}>
                  <small>Food</small>
                  <small className={styles.hypen}>-</small>
                  <small>NOV 23, 2022</small>
                </div>
                <h2>Aenean mattis tortor ac sapien congue molestie</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptas possimus labore impedit eveniet sequi esse?
                </p>
              </div>
            </div>
            <div className={styles.second_card}>
              <img className={styles.card_image} src={imagedemo.src} alt="" />

              <div className={styles.textbox}>
                <div className={styles.category_date}>
                  <small>Food</small>
                  <small className={styles.hypen}>-</small>
                  <small>NOV 23, 2022</small>
                </div>
                <h2>Aenean mattis tortor ac sapien congue molestie</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptas possimus labore impedit eveniet sequi esse?
                </p>
              </div>
            </div>
          </div>

          <div className={styles.card_section}>
            <div className={styles.first_card}>
              <img className={styles.card_image} src={imagedemo.src} alt="" />
              <div className={styles.textbox}>
                <div className={styles.category_date}>
                  <small>Food</small>
                  <small className={styles.hypen}>-</small>
                  <small>NOV 23, 2022</small>
                </div>
                <h2>Aenean mattis tortor ac sapien congue molestie</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptas possimus labore impedit eveniet sequi esse?
                </p>
              </div>
            </div>
            <div className={styles.second_card}>
              <img className={styles.card_image} src={imagedemo.src} alt="" />

              <div className={styles.textbox}>
                <div className={styles.category_date}>
                  <small>Food</small>
                  <small className={styles.hypen}>-</small>
                  <small>NOV 23, 2022</small>
                </div>
                <h2>Aenean mattis tortor ac sapien congue molestie</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptas possimus labore impedit eveniet sequi esse?
                </p>
              </div>
            </div>
          </div>
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
