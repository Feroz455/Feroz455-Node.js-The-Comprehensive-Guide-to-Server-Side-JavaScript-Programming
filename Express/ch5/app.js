const express = require("express");
const app = express();
const port = process.env.PORT || "3000";

app.get("/", (req, res) => {
  //   console.log(req, res);
  res.send("Get Method");
});
// app.get("/save", (req, res) => {
//   res.send("Get method  Save");
// });
// app.get("/about", (req, res) => {
//   res.send("<h1>About Page</h1>");
// });

// app.get("/ab?cd", (req, res) => {
//   req.send("<h1>This route path will match acd abc </h1>");
// });
// app.all("/all", (req, res) => {
//   res.send("All method");
// });

//Regular expresion Path
// app.get(/a/, (req, res) => {
//   res.send("This is a");
// });

//more call back
// app.get(
//   "/cbexample",
//   (req, res, next) => {
//     console.log("First call back");
//     next();
//   },
//   (req, res) => {
//     res.send("More than One callback Example");
//   }
// );
// app.all("*", (req, res) => {
//   res.send("Page not found");
// });

// const cb1 = (req, res, next) => {
//   console.log("First callback");
//   next();
// };
// const cb2 = (req, res, next) => {
//   console.log("Second callback");
//   next();
// };
// const cb3 = (req, res, next) => {
//   console.log("Third callback");
//   res.send("An Array of callback");
// };

// app.get("/cbexample", [cb1, cb2, cb3]);

app
  .route("/student")
  .get((req, res) => {
    res.send("<h1>All Student</h1>");
  })
  .post((req, res) => {
    res.send("<h1>Add new Student</h1>");
  })
  .put((req, res) => {
    res.send("<h1>Update Student</h1>");
  });

app.post("/", () => {});

app.put("/", () => {});

app.patch("/", () => {});

app.delete("/", () => {});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
