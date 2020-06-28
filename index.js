"use strict";
const { graphql, buildSchema } = require("graphql");
const express = require("express");
const gqlMiddleware = require("express-graphql");

const app = express();
const port = process.env.port || 3000;
//Schema
const schema = buildSchema(`
type Query {
  name: String
  message: String
}`);

//Resolvers
const resolvers = {
  name: () => {
    return "Marco";
  },
  message: () => {
    return "The beggining";
  },
};

app.use(
  "/api",
  gqlMiddleware({
    schema: schema,
    rootValue: resolvers,
    graphiql: true,
  })
);

app.listen(port, () => {
  console.log(`The project is running at http://localhost:${port}/api`);
});

//exe
// graphql(schema, "{ message }", resolvers).then((data) => {
//   console.log(data);
// });
