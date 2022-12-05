import Navbar from "./Navbar";
import Banner from "./Banner"
import BestProducts from "./HomeSeasonInfo"
import Footer from "./Footer";
import styles from "../styles/Home.module.css"


function Home() {
    return <div>
        <Banner></Banner>
        <BestProducts></BestProducts>
        <Footer></Footer>
    </div>
}
export default Home;