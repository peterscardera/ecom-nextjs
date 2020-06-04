// graphql yoga server

const { GraphQLServer } = require("graphql-yoga");
//import our resolvers they answer where the data comes from and what it does 2 types: query and mutations
const Mutations = require("./resolvers/Mutations");
const Query = require("./resolvers/Query");
const db = require("./db");

//create the graphql yoga server

function createServer() {
  return new GraphQLServer({
    typeDefs: "src/schema.graphql",
    resolvers: {
      Mutations: Mutations,
      Query: Query,
    },
    resolverValidationOptions: {
      requireResolversForResolveType: false,
    },
    context: (req) => ({ ...req, db }),
  });
}

module.exports = createServer;

//prisma server and graphql yoga server
//resolverValidationOptions removes the warnings
//context ==> access the db from the resolvers and its passed via context