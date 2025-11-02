import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";


function SavedMovies() {

  // Get's the currently logged-in user from AuthContext
  const { user } = useAuth();
  const [savedMovies, setSavedMovies] = useState([]);


  // useEffect to Fetch saved movies from Firestore
  useEffect(() => {
    // async function to fetch saved movies
    const fetchSavedMovies = async () => {
      // conditional rendering to check if no user is logged in, exit early
      if (!user) return;

      //Reference the user's document in Firestore
      const userRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(userRef);

      // If the document exists, update local state with saved movies
      if (docSnap.exists()) {
        // Use empty array fallback if "savedMovies" field is missing
        setSavedMovies(docSnap.data().savedMovies || []);
      }
    };

    // Invoke the fetch function once user is available
    fetchSavedMovies();
  }, [user]); // it going to re run when the user changes


  return (
    <div className="p-6 text-white">
      {/* Page Title */}
      <h1 className="text-2xl font-semibold mb-6">Saved for Later</h1>

      {/* If no saved movies, show a placeholder message */}
      {savedMovies.length === 0 ? (
        <p className="text-gray-400">You haven’t saved any movies yet.</p>
      ) : (
        // If there are saved movies, display them in a responsive grid
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {savedMovies.map((movie, index) => (
            // Each movie is wrapped in a Link to its details page
            <Link to={`/movie/${movie.id}`} key={index}>
              <div className="cursor-pointer hover:scale-105 transition-transform">
                {/* Movie Poster */}
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                  alt={movie.title}
                  className="rounded-lg"
                />
                {/* Movie Title */}
                <p className="mt-2 text-sm text-center">{movie.title}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
 
export default SavedMovies;
