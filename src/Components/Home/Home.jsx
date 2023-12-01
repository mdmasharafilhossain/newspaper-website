import ShowModal from "../ShowModal/ShowModal";
import Plans from "./Navbar/Plans/Plans";
import Publisher from "./Publisher/Publisher";
import TrendingArticle from "./TrendingArticle/TrendingArticle";




const Home = () => {
    return (
        <div className="mt-20">
            <TrendingArticle></TrendingArticle>
            <Publisher></Publisher>
            <ShowModal></ShowModal>
           <Plans></Plans>
           
        </div>
    );
};

export default Home;