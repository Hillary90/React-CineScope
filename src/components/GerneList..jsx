import React, { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { Link } from "react-router"; 
import requests from "../utility/Request"; 

function Genre() {
  // The default selected genre — start with "Action"
  const [selectedGenre, setSelectedGenre] = useState("Action");

  const [genres, setGenres] = useState([]);
  const [movies, setMovies] = useState([]);
 
  // the use effecct runs only once. It sends a request to TMDB’s genre list endpoint via requests.requestGenre that is stored inside the request.
  useEffect(() => {
    fetch(requests.requestGenre)
      .then((res) => res.json())
      .then((data) => setGenres(data.genres))
      .catch((err) => console.error("Failed to fetch genres:", err));
  }, []);

  // the useEffect runs everytime to fetches movies for selected genre becuse of the dependancy changes when user clicks a button.
  useEffect(() => {
    if (!selectedGenre || genres.length === 0) return;

    // finds the ID of the genre that matches the selced genre name
    const genreId = genres.find((g) => g.name === selectedGenre)?.id;
    if (!genreId) return; // if it does not find, return null
    
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${requests.Api_key}&with_genres=${genreId}&language=en-US&page=1`;

    // fetches movie that bellong to specific genre 
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMovies(data.results || []))
      .catch((err) => console.error("Failed to fetch movies:", err));
  }, [selectedGenre, genres]);

  return (
    <div className="min-h-screen text-white px-8 py-10">
      {/* Header */}
      <h2 className="text-2xl font-semibold mb-6">Browse by Genre</h2>

      {/* Genre Buttons */}
      <div className="flex flex-wrap gap-3 mb-8">
        {genres.map((genre) => (
          <button
            key={genre.id}
            onClick={() => setSelectedGenre(genre.name)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              selectedGenre === genre.name
                ? "bg-red-600 text-white shadow-lg"
                : "bg-gray-800 hover:bg-red-500 text-gray-300"
            }`}
          >
            {genre.name}
          </button>
        ))}
      </div>

      {/* Movies Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {movies.slice(0, 10).map((movie) => (
          <Link
            key={movie.id}
            to={`/movie/${movie.id}`} 
            className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:scale-[1.03] cursor-pointer"
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="w-full h-80 object-cover"
            />
            <div className="p-3">
              <h3 className="font-semibold truncate">{movie.title}</h3>
              <div className="flex justify-between items-center text-sm text-gray-400 mt-1">
                <div className="flex items-center">
                  <Star size={14} className="text-yellow-400 mr-1" />
                  {movie.vote_average ? movie.vote_average.toFixed(1) : ""}
                </div>
                <span>{movie.release_date?.split("-")[0] || "—"}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Genre;
