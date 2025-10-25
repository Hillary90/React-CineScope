import React, { useEffect, useState } from "react";
import CardImage from '../assets/CardImage.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from 'react-router'
import "swiper/css"; 


function CardList({title, fetchUrl}) {

  // state used to store fetched movie data
  const [data, setData] = useState([]);
  
  // useEffect runs once when the component mounts to fetch movie data from the fetchUrl passed in as a prop from the homepage component
  useEffect(()=>{

    fetch(fetchUrl)
    .then(res => res.json())
    .then(res => setData(res.results)  
     //console.log(res)

    )
    .catch(err => console.error(err));

  }, [fetchUrl]) // empty dependency that runs only onces when mounted 


  return(
    <div  className="text-white md:px-4">
      <h2 className="pt-10 pb-5 text-lg font-medium">{title}</h2>

      <Swiper slidepreview={'auto'} spaceBetween={10} className="mySwiper">
        {data.map((item, index) => 

        <SwiperSlide key={index} className="max-w-70" >
          <Link to={`/movie/${item.id}`} >
            <img src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt="" className="h-45 w-full object-cover object-center" />
          <p className="text-center pt-2 ">{item.original_title}</p>
          </Link>
          
        </SwiperSlide>
      )}
      </Swiper>
      
    </div>
  )
  
}

export default CardList;