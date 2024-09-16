import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

export const MovieView = ({ movie }) => {
  return (
    <div>
      <img
        src={movie.image}
        alt={movie.title}
        style={{ width: "100%", height: "auto" }}
      />
      <div>
        <h2>{movie.title}</h2>
        <p>{movie.description}</p>
        <p>
          <strong>Director: </strong> {movie.director}
        </p>
        <p>
          <strong>Genre: </strong> {movie.genre}
        </p>

        {}
        <Link to="/">
          <Button>Back</Button>
        </Link>
      </div>
    </div>
  );
};

MovieView.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
  }).isRequired,
};
