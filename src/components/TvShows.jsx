import React, { useEffect, useState } from 'react';
import requests from '../utility/Request';
import { Link } from 'react-router-dom';

// Component to display a list of popular TV shows
export default function TvShows() {

  // State to hold fetched TV show data
  const [shows, setShows] = useState([]);

  // State to handle loading status
  const [loading, setLoading] = useState(true);

  // Fetch TV shows from the TMDB API when the component mounts
  useEffect(() => {
    fetch(requests.requestTvShow)
      .then((r) => r.json())             // Convert response to JSON
      .then((d) => 
        setShows(d.results || [])) // Save TV show data or empty array if no results
      .catch((e) => console.error(e))    // Log any errors to the console
      .finally(() => setLoading(false)); // Stop loading when fetch is done
  }, []);

  // Show loading text while fetching data
  if (loading) return <div className="p-8">Loading TV shows...</div>;

  // Display fetched TV shows once loaded
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Popular TV Shows</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {shows.map((s) => (
          
          <Link key={s.id} to={`/movie/${s.id}`} className="group">

            <img
              src={`https://image.tmdb.org/t/p/w300${s.poster_path}`}
              alt={s.name}
              className="rounded-lg w-full h-64 object-cover"
            />

            <div className="mt-2 text-sm text-white truncate">{s.name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
