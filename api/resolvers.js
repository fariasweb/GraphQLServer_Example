const Book = import("../book");

const resolvers = {
  Query: {
    ...Book.resolvers.queries,
  },
  Mutation: {
    ...Book.resolvers.mutations,
  }
};

export default resolvers;