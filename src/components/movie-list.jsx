import { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import API from "../services/api-service";

function MovieList({ movieClicked, newMovie }) {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const newMovies = movies.map((movie) =>
      movie.id === newMovie.id ? newMovie : movie
    );
    setMovies(newMovies);
  }, [newMovie]);

  useEffect(() => {
    const fetchListOfMovies = async () => {
      const response = await API.fetchMovies();
      if (response) {
        setMovies(response);
      }
    };
    fetchListOfMovies();
  }, []);

  const removeMovie = async (movieToBeRemoved) => {
    const response = API.removeMovie(movieToBeRemoved.id);
    if (response) {
      const newMovies = movies.filter(
        (movie) => movie.id !== movieToBeRemoved.id
      );
      setMovies(newMovies);
    }
  };

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      {movies.map((movie) => {
        return (
          <div
            key={movie.id}
            className="grid grid-cols-[1fr_auto_auto] gap-3 p-3"
          >
            <h2
              className="text-xl cursor-pointer"
              onClick={() => {
                movieClicked(movie, false);
              }}
            >
              {movie.title}
            </h2>
            <FaEdit
              onClick={(event) => {
                movieClicked(movie, true);
              }}
            />
            <MdDelete
              onClick={(event) => {
                removeMovie(movie);
              }}
            />
          </div>
        );
      })}
    </div>
  );
}

export default MovieList;
