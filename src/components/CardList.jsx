import React, { useEffect, useState } from "react";
import CardImage from '../assets/CardImage.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; 


function CardList({title, category}) {

  // state used to store fetched movie data
  const [data, setData] = useState([])
  // API request options, including authentication header
  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMTQxODRiNTBiOTU1OGU4MDNhZmRjMzVmMGYzZjQzMSIsIm5iZiI6MTc2MTEyNDM1MS4xOTUwMDAyLCJzdWIiOiI2OGY4OWZmZjMxMzcyMWI4YmFkM2JhMTIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.upbQEtMo6F0LqJZ2MfyAHnSS9XZJGqxshwFeu2jloQo'
  }
};
  
  // useEffect runs once when the component mounts to fetch movie data
  useEffect(()=>{

    fetch(
      `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`, options
    )
    .then(res => res.json())
    .then(res => setData(res.results)  
    //console.log(res)

    )
    .catch(err => console.error(err));

  }, []) // empty dependency that runs only onces when mounted 


  return(
    <div  className="text-white md:px-4 bg-gray-900">
      <h2 className="pt-10 pb-5 text-lg font-medium">{title}</h2>

      <Swiper slidepreview={'auto'} spaceBetween={10} className="mySwiper">
        {data.map((item, index) => 

        <SwiperSlide key={index} className="max-w-70" >
          <img src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`} alt="" className="h-45 w-full object-cover object-center" />
          <p className="text-center pt-2 ">{item.original_title}</p>
        </SwiperSlide>
      )}
      </Swiper>
      
    </div>
  )
  
}

export default CardList;