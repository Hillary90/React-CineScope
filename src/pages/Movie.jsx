import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { Film, Type, CheckCircle, Calendar, Globe, Building2, Star, MapPin, } from "lucide-react";
import { FadeLoader } from "react-spinners";

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [recommendations, setRecommendations] = useState([]);
  const [trailer, setTrailer] = useState(null);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMTQxODRiNTBiOTU1OGU4MDNhZmRjMzVmMGYzZjQzMSIsIm5iZiI6MTc2MTEyNDM1MS4xOTUwMDAyLCJzdWIiOiI2OGY4OWZmZjMxMzcyMWI4YmFkM2JhMTIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.upbQEtMo6F0LqJZ2MfyAHnSS9XZJGqxshwFeu2jloQo",
    },
  };

  {/* fetch movie based on the movie details */}
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
      .then((res) => res.json())
      .then((res) => setMovie(res))
      .catch((err) => console.error(err));

    {/* fetch movie based on the recommendations */}
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/recommendations?language=en-US&page=1`,
      options
    )
      .then((res) => res.json())
      .then((res) => setRecommendations(res.results || []))
      .catch((err) => console.error(err));

   fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
  .then(res => res.json())
  .then(res => {
    if (!res.results || res.results.length === 0) {
      setTrailer(null);
      return;
    }

    // Try to find the official trailer first
    const officialTrailer = res.results.find(
      (video) =>
        video.site === "YouTube" &&
        video.type === "Trailer" &&
        video.official === true
    );

    // If the movie trailer is not found, yo will have to try any YouTube trailer or teaser
    const backupTrailer = res.results.find(
      (video) =>
        video.site === "YouTube" &&
        (video.type === "Trailer" || video.type === "Teaser")
    );

    const selected = officialTrailer || backupTrailer;
    setTrailer(selected ? selected.key : null);
  })
  .catch(err => console.error(err));

  }, [id]);

  useEffect(() => {
    // Show loader for at least 1.5 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // conditional rendering to show if the movie data hasn't loaded yet
  if (loading || !movie) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-900">
        <div className="flex flex-col items-center">
          <div className="bg-gray-800 p-6 rounded-2xl shadow-2xl flex flex-col items-center">
            <FadeLoader color="#f43f5e" height={15} width={5} radius={2} margin={2} />
            <p className="text-gray-300 mt-5 text-lg font-medium animate-pulse">
              Loading movie details...
            </p>
          </div>
        </div>
      </div>
    );
  }

  console.log(movie); // so as to get the movie data

  return (
    <div className="min-h-screen bg-gray-800 text-white">
      {/* Hero Section */}
      <div
        className="relative flex items-center h-[60vh]"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
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
            {/* 
              Conditional rendering:
              If a trailer exists, it shows a clickable "Watch Trailer" button and linking takes you to YouTube.
              Otherwise, if trailer isn't available a disable button appear showing Trailer not found.
           */}

            {trailer ? (
              <a 
               href= {`https://www.youtube.com/watch?v=${trailer}`} 
               target="_blank"
              >
               <button className="flex items-center
                  bg-red-600 text-white 
                  font-semibold py-3 px-6 rounded-full
                  hover:bg-red-700 transition-all 
                  duration-300 shadow-lg hover:shadow-red-700/30"
                >
                  <i 
                    className="fa-solid fa-play mr-2">
                  </i> 
                  Watch Trailer
               </button>
              </a>) :
             (
              <button
                disabled
                className="flex items-center bg-gray-600 text-white font-semibold py-3 px-6 rounded-full opacity-60 cursor-not-allowed"
              >
                <i className="fa-solid fa-ban mr-2">

                </i> 
                Trailer Not Available
              </button>
            )}         
          </div>
        </div>
      </div>

      {/* Movie Details */}
      <div className="p-10 m-2">
        <h2 className="text-2xl font-semibold mb-5 flex items-center gap-2">
          <Film className="w-6 h-6 text-red-500" />
          Details
        </h2>

        <div className="bg-gray-700 rounded-lg shadow-lg p-6 flex-col md:flex-row gap-8">
          <div className="flex-1">
            {/*display movie Title from the tmdb*/}
            <ul className="text-gray-400 space-y-3">
              <li className="flex items-center gap-2">
                <Film className="w-5 h-5 text-red-400" />
                <span className="text-white font-medium">Title:</span>
                <span className="ml-1.5">{movie.title}</span>
              </li>
              
               {/*display Tagline of the movie from tmdb*/}
              <li className="flex items-center gap-2">
                <Type className="w-5 h-5 text-blue-400" />
                <span className="text-white font-medium">Tagline:</span>
                <span className="ml-1.5 italic">{movie.tagline}</span>
              </li>
              
              {/*display movie status of the movie form the tmdb*/}
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-white font-medium">Status:</span>
                <span className="ml-1.5">{movie.status}</span>
              </li>
              
              {/*display release_date of the movie from tmdb*/}
              <li className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-yellow-400" />
                <span className="text-white font-medium">Release Date:</span>
                <span className="ml-1.5">{movie.release_date}</span>
              </li>

              {/*diplay original language of the movie from tmdb*/}
              <li className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-indigo-400" />
                <span className="text-white font-medium">Original Language:</span>
                <span className="ml-1.5">
                  {movie.original_language.toUpperCase()}
                </span>
              </li>

              {/*display production_countries of the movie from movie tmdb*/}
              <li className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-teal-400" />
                <span className="text-white font-medium">Production Country:</span>
                <span className="ml-1.5">
                  {movie.production_countries
                    .map((country) => country.name)
                    .join(", ")}
                </span>
              </li>

              {/*display production_companies of the movie form tmdb*/}
              <li className="flex items-center gap-2">
                <Building2 className="w-5 h-5 text-purple-400" />
                <span className="text-white font-medium">Production Company:</span>
                <span className="ml-1.5">
                  {movie.production_companies
                    .map((company) => company.name)
                    .join(", ")}
                </span>
              </li>

              {/*display  vote_average of the move form tmdb*/}
              <li className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500" />
                <span className="text-white font-medium">Vote Average:</span>
                <span className="ml-1.5">{movie.vote_average}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Recommendations */}
      {recommendations.length > 0 && (
        <div className="px-8 m-2">
          <h2 className="text-2xl font-semibold mb-4 gap-1.5">
            Your next favorites await
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {recommendations.slice(0, 10).map((reco) => (
              <div key={reco.id} className="group cursor-pointer">
                <Link to={`/movie/${reco.id}`}>
                  <img
                    src={`https://image.tmdb.org/t/p/w300${reco.poster_path}`}
                    alt={reco.title}
                    className="rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="mt-2 text-center">
                    <h3 className="text-sm font-medium text-white truncate">
                      {reco.title}
                    </h3>
                    <span className="text-gray-400 text-xs">
                      {reco.release_date?.slice(0, 4)}
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Movie;
