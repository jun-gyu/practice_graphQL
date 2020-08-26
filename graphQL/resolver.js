import { getMovieById, getMovies, deleteMovie, addMovie } from "./db.js";

const resolvers = {
  Query: {
    movies: () => getMovies(), //항상 함수 또는 객체여야 한다 . 함수일 경우 함수를 실행해줘야함
    movie: (_, { id }) => getMovieById(id), //첫번째 arg는 현재 obj를 보내는 arg
  },
  Mutation: {
    addMovie: (_, { name, score }) => addMovie(name, score),
    deleteMovie: (_, { id }) => deleteMovie(id),
  },
};
// body parser를 쓸필요도 없고 request response를 쓸필요도없고.... 엄청 간다해지는데..? 서버에서 할게없어.
// Resolver Query.name must be object or function 오키도키
// localhost:4000 은 playGround 즉 GraphQL의 postman 같은거라고 생각 하면 됨.
//GraphQL 서버가 Query 나 Mutation 같은 정의를 발견하면. resolver로 와서 정보를 찾음.
//(정의라는건 type에 Query같은 이름이 있느냐 없느냐.)
export default resolvers;
