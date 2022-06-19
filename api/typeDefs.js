import { gql } from "apollo-server-express";
const Book = import("../book");
console.log(Book);

const typeDefs = gql`
  ${Book.types}
  
  type Query {
    ${Book.queries}
  }
  
  type Mutation {
    ${Book.mutations}
  }
`;

export default typeDefs;