import pkg from "graphql-yoga";
import resolvers from "./graphQL/resolver.js";
const { GraphQLServer } = pkg;

const server = new GraphQLServer({
  typeDefs: "graphQL/schema.graphql", // 모든 타입을 설명해놓은 파일을 적으면됨.
  resolvers,
});

const options = {
  port: 8000,
  endpoint: "/graphql",
  subscriptions: "/subscriptions",
  playground: "/playground",
};

server.start(options, ({ port }) =>
  console.log(
    `Server started, listening on port ${port} for incoming requests.`
  )
);
