export function getForm(addresses, id) {
  let address = {
    id: "",
    firstname: "",
    lastname: "",
    street: "",
    city: "",
    country: "",
  };
  if (id) {
    address = addresses.find((adr) => adr.id === parseInt(id, 10));
  }
  const form = `<!DOCTYPE html>
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
      <form
        action="/save"
        enctype="multipart/form-data"
        method="POST">
        <input
          type="hidden"
          name="id"
          id="id"
          value="${address.id}" />
        <div>
          <label for="firstname">First Name</label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            value="${address.firstname}" />
        </div>
        <div>
          <label for="lastname">Last Name</label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            value="${address.lastname}" />
        </div>
        <div>
          <label for="street">Street</label>
          <input
            type="text"
            name="street"
            id="street"
            value="${address.street}" />
        </div>
        <div>
          <label for="city">City</label>
          <input
            type="text"
            id="city"
            name="city"
            value="${address.city}" />
        </div>
        <div>
          <label for="country">Country</label>
          <input
            type="text"
            id="country"
            name="country"
            value="${address.country}" />
        </div>
        <div>
        <label for="upload">file</label>
        <input type="file" id="upload" name="upload" />
        </div>
        <div>
          <button type="submit">Save</button>
        </div>
      </form>
    </body>
  </html>
  `;
  return form;
}
