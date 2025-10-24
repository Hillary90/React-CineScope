import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMTQxODRiNTBiOTU1OGU4MDNhZmRjMzVmMGYzZjQzMSIsIm5iZiI6MTc2MTEyNDM1MS4xOTUwMDAyLCJzdWIiOiI2OGY4OWZmZjMxMzcyMWI4YmFkM2JhMTIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.upbQEtMo6F0LqJZ2MfyAHnSS9XZJGqxshwFeu2jloQo",
    },
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
      .then((res) => res.json())
      .then((res) => setMovie(res))
      .catch((err) => console.error(err));
  }, [id]);

  if (!movie) {
    return (
      <div className="flex items-center justify-center h-screen">
        <span className="text-2xl text-red-500">Loading....</span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-800 text-white">
      <div
        className="relative flex items-center h-[60vh]"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="absolute bottom-8 flex items-end z-10 p-8 gap-7">
          <img
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            className="rounded-lg shadow-lg w-50 hidden md:block"
            alt={movie.title}
          />

          <div>
            <h1 className="text-4xl font-bold mb-2">{movie.title}</h1>

            <div className="flex items-center mb-2 gap-4 text-gray-300">
              <span>
                <i className="text-yellow-400 fa-solid fa-star"></i>{" "}
                {movie.vote_average?.toFixed(1)}
              </span>
              <span>{movie.release_date}</span>
              <span>{movie.runtime} min</span>
            </div>

            {/* ✅ Genres */}
            <div className="flex flex-wrap gap-2 mt-3 mb-4">
              {movie.genres?.map((genre) => (
                <span
                  key={genre.id}
                  className="bg-gray-700/80 text-gray-100 px-3 py-1 rounded-full text-sm"
                >
                  {genre.name}
                </span>
              ))}
            </div>
            
            <p className="text-gray-200 max-w-2xl mb-6 leading-relaxed">
              {movie.overview}
            </p>

            <button
              className="flex items-center bg-red-600 text-white font-semibold 
              py-3 px-6 rounded-full hover:bg-red-700 transition-all duration-300 
              shadow-lg hover:shadow-red-700/30"
            >
              <i className="fa-solid fa-play mr-2"></i> Watch Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Movie;
