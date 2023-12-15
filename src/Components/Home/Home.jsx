import { useEffect } from "react";
import Customer from "../Customer/Customer";
import Footer from "../Footer/Footer";
import ShowModal from "../ShowModal/ShowModal";
import AboutUs from "./AboutUs/AboutUs";
import Count from "./Count/Count";

import Plans from "./Navbar/Plans/Plans";
import Publisher from "./Publisher/Publisher";
import TrendingArticle from "./TrendingArticle/TrendingArticle";

import Register from './../Register/Register';




const Home = () => {
    useEffect(()=>{
        document.title = "The Independent | Home"
      },[]);
    return (
        <div className="mt-20">
            <TrendingArticle></TrendingArticle>
            <AboutUs></AboutUs>
            <Publisher></Publisher>
            <ShowModal></ShowModal>
            <Count></Count>
            <Customer></Customer>
           <Plans></Plans>
           <Footer></Footer>
           
        </div>
    );
};

export default Home;