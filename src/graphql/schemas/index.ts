import mergeTypeDefs from "graphql-tools-merge-typedefs";
import { userType } from "./userSchema";
export const typeDefs = userType;
// export const typeDefs = mergeTypeDefs([todoType, teamType]);
