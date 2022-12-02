import styles from "../styles/Blog.module.css";
import SingleBlogCard from "../components/singleblogCard";
import BlogSideSection from "./blogSideSection";
function BlogCards() {
  return (
    <div className={styles.main_back}>
      <div className={styles.blog_text_des}>
        <h3>Blog</h3>
        <p>HOME / BLOG</p>
      </div>
      <div className={styles.blog_container}>
        <div className={styles.blog_side_sec}>
          <BlogSideSection></BlogSideSection>
        </div>
        <div className={styles.card_section}>
          <SingleBlogCard />
          <SingleBlogCard />
          <SingleBlogCard />
          <SingleBlogCard />
          <SingleBlogCard />
          <SingleBlogCard />
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
