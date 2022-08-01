import { ApolloServer } from "apollo-server";
import typeDefs from "./shema/typeDefs";
import { resolvers } from "./shema/resolvers";
import { context } from "./script";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context,
});

server.listen().then(({ url }) => {
  console.log(`Your API is Running ${url}:)`);
});
