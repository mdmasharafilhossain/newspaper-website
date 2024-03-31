import { useEffect, useState } from "react";
import React, { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import { Link } from "react-router-dom";
import TrendArticle from "../TrendArticle/TrendArticle";
import { useMediaQuery } from "react-responsive";

const TrendingArticle = () => {
    const [art,setart] = useState([]);
    



    useEffect(()=>{
        fetch("https://newspaper-server-rosy.vercel.app/article")
    .then(res =>res.json())
    .then(data =>{
      const sortedArticles = data.sort((a, b) => b.views - a.views);
      setart(sortedArticles);
    })
    },[]);
    
    const isMobile = useMediaQuery({ maxWidth: 640 });
    const isTablet = useMediaQuery({ minWidth: 641, maxWidth: 1023 });
    const isDesktop = useMediaQuery({ minWidth: 1024 });

    const slidesPerView = isMobile ? 1 : isTablet ? 2 : 4;
    return (
        <div className="mt-32">
            <div className="mx-auto text-center w-4/12 ">
            <h1 className="text-5xl text-red-700 border-red-400 text-center font-bold  mb-12 py-4">Trending Article </h1>
            </div>

<Swiper
        
        slidesPerView={slidesPerView }
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {/* <SwiperSlide>
            {
              art.map(article => <TrendArticle   article={article}></TrendArticle>)  
            }
        </SwiperSlide> */}
        {
            art.slice(0,6).map(article => <SwiperSlide key={article.id} article={article}>
    
                <TrendArticle article={article}></TrendArticle>
            </SwiperSlide>)
        }
        
      </Swiper>
        </div>
    );
};

export default TrendingArticle;