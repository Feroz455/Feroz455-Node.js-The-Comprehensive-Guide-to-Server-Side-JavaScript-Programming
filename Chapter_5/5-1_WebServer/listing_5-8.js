import { createServer, request } from "http";

const addresses = [
  {
    id: 1,
    firstName: "Firoz",
    lastName: "Mahmud",
    street: "12 Narayanganj",
    city: "Narayanganj",
    country: "Bangladesh",
  },
  {
    id: 2,
    firstName: "Maliha",
    lastName: "Rahman",
    street: "Shimultola Chottogram",
    city: "Chottogram",
    country: "Bangladesh",
  },
];
const server = createServer((request, response) => {
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
      <title>Address Book</title>
    </head>
    <body>
      <h1>Address book</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First name</th>
            <th>Last name</th>
          </tr>
        </thead>
        <tbody>
          ${addresses.map(createRow).join(" ")}
        </tbody>
      </table>
    </body>
  </html>
  `;
  response.end(responseBody);
});
function createRow(address) {
  console.log(address);
  return `<tr>
      <td>${address.id}</td>
      <td>${address.firstName}</td>
      <td>${address.lastName}</td>
      </tr>`;
}

server.listen(8080, () => {
  console.log(
    `Address book reachable via http://localhost:${server.address().port}`
  );
});
