export function getList(addresses) {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta
      http-equiv="X-UA-Compatible"
      content="IE=edge" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href=" style.css" />
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
          <th>delete</th>
        </tr>
      </thead>
      <tbody>
        ${addresses.map(createRow).join("")}
      </tbody>
    </table>
  </body>
</html>
`;
}
function createRow(address) {
  return `<tr>
          <td>${address.id}</td>
          <td>${address.firstname}</td>
          <td>${address.lastname}</td>
          <td><a href="/delete/${address.id}">delete</a></td>
          </tr>`;
}
