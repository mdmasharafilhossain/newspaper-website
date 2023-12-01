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

const TrendingArticle = () => {
    const [art,setart] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:5000/article")
    .then(res =>res.json())
    .then(data =>setart(data))
    },[]);
    
  
    return (
        <div className="mt-20">
            <div className="mx-auto text-center w-4/12 ">
            <h1 className="text-5xl text-red-700 border-red-400 text-center font-bold  mb-12 py-4">Trending Article </h1>
            </div>

<Swiper
        
        slidesPerView={4}
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