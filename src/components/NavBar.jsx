import { Search } from 'lucide-react';
import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from '../context/AuthContext';


const NavBar = () => {

  const {user, logout } =useAuth(); 
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  // handle logout
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Logout failed:", error.message);
    }
  };

   // handle search submit
  const handleSearch = (e) => {
    e.preventDefault();
    if(query.trim()) {
      navigate(`/search/${query}`);
      setQuery('');
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
        <Link to={"/saved"}>
          <li 
           className="cursor-pointer
           hover:text-red-500 transition"
          > 
           WatchList
          </li>
        </Link>       
      </ul>

       <div className='flex items-center space-x-4 relative'>
      {/* Search */}
      <form onSubmit={handleSearch} className='hidden md:inline-flex relative'>
        <input
          className='bg-gray-800 px-4 py-2 rounded-full min-w-75 pr-10 outline-none'
          type='text'
          placeholder='Search'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">
          <Search className='absolute top-2 right-5 w-5 h-5 text-gray-400 hover:text-red-500 transition' />
        </button>
      </form>

      {/* AI Recommendation Button */}
      <Link to={ user ?
        "ai-recommendation" : 'signin'}
      >
        <button className="bg-red-600 text-white px-4 py-2 font-semibold rounded-tr-2xl rounded-bl-2xl hover:bg-red-700 transition cursor-pointer">
          CineAI Picks
        </button>
      </Link>
  
      {/* Auth Buttons */}
      {user ? (
        <button
          onClick={handleLogout}
          className='border border-gray-700 transition py-2 px-4 rounded-full cursor-pointer hover:text-red-500'
        >
          Logout
        </button>
      ) : (
        <Link to={"/signin"}> 
          <button
            className='border border-gray-700 transition py-2 px-4 rounded-full cursor-pointer hover:text-red-500'
          >
            Sign In
          </button>
        </Link>
      )}
    </div>
    </nav>
  );
};

export default NavBar;
