"use strict";
const { buildSchema } = require("graphql");
const express = require("express");
const gqlMiddleware = require("express-graphql");
const { readFileSync } = require("fs");
const { join } = require("path");
const resolvers = require("./lib/resovers");

const app = express();
const port = process.env.port || 3000;
// Schema
const schema = buildSchema(
  readFileSync(join(__dirname, "lib", "schema.graphql"), "utf-8")
);

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

// exe
// graphql(schema, "{ message }", resolvers).then((data) => {
//   console.log(data);
// });
