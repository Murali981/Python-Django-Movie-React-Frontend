import { useState } from "react";
import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import API from "../services/api-service";

function MovieDetails({ movie, updateMovie }) {
  const [highlighted, setHighlighted] = useState(-1);
  const [error, setError] = useState(null);

  const rateMovie = async (rate) => {
    const rateMovie = async () => {
      const response = await API.rateMovie(movie.id, { stars: rate });
      if (response) {
        getNewMovie(response);
      }
    };
    rateMovie();
  };

  const getNewMovie = async () => {
    const fetchMovie = async () => {
      const response = await API.getMovie(movie.id);
      if (response) {
        updateMovie(response);
      }
    };
    fetchMovie();
  };

  return (
    <React.Fragment>
      {movie && (
        <div>
          <h1 className="text-2xl pb-3">{movie.title}</h1>
          <p className="text-xl pb-3">{movie.description}</p>
          <div className="flex">
            <FaStar className={movie.avg_rating > 1 && "text-orange-400"} />
            <FaStar className={movie.avg_rating > 2 && "text-orange-400"} />
            <FaStar className={movie.avg_rating > 3 && "text-orange-400"} />
            <FaStar className={movie.avg_rating > 4 && "text-orange-400"} />
            <p>({movie.no_of_ratings})</p>
          </div>
          <h1 className="border-t-2 border-purple-600 mt-5">Rate the movie!</h1>
          <div className="flex text-3xl">
            {[...Array(5)].map((el, index) => {
              return (
                <FaStar
                  className={highlighted > index && "text-purple-400"}
                  onMouseEnter={() => setHighlighted(index + 1)}
                  onMouseLeave={() => setHighlighted(-1)}
                  onClick={() => rateMovie(index + 1)}
                />
              );
            })}
          </div>
          {error && <p>{error}</p>}
        </div>
      )}
    </React.Fragment>
  );
}

export default MovieDetails;
