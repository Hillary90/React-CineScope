import { Search } from 'lucide-react';
import React from 'react'
import { Link } from "react-router-dom";
import { useAuth } from '../context/AuthContext';


const Navbar = () => {

  const {user, logout } =useAuth(); 

  // handle logout
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Logout failed:", error.message);
    }
  };

  return (
    <nav className="bg-gray-900 text-gray-200 
      flex justify-between items-center
      p-4 h-25 :md:text-[15px] 
      font-medium text-nowrap"
     >
      {/* Logo */}
       <Link to={"/"}>
        <h1 className="brightness-110 text-2xl font-bold  
         text-red-500 hover:text-red-600 transition"
         >
           CineScope
        </h1>
       </Link>
      
       <ul className='hidden xl:flex space-x-6'>
          <Link to={"/"}>

            <li  className="cursor-pointer
             hover:text-red-500 transition" 
            >
             Home
            </li>

          </Link>

          <Link to={"/tv"}>

             <li className="cursor-pointer
               hover:text-red-500 transition"
             >
              Tv Shows
             </li>
          </Link>         
            
          <Link to={"/anime"}>
            <li className="cursor-pointer
             hover:text-red-500 transition"
            >
             Anime
             </li>
          </Link>
          
            <Link to={"/newandpopular"}>

              <li className="cursor-pointer
               hover:text-red-500 transition"
              >
               New & Popular
              </li>
            </Link>
           <li className="cursor-pointer
             hover:text-red-500 transition" 
            >
             Upcoming
           </li>          
       </ul>

       <div className='flex items-center 
       space-x-4 relative'
        >

        <div className='hidden   
         md:inline-flex 
         relative'
         >

          <input className='bg-gray-800 px-4 
            py-2 rounded-full min-w-75 
            pr-10 outline-none:'
          type='text' 
          placeholder='Search' 
          />
          <Search className='absolute top-2 
           right-5 w-5 h-5' 

          />
        </div>
        {/*AI recommendation button*/ }
        <button className="bg-red-600 text-white px-6 
         py-2 font-semibold rounded-tr-2xl rounded-bl-2xl
         hover:bg-red-700 transition 
         cursor-pointer" 
         >
         CineAI Picks
        </button>

        {/*Sign in button */}
        { user ? (
          <button  
           onClick={handleLogout}
           className='border border-bg-gray-800 transition
            py-2.5 px-5 rounded-full 
           cursor-pointer'
          >
           Logout
          </button> 
        ) : (
          // if not logged in show sign in
          <Link to={"/signin"}> 
            <button  
             className='border border-bg-gray-800 transition
             py-2.5 px-5 rounded-full 
             cursor-pointer'
            >
              Sign In
            </button>
          </Link>
          
        )}              
      </div>   
    </nav>
  );
};

export default Navbar;
