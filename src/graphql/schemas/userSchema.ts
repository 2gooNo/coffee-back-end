import { gql } from "graphql-tag";

export const userType = gql`
  type User {
    fullName: String
    email: String
    password: String
    avatar: String
    favotites: [String!]
    adress: String
  }
  input createUserInput {
    fullName: String
    email: String
    password: String
    avatar: String
  }
  input getOneUserInput {
    userId: String
  }
  type Query {
    getAllUser: [User!]
    getOneUser(input: getOneUserInput): User
  }

  type Mutation {
    addUser(input: createUserInput): User
  }
`;
