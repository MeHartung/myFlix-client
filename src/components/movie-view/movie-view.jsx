import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "./movie-view.scss";

export const MovieView = ({ movies }) => {
  const { movieId } = useParams(); 

  const movie = movies.find((b) => b.id === movieId);

  console.log("Movies array: ", movies);
  console.log("Movie ID from URL: ", movieId);
  console.log("Found movie: ", movie);

  return (
    <div>
     <div>
        <img className="w-100" src={movie.image} />
      </div>
      <div>
      <span>Title: </span>
      <span>{movie.title}</span>
      <div>
      <span>Description:</span>
        <p>{movie.description}</p>
        </div>
        <div>
        <span>Director: </span>
        <span>{movie.director}</span>
        </div>
        <p>
        <span>Genre : </span>
        <span>{movie.genre}</span>
        </p>
        <p>
        <span>Actors : </span>
        <span>{movie.actors}</span>
        </p>
      </div>
      <Link to="/">
        <button className="back-button">Back</button>
      </Link>
    </div>
  );
};