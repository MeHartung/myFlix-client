import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Inception",
      description:
        "A mind-bending thriller about a group of thieves who enter people's dreams to steal secrets.",
      image: "https://image.tmdb.org/t/p/w500/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg",
      genre: "Sci-Fi",
      director: "Christopher Nolan"
    },
    {
      id: 2,
      title: "The Shawshank Redemption",
      description:
        "A man imprisoned for a crime he didn't commit forms an unlikely friendship with a fellow inmate.",
      image: "https://m.media-amazon.com/images/I/51NiGlapXlL._AC_SY679_.jpg",
      genre: "Drama",
      director: "Frank Darabont"
    },
    {
      id: 3,
      title: "The Dark Knight",
      description:
        "Batman faces off against the Joker, a criminal mastermind who seeks to plunge Gotham City into anarchy.",
      image: "https://image.tmdb.org/t/p/w500/1hRoyzDtpgMU7Dz4JF22RANzQO7.jpg",
      genre: "Action",
      director: "Christopher Nolan"
    }
  ]);

  const [selectedMovie, setSelectedMovie] = useState(null);

  if (selectedMovie) {
    return (
      <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
    );
  }

  if (movies.length === 0) {
    return <div>The list is empty!</div>;
  }

  return (
    <div>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onMovieClick={(newSelectedMovie) => setSelectedMovie(newSelectedMovie)}
        />
      ))}
    </div>
  );
};


