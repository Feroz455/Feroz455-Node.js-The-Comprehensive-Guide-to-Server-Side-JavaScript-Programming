const http = require("http");

const server = http.createServer((request, response) => {
  const url = new URL(request.url, "http://localhost:8080");
  const pathname = url.pathname;
  console.log(`Received request for ${pathname}`);

  response.writeHead(200, { "Content-Type": "text/plain" });
  response.end("Hello World!");
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
