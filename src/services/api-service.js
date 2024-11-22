const API_URL = "http://127.0.0.1:8000";
// const TOKEN = "a8952c646b2d41e9a0bd537598e3fd5629eb03f2";

export default class API {
  static async loginUser(body) {
    // If the class is static, we can call it without creating an instance of the API class
    const response = await fetch(`${API_URL}/auth/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      return null;
    }

    return await response.json();
  }

  static async registerUser(body) {
    // If the class is static, we can call it without creating an instance of the API class
    const response = await fetch(`${API_URL}/api/users/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      return null;
    }

    return await response.json();
  }

  static async fetchMovies(token) {
    // If the class is static, we can call it without creating an instance of the API class
    const response = await fetch(`${API_URL}/api/movies/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
    });

    if (!response.ok) {
      return null;
    }

    return await response.json();
  }

  static async getMovie(movie_id, token) {
    // If the class is static, we can call it without creating an instance of the API class
    const response = await fetch(`${API_URL}/api/movies/${movie_id}/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
    });

    if (!response.ok) {
      return null;
    }

    return await response.json();
  }

  static async rateMovie(movie_id, body, token) {
    // If the class is static, we can call it without creating an instance of the API class
    const response = await fetch(
      `${API_URL}/api/movies/${movie_id}/rate_movie/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
        body: JSON.stringify(body),
      }
    );

    if (!response.ok) {
      return null;
    }

    return await response.json();
  }

  static async updateMovie(movie_id, body, token) {
    // If the class is static, we can call it without creating an instance of the API class
    const response = await fetch(`${API_URL}/api/movies/${movie_id}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
      body: JSON.stringify(body), // This will convert this object to a string and send it over the API
    });

    if (!response.ok) {
      return null;
    }

    return await response.json();
  }

  static async createMovie(body, token) {
    // If the class is static, we can call it without creating an instance of the API class
    const response = await fetch(`${API_URL}/api/movies/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
      body: JSON.stringify(body), // This will convert this object to a string and send it over the API
    });

    if (!response.ok) {
      return null;
    }

    return await response.json();
  }

  static async removeMovie(movie_id, token) {
    // If the class is static, we can call it without creating an instance of the API class
    const response = await fetch(`${API_URL}/api/movies/${movie_id}/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
    });

    if (!response.ok) {
      return false;
    }

    return true;
  }
}
