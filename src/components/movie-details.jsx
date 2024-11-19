import { useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";

function MovieDetails({ movie }) {
  const [highlighted, setHighlighted] = useState(-1);

  return (
    <div>
      {movie && (
        <div>
          <h1>{movie.title}</h1>
          <p>{movie.description}</p>
          <div className="flex">
            <FaStar className={movie.avg_rating > 1 && "text-orange-400"} />
            <FaStar className={movie.avg_rating > 2 && "text-orange-400"} />
            <FaStar className={movie.avg_rating > 3 && "text-orange-400"} />
            <FaStar className={movie.avg_rating > 4 && "text-orange-400"} />
            <p>({movie.no_of_ratings})</p>
          </div>
          <h1>Rate the movie!</h1>
          <div className="flex">
            {[...Array(5)].map((el, index) => {
              return (
                <FaStar
                  className={highlighted > index && "text-purple-400"}
                  onMouseEnter={() => setHighlighted(index + 1)}
                  onMouseLeave={() => setHighlighted(-1)}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default MovieDetails;
