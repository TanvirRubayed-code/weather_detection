import Navbar from "./Navbar";
import Banner from "./Banner"
import Products from "./products"
import BestProducts from "./BestProduct"
import Footer from "./Footer";
import styles from "../styles/Home.module.css"


function Home() {
    return <div>
        <Banner></Banner>
        {/* <Products></Products> */}
        <BestProducts></BestProducts>
        <Footer></Footer>
    </div>
}
export default Home;