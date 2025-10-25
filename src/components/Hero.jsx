import React, { useState } from "react";
import HeroImage from '../assets/HeroImage.jpg'
import {  useEffect } from 'react'
import { Link } from 'react-router-dom'
import requests from "../utility/Request";

function Hero() {

  //state to store movie data 
  const [movie,setMovie] = useState(null)
  
// using the useEffect to fetch the API only once and the useEffect runs only after component mounts 
   useEffect(()=> {
   fetch(requests.requestUpcoming)
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
    <div className="relative w-full text-white">
    
      <img
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        alt={movie.title}
        className="w-full h-[600px] object-cover rounded-2xl brightness-75"
      />

      <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-12 lg:px-20 space-y-6">
        <div>

          <h1 className="text-4xl md:text-6xl       font-extrabold leading-tight   tracking-tight">
           Where Every{" "}
           <span className="block text-transparent 
              bg-clip-text bg-gradient-to-r from-red-500
              via-orange-400 to-yellow-300 animate-pulse">
              Frame Tells a Story
            </span>
                     
         </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl">
            Explore trending films, get personalized recommendations, and never
            miss a great movie again.
          </p>
        </div>

        <div className="flex space-x-4 mt-6">
          <button
            className="flex items-center bg-white text-red-500 font-semibold 
              py-3 px-6 rounded-full hover:bg-gray-200 transition-all"
          >
            <i className="fa-solid fa-bookmark mr-2"></i> Save For Later
          </button>
          <Link to={`/movie/${movie.id}`}>
             <button
              className="flex items-center bg-red-600 text-white font-semibold 
              py-3 px-6 rounded-full hover:bg-red-700 transition-all"
            >
              <i className="fa-solid fa-play mr-2"></i> Watch Now
            </button>
          </Link>
          
        </div>
      </div>
    </div>
  );
  
}
export default Hero;