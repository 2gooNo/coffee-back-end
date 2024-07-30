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
  input loginInput {
    email: String
    password: String
  }
  type Token {
    token: String
  }
  type Query {
    getAllUser: [User!]
    logIn(input: loginInput): Token
  }

  type Mutation {
    addUser(input: createUserInput): User
  }
`;
