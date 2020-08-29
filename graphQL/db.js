import fetch from "node-fetch";
const API_URL = "https://yts.mx/api/v2/list_movies.json";

const getMovies = (limit, rating) => {
  let REQUEST_URL = API_URL;
  limit > 0 ? (REQUEST_URL += `?limit=${limit}`) : "";
  rating > 0 ? (REQUEST_URL += `&minimum_rating=${rating}`) : "";

  return fetch(REQUEST_URL)
    .then((res) => res.json())
    .then((json) => json.data.movies);
};

export { getMovies };
