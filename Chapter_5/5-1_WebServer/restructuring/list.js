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
        <th>Image</th>
        <th>Id</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>delete</th>
        <th>edit</th>
        </tr>
      </thead>
      <tbody>
        ${addresses.map(createRow).join("")}
      </tbody>
    </table>
    <a href="/new">create new data record</a>
  </body>
</html>
`;
}
function createRow(address) {
  const img = address.file
    ? `<img src="${address.file}" height="20" width="20">`
    : "";

  return `<tr>
          <td>${img}</td>
          <td>${address.id}</td>
          <td>${address.firstname}</td>
          <td>${address.lastname}</td>
          <td><a href="/delete/${address.id}">delete</a></td>
          <td><a href="/edit/${address.id}">edit</a></td>
        </tr>`;
}
