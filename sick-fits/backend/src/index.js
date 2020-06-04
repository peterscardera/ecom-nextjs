// the entry  point so we need tohave access to all the env files!!!
// we spin up a version of this yooga graphql server
require("dotenv").config({ path: "variables.env"})
const createServer = require("./createServer")
const db = require("./db")

const server = createServer();

// use express middlewear to handle cookies and populate current user (JWT)

server.start({
    cors: {
        credentials: true,
        origin: process.env.FRONTEND_URL,
    }
}), details => {
    console.log(`server running on port http:/localhost: ${details.port}`)
}