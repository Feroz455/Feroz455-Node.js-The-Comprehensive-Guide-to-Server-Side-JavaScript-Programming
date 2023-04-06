import express, { request, response } from "express";
const app = express();
app.get("/", (request, response) => {
  console.log(request.method);
  console.log(request.originalUrl);
  console.log(request.params);
  console.log(request.path);
  console.log(request.protocol);
  console.log(request.query);

  response.send(`My First express application`);
});
app.listen(8080, () => {
  console.log(`Movie database accessible at http://localhost:8080`);
});
