import Footer from "../Footer/Footer";
import ShowModal from "../ShowModal/ShowModal";
import Count from "./Count/Count";
import HomeCount from "./HomeCount/HomeCount";
import Plans from "./Navbar/Plans/Plans";
import Publisher from "./Publisher/Publisher";
import TrendingArticle from "./TrendingArticle/TrendingArticle";




const Home = () => {
    return (
        <div className="mt-20">
            <TrendingArticle></TrendingArticle>
            <Publisher></Publisher>
            <ShowModal></ShowModal>
            <Count></Count>
            
           <Plans></Plans>
           <Footer></Footer>
        </div>
    );
};

export default Home;