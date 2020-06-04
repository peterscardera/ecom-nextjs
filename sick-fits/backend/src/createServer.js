// graphql yoga server

const { GraphQLServer } = require("graphql-yoga");
//import our resolvers they answer where the data comes from and what it does 2 types: query and mutations
const Mutation = require("./resolvers/Mutation");
const Query = require("./resolvers/Query");
const db = require("./db");

//create the graphql yoga server
//// link it to the schema.graphql and match anything on the schema with a  query or mutation resolver
// we expose the db to every request


//** MAKE SURE TO HAVE A PRETEND MUTATION AND QUERY in schema.graphql. Something it ocould resolve to. File cant be empty */

// IN SCHEMA.GRAPHQL
// type Mutation {
//   hi: String
// }


// type Query {
// hi: String
// }

function createServer() {
  return new GraphQLServer({
    typeDefs: "src/schema.graphql",
    resolvers: {
      Mutation: Mutation,
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