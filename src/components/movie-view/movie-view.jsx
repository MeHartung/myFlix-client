import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

export const MovieView = ({ movie, onBackClick }) => {
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
        <Button onClick={onBackClick}>Back</Button>
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
  onBackClick: PropTypes.func.isRequired,
};
