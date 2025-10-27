import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import requests from '../utility/Request';
import { FadeLoader } from 'react-spinners';

function SearchResults() {
  const { query } = useParams();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${requests.requestSearch}${query}`)
      .then(res => res.json())
      .then(data => {
        setResults(data.results || []);
        setLoading(false);
      })
      .catch(err => console.error(err));
  }, [query]);

  if (loading) return <div className="flex justify-center items-center h-screen"><FadeLoader color="#f43f5e" /></div>;

  if (!results.length) return <div className="text-center text-white mt-20">No results found for "{query}"</div>;

  return (
    <div className="p-6 text-white">
      <h2 className="text-2xl font-bold mb-6">Search results for "{query}"</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {results.map(movie => (
          <Link key={movie.id} to={`/movie/${movie.id}`}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
              className="rounded-lg hover:scale-105 transition"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SearchResults;
