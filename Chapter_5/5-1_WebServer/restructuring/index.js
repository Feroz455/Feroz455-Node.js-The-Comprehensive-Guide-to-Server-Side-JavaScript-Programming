import { createServer } from "http";
import { parse } from "querystring";
import data from "./data.js";
import { deleteAddress } from "./delete.js";
import { getForm } from "./form.js";
import { getList } from "./list.js";
import { saveAddress } from "./save.js";
import { readFile } from "fs";

let addresses = data;

const server = createServer((request, response) => {
  const parts = request.url.split("/");
  if (parts.includes("delete")) {
    addresses = deleteAddress(addresses, parts[2]);
    redirect(response, "/");
  } else if (parts.includes("new")) {
    send(response, getForm());
  } else if (parts.includes("edit")) {
    send(response, getForm(addresses, parts[2]));
  } else if (parts.includes("save") && request.method === "POST") {
    let body = "";
    request.on("readable", () => {
      const Data = request.read();
      body += Data !== null ? Data : "";
    });
    request.on("end", () => {
      const address = parse(body);
      addresses = saveAddress(addresses, address);
      redirect(response, "/");
    });
  } else if (request.url === "/style.css") {
    readFile(
      "Chapter_5/5-1_WebServer/restructuring/public/style.css",
      "utf8",
      (err, data) => {
        if (err) {
          response.statusCode = 404;
          response.end();
        } else {
          console.log(data);
          response.end(data);
        }
      }
    );
  } else {
    // console.log(addresses);
    send(response, getList(addresses));
  }
});
server.listen(8080, () => {
  console.log(`Address book reachable at http://localhost:8080`);
});

function send(response, responseBody) {
  response.writeHead(200, { "content-type": "text/html" });
  response.end(responseBody);
}
function redirect(response, to) {
  response.writeHead(302, { location: "/", "content-type": "text/plain" });
  response.end("302 Redirecting to /");
}
// const server = createServer((request, response) => {
//   response.writeHead(200, { "content-type": "text/html" });
//   console.log(request.url);
//   const responseBody = getList(data);
//   response.end(responseBody);
// });

// let addresses = data;
// let responseBody;
// const server = createServer((request, response) => {
//   const parts = request.url.split("/");
//   if (parts.includes("delete")) {
//     addresses = deleteAddress(addresses, parts[2]);
//     redirect(response, "/");
//   } else {
//     response.writeHead(200, { "content-type": "text/html" });
//     responseBody = getList(addresses);
//     response.end(responseBody);
//   }
// });
// server.listen(8080, () => {
//   console.log(
//     `Address book reachable via http://localhost:${server.address().port}`
//   );
// });

// function redirect(response, to) {
//   response.writeHead(302, { location: "/", "content-type": "text/plain" });
//   response.end("302 Redirecting to /");
// }

// console.log(getList(data));
// console.log(data);
/*
const server = createServer((request, response) => {
  response.writeHead(200, { "content-type": "text/html" });
  const responseBody = getList(data);
  response.end(responseBody);
});
*/
