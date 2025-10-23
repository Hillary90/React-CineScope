import React from "react";
import HeroImage from '../assets/HeroImage.jpg'

function Hero() {
  return(
    <div className="text-white relative " >
      <img src={HeroImage} alt="" className="w-full rounded-2xl h-[600px] object-center object-fill" />
      <div className="flex space-x-2 md:space-x-4  left-4 bottom-3 absolute md:bottom-8 md:left-10 font-medium">

        <button className=" flex justify-center items-center bg-white hover:bg-gray-200 text-red-500 py-3 px-4 rounded-full cursor-pointer text-sm md:text-base "> 
         <i class=" mr-1 w-5 h-4 fa-solid fa-bookmark"></i> 
         Save For Later
        </button>

        <button className="flex justify-center items-center bg-red-500 hover:bg-red-500 text-white py-3
         px-4 rounded-full cursor-pointer text-sm md:text-base"> 
         <i class=" mr-1 fa-solid fa-play"></i> 
         Watch Now
        </button>
      </div>
    </div>
  );
  
}
export default Hero;