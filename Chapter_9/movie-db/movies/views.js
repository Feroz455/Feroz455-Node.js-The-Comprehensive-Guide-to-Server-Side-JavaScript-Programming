const render = (movies) => {
  return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />

        <title>Movie list</title>
      </head>
      <body>
      <form action="/movies/new" method="post">
        <input type="hidden" id="id" name="id" value="" />
        <div>
          <label for="title">Titel:</label>
          <input type="text" id="title" name="title" value="" />
        </div>
        <div>
          <label for="id">Year:</label>
          <input type="text" id="year" name="year" value="" />
        </div>
        <div>
          <button type="submit">Create New</button>
        </div>
      </form>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
            ${movies
              .map(
                (movie) => `
            <tr>
              <td>${movie.id}</td>
              <td>${movie.title}</td>
          <td><a href="/movies/deletes/${movie.id}">delete</a></td>
          <td><a href="/movies/form/${movie.id}">edit</a></td>

            </tr>
            `
              )
              .join("")}
          </tbody>
        </table>
      </body>
    </html>
    `;
};

export { render };
