import { createServer, request } from "http";
console.log("createServer");

const server = createServer((response, request) => {
  console.log("CreateServer");
  response.writeHead(200, { "content-type": "text/html; charset=utf-8" });

  const url = new URL(request.utl, "http://localhost:8080");
  console.log(url);
  console.log("Name", url.searchParams.get("name"));

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

console.log("listen");

server.listen(8080, () => {
  console.log(
    `Server is listening to http://localhost:${server.address().port}`
  );
});
