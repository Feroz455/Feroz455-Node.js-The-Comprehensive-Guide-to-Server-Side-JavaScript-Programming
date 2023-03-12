import { createServer, request } from "http";

const server = createServer((request, response) => {
  // console.log(request);
  // console.log(response);

  response.writeHead(200, { "content-type": "text/html" });

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
      <title>Address book</title>
    </head>
    <body>
      <h1>Address book</h1>
    </body>
  </html>  
  `;
  response.end(responseBody);
});

server.listen(8080, () => {
  console.log(
    `Address book reachable via http://localhost:${server.address().port}`
  );
});
