import React, { useEffect, useState } from "react";
import API from "../services/api-service";

export default function MovieForm({ movie, updateMovie }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    setTitle(movie.title);
    setDescription(movie.description);
  }, [movie]);

  const saveMovie = async () => {
    const response = await API.updateMovie(movie.id, { title, description });
    if (response) {
      updateMovie(response);
    }
  };

  const createMovie = async () => {
    const response = await API.createMovie({ title, description });
    // if (response) {
    //   updateMovie(response);
    // }
  };

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
          <label htmlFor="description">Title</label>
          <textarea
            id="description"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          {movie.id ? (
            <button onClick={() => saveMovie()}>Update Movie</button>
          ) : (
            <button onClick={() => createMovie()}>Create Movie</button>
          )}
        </div>
      )}
    </React.Fragment>
  );
}
