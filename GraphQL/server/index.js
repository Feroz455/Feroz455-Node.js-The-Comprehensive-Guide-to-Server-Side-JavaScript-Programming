const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT || "3000";
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

app.listen(port, () => {
  console.log(`App is running on server http://localhost:${port}`);
});
