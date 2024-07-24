import mergeTypeDefs from "graphql-tools-merge-typedefs";
import { userType } from "./userSchema";
import { categoryType } from "./categorySchema";
import { productType } from "./productSchema";

export const typeDefs = mergeTypeDefs([userType, categoryType, productType]);
