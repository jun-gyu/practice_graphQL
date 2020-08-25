import pkg from "graphql-yoga";
import resolvers from "./graphQL/resolver.js";
const { GraphQLServer } = pkg;

const server = new GraphQLServer({
  typeDefs: "graphQL/schema.graphql",
  resolvers,
});

server.start(() => console.log("helloieproei"));
