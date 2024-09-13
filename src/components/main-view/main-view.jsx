import React, { useState, useEffect } from 'react';
import { MovieCard } from '../movie-card/movie-card.jsx';
import { MovieView } from '../movie-view/movie-view.jsx';
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"; // Import Col
import Container from "react-bootstrap/Container";

export const MainView = () => {
  let storedUser = null;
  try {
    const userFromStorage = localStorage.getItem("user");
    if (userFromStorage) {
      storedUser = JSON.parse(userFromStorage);
    }
  } catch (e) {
    console.error("Error parsing stored user", e);
  }

  const storedToken = localStorage.getItem("token");
  const [user, setUser] = useState(storedUser ? storedUser : null);
  const [token, setToken] = useState(storedToken ? storedToken : null);
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

  if (!user) {
    return (
      <Container>
        <Row className="justify-content-md-center">
          <Col md={5}>
            <LoginView onLoggedIn={(user, token) => {
              setUser(user);
              setToken(token);
              localStorage.setItem("user", JSON.stringify(user));
              localStorage.setItem("token", token);
            }} />
            <p>or</p>
            <SignupView />
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <Container>
      <Row className="justify-content-md-center">
        {selectedMovie ? (
          <Col md={12}>
            <MovieView movie={selectedMovie} onBackClick={handleBackClick} />
          </Col>
        ) : (
          <>
            <button
              className="btn btn-secondary mb-4"
              onClick={() => {
                setUser(null);
                setToken(null);
                localStorage.clear();
              }}
            >
              Logout
            </button>
            {movies.length === 0 ? (
              <p>Loading movies...</p>
            ) : (
              movies.map((movie) => (
                <Col className="mb-5" key={movie.id} md={3}>
                  <MovieCard
                    movie={movie}
                    onMovieClick={(newSelectedMovie) => {
                      setSelectedMovie(newSelectedMovie);
                    }}
                  />
                </Col>
              ))
            )}
          </>
        )}
      </Row>
    </Container>
  );
};
