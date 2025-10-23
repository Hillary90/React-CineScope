import { Search } from 'lucide-react';
import React from 'react'
import { Link } from "react-router";


const Navbar = () => {

  return (
    <nav className="bg-gray-900 text-gray-200 flex justify-between items-center p-4 h-25 md:text-[15px] font-medium text-nowrap">
      {/* Logo */}
       <div className="brightness-110 text-2xl font-bold text-red-500 hover:text-red-600 transition">
         <label>CineScope</label>
       </div>
       
       <ul className='hidden xl:flex space-x-6'>
           <li  className="cursor-pointer hover:text-red-500 transition" >
            Home
           </li>
           <li className="cursor-pointer hover:text-red-500 transition" >
            Tv Shows
           </li>
           <li className="cursor-pointer hover:text-red-500 transition" >
            Anime
           </li>
           <li className="cursor-pointer hover:text-red-500 transition" >
            Games
           </li>
           <li className="cursor-pointer hover:text-red-500 transition" >
            New & Popular
           </li>
           <li className="cursor-pointer hover:text-red-500 transition" >
            Upcoming
           </li>          
       </ul>

       <div className='flex items-center space-x-4 relative'>

        <div className='hidden md:inline-flex relative'>

          <input className='bg-gray-800 px-4 py-2 rounded-full min-w-75 pr-10 outline-none:'
          type='text' 
          placeholder='Search' 
          />
          <Search className='absolute top-2 right-5 w-5 h-5' />
        </div>
        {/*AI recommendation button*/ }
        <button className="bg-red-600 text-white px-6 py-2 font-semibold rounded-tr-2xl rounded-bl-2xl hover:bg-red-700 transition cursor-pointer" >
         CineAI Picks
        </button>

        {/*Sign in button */}
        <button className='border border-bg-gray-800 py-2.5 px-5 rounded-full cursor-pointer'>
         SignIn
        </button>
       </div>


    
    </nav>
  );
};

export default Navbar;
