import { useEffect, useState } from "react";

function MovieList({ movieClicked }) {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/movies/", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Token a8952c646b2d41e9a0bd537598e3fd5629eb03f2",
          },
        });

        if (!response.ok) {
          setError("Error in fetching movies");
          return;
        }

        const result = await response.json();
        setMovies(result);
      } catch {
        setError("Error in fetching movies");
      }
    };

    fetchMovies();
  }, []);

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      {movies.map((movie) => {
        return (
          <div key={movie.id}>
            <h2
              onClick={() => {
                movieClicked(movie);
              }}
            >
              {movie.title}
            </h2>
          </div>
        );
      })}
    </div>
  );
}

export default MovieList;
