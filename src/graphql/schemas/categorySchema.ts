import { gql } from "graphql-tag";

export const categoryType = gql`
  type Category {
    name: String
    _id: String
  }
  input addCategoryInput {
    categoryName: String
  }
  type Query {
    getAllCategory: [Category!]
  }
  type Mutation {
    addCategory(input: addCategoryInput): [Category!]
  }
`;
