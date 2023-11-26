import Plans from "./Navbar/Plans/Plans";
import TrendingArticle from "./TrendingArticle/TrendingArticle";




const Home = () => {
    return (
        <div className="mt-20">
            <TrendingArticle></TrendingArticle>
           <Plans></Plans>
        </div>
    );
};

export default Home;