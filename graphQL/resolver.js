import { getMovieById, getMovies, deleteMovie, addMovie } from "./db.js";

const resolvers = {
  Query: {
    movies: () => getMovies(), //항상 함수 또는 객체여야 한다 . 함수일 경우 함수를 실행해줘야함
    movie: (_, { id }) => getMovieById(id), //첫번째 arg는 현재 obj를 보내는 arg
  },
  Mutation: {
    addMovie: (_, { name, score }) => addMovie(name, score),
  },
};

// Resolver Query.name must be object or function 오키도키
// localhost:4000 은 playGround 즉 GraphQL의 postman 같은거라고 생각 하면 됨.
//GraphQL 서버가 Query 나 Mutation 같은 정의를 발견하면. resolver로 와서 정보를 찾음.
//(정의라는건 type에 Query같은 이름이 있느냐 없느냐.)
export default resolvers;
