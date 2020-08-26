import pkg from "graphql-yoga";
import resolvers from "./graphQL/resolver.js";
const { GraphQLServer } = pkg;

const server = new GraphQLServer({
  typeDefs: "graphQL/schema.graphql", // 모든 타입을 설명해놓은 파일을 적으면됨.
  resolvers,
});

server.start(() => console.log("helloieproei"));
