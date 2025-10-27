import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import requests from '../utility/Request';
import { FadeLoader } from "react-spinners";

// Component to display a list of Anime
export default function Anime() {
  const [anime, setAnime] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const startTime = Date.now();
  
    fetch(requests.requestAnime)
      .then((res) => res.json())
      .then((data) => setAnime(data.results || []))
      .catch((error) => console.error(error))
      .finally(() => {
        // ensure loader shows for at least 1.5 seconds
        const elapsed = Date.now() - startTime;
        const remaining = 1500 - elapsed;
        setTimeout(() => setLoading(false), Math.max(remaining, 0));
      });
  }, []);

  // show loading screen
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

  // display the list once data has loaded
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4 text-white">Anime</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {anime.map((m) => (
          <Link key={m.id} to={`/movie/${m.id}`} className="group">
            <img
              src={`https://image.tmdb.org/t/p/w300${m.poster_path}`}
              alt={m.title}
              className="rounded-lg w-full h-64 object-cover group-hover:opacity-80 transition"
            />
            <div className="mt-2 text-sm text-gray-300 truncate">
              {m.title}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
