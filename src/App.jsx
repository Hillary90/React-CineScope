import React from "react"
import NavBar from "./components/NavBar";
import Homepage from "./pages/Homepage";
import { Route, Routes } from "react-router-dom";
import Movie from "./pages/Movie";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import TvShows from "./components/TvShows";
import Anime from "./components/Anime";
import NewAndPopular from "./components/NewAndPopular";
import SearchResults from "./components/SearchResults";



function App() {

  return (
    <div className="min-h-screen bg-gray-800 text-white">
       <NavBar />
       
        <Routes >
          <Route path={"/"} element={<Homepage />}/>
          <Route path={"/movie/:id"} element={<Movie />}/>
          <Route path={"/signin"} element={<SignIn/>} />
          <Route path={"/signup"} element={<SignUp />} />
          <Route path={"/tv"} element={<TvShows/>}/>
          <Route path="/anime" element={<Anime/>} />
          <Route path="/newandpopular" element={<NewAndPopular />} />
          <Route path="/search/:query" element={<SearchResults/>} />

        </Routes>
    </div>
  )
}

export default App
