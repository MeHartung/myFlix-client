import React, { useState, useEffect } from 'react';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';

export const MainView = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    fetch('https://movies-flix-hartung-46febebee5c5.herokuapp.com/movies')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
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
  }, []);

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  const handleBackClick = () => {
    setSelectedMovie(null);
  };

  return (
    <div>
      {selectedMovie ? (
        <MovieView movie={selectedMovie} onBackClick={handleBackClick} />
      ) : (
        <div>
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
