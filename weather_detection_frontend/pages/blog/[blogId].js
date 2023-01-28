import { useRouter } from "next/router";
import Post from "../../components/post";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
function singleBlog() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  const blogId = router.query.blogId;
  return (
    <>
      <Post></Post>
    </>
  );
}

export default singleBlog;
