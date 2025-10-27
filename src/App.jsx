import React from "react"
import NavBar from "./components/NavBar";
import Homepage from "./pages/Homepage";
import { Route, Routes } from "react-router";
import Movie from "./pages/Movie";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import TvShows from "./components/TvShows";


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
        </Routes>
    </div>
  )
}

export default App
