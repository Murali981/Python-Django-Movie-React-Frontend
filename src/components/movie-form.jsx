import React, { useEffect, useState } from "react";
import API from "../services/api-service";
import { useCookies } from "react-cookie";

export default function MovieForm({ movie, updateMovie, addNewMovie }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [token] = useCookies("mr-token"); // The unique name for this cookie is "mr-token".

  useEffect(() => {
    setTitle(movie.title);
    setDescription(movie.description);
  }, [movie]);

  const saveMovie = async () => {
    const response = await API.updateMovie(
      movie.id,
      { title, description },
      token["mr-token"]
    );
    if (response) {
      updateMovie(response);
    }
  };

  const createMovie = async () => {
    const response = await API.createMovie(
      { title, description },
      token["mr-token"]
    );
    if (response) {
      addNewMovie(response);
    }
  };

  const isDisabled = title === "" || description === "";

  return (
    <React.Fragment>
      {movie && (
        <div className="grid grid-cols-2 gap-2 text-gray-500">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <p>&nbsp;</p>
          {movie.id ? (
            <button onClick={() => saveMovie()} disabled={isDisabled}>
              Update Movie
            </button>
          ) : (
            <button onClick={() => createMovie()} disabled={isDisabled}>
              Create Movie
            </button>
          )}
        </div>
      )}
    </React.Fragment>
  );
}
