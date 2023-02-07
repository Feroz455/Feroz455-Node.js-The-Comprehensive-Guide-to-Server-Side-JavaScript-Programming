import { Server } from "http";
const server = new Server();

server.on("request", (request, response) => {
  response.statusCode = 200;
  response.setHeader("content-type", "text/html");
  const responseBody = `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta
        http-equiv="X-UA-Compatible"
        content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0" />
      <title>Address book 2 </title>
    </head>
    <body>
      <h1>Address book</h1>
    </body>
  </html>
  `;
  response.write(responseBody);
  response.end();
});
server.on("listening", () => {
  console.log(
    `Address book reachable via http://localhost:${server.address().port}`
  );
});

server.listen(8080);
