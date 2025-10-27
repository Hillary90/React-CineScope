import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import requests from "../utility/Request";
import { FadeLoader } from "react-spinners";

// component that is 
export default function NewAndPopular() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);  //useState to manage spinner of the fadeloader from react-spinner
  
  // useEffect runs only once when the components mounts
  useEffect(() => {
    const startTime = Date.now();
    // Asynchronous function to fetch data from tmdb
    const fetchMovies = async () => {
      try {
        const [trendingRes, popularRes] = await Promise.all([
          // fetch both the popular and trending movies form the tmdb
          fetch(requests.requestTrending).then((res) => res.json()),
          fetch(requests.requestPopular).then((res) => res.json()),
        ]);
        
        //conditional rendering that ensures the two apis contain reults
        if (!trendingRes.results || !popularRes.results) {
          console.error("Missing results from TMDB response", { trendingRes, popularRes });
          setData([]); // set an emplty array to act as fallback incase the response in invalid
          return;
        }
        
        // combine the resluts of the two apis fetched from tmdb
        const combined = [...trendingRes.results, ...popularRes.results];

        // if a duplicated movie is found its going to be removed
        const unique = Array.from(new Map(combined.map((m) => [m.id, m])).values());
        setData(unique);
      } catch (err) {
        console.error("Error fetching New & Popular movies:", err); // catch errror from fetching
      } finally {
        // Ensure loader shows for at least 1.5 seconds
        const elapsed = Date.now() - startTime;
        const remaining = 1500 - elapsed;
        setTimeout(() => setLoading(false), Math.max(remaining, 0));
      }
    };

    fetchMovies(); // invoking the fetch function
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-900">
        <div className="flex flex-col items-center">
          <div className="bg-gray-800 p-6 rounded-2xl shadow-2xl flex flex-col items-center">
            <FadeLoader color="#f43f5e" height={15} width={5} radius={2} margin={2} />
            <p className="text-gray-300 mt-5 text-lg font-medium animate-pulse">
              Loading....
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-900 min-h-screen">
      <h2 className="text-2xl font-semibold mb-4 text-white">New & Popular</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {data.length > 0 ? (
          data.slice(0, 24).map((movie) => (
            <Link
              key={movie.id}
              to={`/movie/${movie.id}`}
              className="group"
            >
              <img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                    : "https://via.placeholder.com/500x750?text=No+Image"
                }
                alt={movie.title || movie.name}
                className="rounded-lg w-full h-64 object-cover group-hover:opacity-80 transition"
              />
              <div className="mt-2 text-sm text-gray-300 truncate">
                {movie.title || movie.name}
              </div>
            </Link>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-400">
            No movies found.
          </p>
        )}
      </div>
    </div>
  );
}
