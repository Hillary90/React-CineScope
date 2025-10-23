import React, { useState } from "react";
import HeroImage from '../assets/HeroImage.jpg'
import {  useEffect } from 'react'
function Hero() {

  //state to store movie data 
  const [movie,setMovie] = useState(null)
  
  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMTQxODRiNTBiOTU1OGU4MDNhZmRjMzVmMGYzZjQzMSIsIm5iZiI6MTc2MTEyNDM1MS4xOTUwMDAyLCJzdWIiOiI2OGY4OWZmZjMxMzcyMWI4YmFkM2JhMTIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.upbQEtMo6F0LqJZ2MfyAHnSS9XZJGqxshwFeu2jloQo'
  }
};

{/* using the useEffect to from the API only once and the useEffect runs only after component mounts */}
useEffect(()=> {
fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
  .then(res => res.json())
  .then(res => {
    if (res.results && res.results.length > 0) {
      // using random number to get the index of the results instead of passing the setMovie an array
      const randomIndex = Math.floor(Math.random()* res.results.length)
      setMovie(res.results[randomIndex])
      
    }
  })  //console.log(res)
  .catch(err => console.error(err));
},[]) // empty dependency to ensure it runs only once
  
   // conditional rendering to show if the movie data hasn't loaded yet, display a loading message 
   // if the movie
  if(!movie){
    return <p>Loading....</p>
  }
  return(
    <div className="text-white relative " >

      <img src={`https:image.tmdb.org/t/p/original/${movie.backdrop_path}`} 
        alt="" className="w-full rounded-2xl 
        h-[600px] object-center object-fill" 

      />
      <div className="flex space-x-2 md:space-x-4 
        left-4 bottom-3 absolute 
        md:bottom-8 md:left-10 font-medium"
       >

        <button className=" flex justify-center items-center
          bg-white hover:bg-gray-200
          text-red-500 py-3 px-4 rounded-full 
          cursor-pointer text-sm md:text-base 
          "> 
         <i 
           className=" mr-1 w-5 h-4 fa-solid fa-bookmark">
         </i> 
         Save For Later
        </button>

        <button className="flex justify-center 
         items-center bg-red-500
         hover:bg-red-500 text-white py-3
         px-4 rounded-full cursor-pointer text-sm md:text-base"
         > 
         <i 
           className=" mr-1 fa-solid fa-play">
         </i> 
         Watch Now
        </button>
      </div>
    </div>
  );
  
}
export default Hero;