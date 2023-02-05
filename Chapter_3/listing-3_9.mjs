import { createServer } from "http";

const server = createServer((request, response) => {
  response.writeHead(200, { "content-type": "text/html; charset=utf-8" });
  const body = `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta
        http-equiv="X-UA-Compatible"
        content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
    </head>
    <body>
      <h1 style="color: green">Hello World</h1>
    </body>
  </html>
  `;
  response.end(body);
});
server.listen(8080, () => {
  console.log(`server is listing  to http//:localhost${server.address().port}`);
  `Server is listening to http://localhost:${server.address().port}`;
  console.log(
    `Server is listening to http://localhost:${server.address().port}`
  );
});
