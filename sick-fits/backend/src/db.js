const { Prisma } = require("prisma-binding")

// THIS FILE CONNECTS TO THE REMOTE PRISMA DB gives us the ability to query it with JAVASCRIPT

//typeDef comes from the prisma.graphql file auto generated byy prisma
const db = new Prisma({
    typeDefs: "src/generated/prisma.graphql",
    endpoint: process.env.PRISMA_ENDPOINT,
    secret:process.env.PRISMA_SECRET,
    debug: true,
})

//debug true will conole log all the queries and mutations

module.exports = db