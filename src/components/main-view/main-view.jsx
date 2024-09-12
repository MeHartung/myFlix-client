import React, { useState, useEffect } from 'react';
import { MovieCard } from '../movie-card/movie-card.jsx';
import { MovieView } from '../movie-view/movie-view.jsx';
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";

export const MainView = () => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token");
  const [user, setUser] = useState(storedUser? storedUser : null);
  const [token, setToken] = useState(storedToken? storedToken : null);
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);


  useEffect(() => {
    if (!token) return;

    fetch('https://movies-flix-hartung-46febebee5c5.herokuapp.com/movies', {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => response.json())
    .then((data) => {
      const moviesFromApi = data.map((movie) => {
        return {
          id: movie._id, 
          title: movie.Title,  
          image: movie.ImagePath || "https://via.placeholder.com/150",  
          director: movie.Director || "Unknown Director", 
          description: movie.Description || "No description available",
          genre: movie.Genre || "Unknown genre", 
        };
      });
      setMovies(moviesFromApi);
    })
    .catch((error) => {
      console.error('Error fetching movies:', error);
    });
  }, [token]); 

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  const handleBackClick = () => {
    setSelectedMovie(null);
  };

  // If the user is not logged in, show the login/signup view
  if (!user) {
    return (
      <>
        <LoginView onLoggedIn={(user, token) => {
          setUser(user);
          setToken(token);
          localStorage.setItem("user", JSON.stringify(user)); // Store user and token
          localStorage.setItem("token", token);
        }} />
        or
        <SignupView />
      </>
    );
  }

  return (
    <div>
      {selectedMovie ? (
        <MovieView movie={selectedMovie} onBackClick={handleBackClick} />
      ) : (
        <div>
          <button onClick={() => { 
            setUser(null); 
            setToken(null); 
            localStorage.clear(); 
          }}>
            Logout
          </button>

          {movies.length === 0 ? (
            <p>Loading movies...</p>
          ) : (
            movies.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                onMovieClick={handleMovieClick}
              />
            ))
          )}
        </div>
      )}
    </div>
  );
};
