import Banner from "./Banner";
import BestProducts from "./HomeSeasonInfo";
import Footer from "./Footer";

function Home() {
  return (
    <div>
      <Banner></Banner>
      <BestProducts></BestProducts>
      <div className="flex bg-gray-100 justify-center py-20">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/AGcTCvn-a6g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    </div>
  );
}
export default Home;
