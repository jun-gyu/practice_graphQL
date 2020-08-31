import axios from "axios";
// import fetch from "node-fetch";
const BASE_URL = "https://yts.mx/api/v2/";
const LIST_MOVIES_URL = `${BASE_URL}list_movies.json`;
const MOVIES_DETAILS_URL = `${BASE_URL}movie_details.json`;
const MOVIES_SUGGESTIONS_URL = `${BASE_URL}movie_suggestions.json`;

const getMovies = async (limit, rating) => {
  const {
    data: {
      data: { movies },
    },
  } = await axios(LIST_MOVIES_URL, {
    params: {
      limit: limit,
      minimum_rating: rating,
    },
  });
  return movies;
};

const getMovie = async (id) => {
  const {
    data: {
      data: { movie },
    },
  } = await axios(MOVIES_DETAILS_URL, {
    params: {
      movie_id: id,
    },
  });
  return movie;
};

const getSuggestions = async (id) => {
  const {
    data: {
      data: { movies },
    },
  } = await axios(MOVIES_SUGGESTIONS_URL, {
    params: {
      movie_id: id,
    },
  });
  return movies;
};
export { getMovies, getMovie, getSuggestions };
