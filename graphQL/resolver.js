const hyojin = {
  name: "HyoJin",
  age: 25,
  gender: "female",
};

const resolvers = {
  Query: {
    person: () => hyojin,
  },
};
// Resolver Query.name must be object or function 오키도키
// localhost:4000 은 playGround 즉 GraphQL의 postman 같은거라고 생각 하면 됨.

export default resolvers;
