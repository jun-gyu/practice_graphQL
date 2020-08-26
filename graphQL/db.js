let movies = [
  {
    id: 1,
    name: "Avengers-The End Game",
    score: 8,
  },
  { id: 2, name: "the GodFather I", score: 98 },
  { id: 3, name: "Logan", score: 3 },
  { id: 4, name: "다만악에서 구하소서", score: 80 },
  { id: 5, name: "Okay madam", score: 70 },
  { id: 6, name: "memento", score: 30 },
];

const getMovies = () => movies;
const getMovieById = (id) => {
  const filteredMovie = movies.filter((movie) => movie.id === id);
  return filteredMovie[0];
};
const deleteMovie = (id) => {
  const cleanedMovies = movies.filter((movie) => movie.id !== id);
  if (movies.length > cleanedMovies.length) {
    movie = cleanedMovies;
    return true;
  } else {
    return false;
  }
};
const addMovie = (name, score) => {
  const newMovie = {
    id: movies.length + 1,
    name,
    score,
  };
  movies.push(newMovie);
  return newMovie;
};

export { getMovieById, getMovies, deleteMovie, addMovie };
