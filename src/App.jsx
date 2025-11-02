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
import ProtectedRoute from "./routes/ProtectedRoute";
import AiRecommendation from "./pages/AiRecommendation";
import SavedMovies from "./pages/SavedMovies";



function App() {

  return (
    <div className="min-h-screen bg-gray-800 text-white">
       <NavBar />
       
        <Routes >
          <Route path={"/"} element={<Homepage />}/>
          <Route path={"/movie/:id"} element={
            <ProtectedRoute>
              <Movie />
            </ProtectedRoute>
            }/>
          <Route path={"/signin"} element={<SignIn/>} />
          <Route path={"/signup"} element={<SignUp />} />
          <Route path={"/ai-recommendation"} element={<AiRecommendation/>} />
          <Route path={"/tv"} element={
            <ProtectedRoute>
              <TvShows/>
            </ProtectedRoute>
          }/>
          <Route path="/anime" element={
            <ProtectedRoute>
              <Anime/>
            </ProtectedRoute>
          } />
          <Route path="/newandpopular" element={
            <ProtectedRoute>
              <NewAndPopular />
            </ProtectedRoute>
         } />
          <Route path="/search/:query" element={
            <ProtectedRoute>
             <SearchResults/>
            </ProtectedRoute>
          } />
          <Route
          path="/saved" 
          element={
            <ProtectedRoute>
              <SavedMovies />
            </ProtectedRoute>
          }
        />

        </Routes>
    </div>
  )
}

export default App
