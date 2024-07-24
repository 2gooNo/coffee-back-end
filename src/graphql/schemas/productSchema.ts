import { gql } from "graphql-tag";

export const productType = gql`
  type Price {
    small: Int
    medium: Int
    large: Int
  }
  input InputPrice {
    small: String
    medium: String
    large: String
  }
  type Product {
    imageURL: [String!]
    name: String
    price: Price
    description: String
    categoryId: String
  }
  input addProductInput {
    imageURL: [String!]
    name: String
    price: InputPrice
    description: String
    categoryId: String
  }
  type Query {
    getAllProduct: [Product!]
  }
  type Mutation {
    addProduct(input: addProductInput): [Product!]
  }
`;
