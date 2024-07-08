import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";
import { NextRequest } from "next/server";
import { resolvers } from "@/graphql/resolvers";
import { typeDefs } from "@/graphql/schemas";
import connectTodoDB from "@/utils/dbConnection";
import NextCors from "nextjs-cors";
import { NextApiRequest, NextApiResponse } from "next";

connectTodoDB();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
});

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  // Apply CORS middleware
  await NextCors(req, res, {
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200, // Some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  // Start Apollo Server and create Next.js handler
  const apolloHandler = startServerAndCreateNextHandler<NextRequest>(server, {
    context: async () => ({ req }),
  });

  // Execute the Apollo Server handler
  return apolloHandler(req, res);
};

export default handler;
