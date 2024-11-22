const API_URL = "http://127.0.0.1:8000/api";
const TOKEN = "a8952c646b2d41e9a0bd537598e3fd5629eb03f2";

export default class API {
  static async fetchMovies() {
    // If the class is static, we can call it without creating an instance of the API class
    const response = await fetch(`${API_URL}/movies/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${TOKEN}`,
      },
    });

    if (!response.ok) {
      return null;
    }

    return await response.json();
  }

  static async getMovie(movie_id) {
    // If the class is static, we can call it without creating an instance of the API class
    const response = await fetch(`${API_URL}/movies/${movie_id}/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${TOKEN}`,
      },
    });

    if (!response.ok) {
      return null;
    }

    return await response.json();
  }

  static async rateMovie(movie_id, body) {
    // If the class is static, we can call it without creating an instance of the API class
    const response = await fetch(`${API_URL}/movies/${movie_id}/rate_movie/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${TOKEN}`,
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      return null;
    }

    return await response.json();
  }

  static async updateMovie(movie_id, body) {
    // If the class is static, we can call it without creating an instance of the API class
    const response = await fetch(`${API_URL}/movies/${movie_id}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${TOKEN}`,
      },
      body: JSON.stringify(body), // This will convert this object to a string and send it over the API
    });

    if (!response.ok) {
      return null;
    }

    return await response.json();
  }

  static async createMovie(body) {
    // If the class is static, we can call it without creating an instance of the API class
    const response = await fetch(`${API_URL}/movies/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${TOKEN}`,
      },
      body: JSON.stringify(body), // This will convert this object to a string and send it over the API
    });

    if (!response.ok) {
      return null;
    }

    return await response.json();
  }

  static async removeMovie(movie_id) {
    // If the class is static, we can call it without creating an instance of the API class
    const response = await fetch(`${API_URL}/movies/${movie_id}/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${TOKEN}`,
      },
    });

    if (!response.ok) {
      return false;
    }

    return true;
  }
}
