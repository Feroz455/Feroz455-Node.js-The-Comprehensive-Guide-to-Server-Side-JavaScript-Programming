const path = require("path");

const homeController = (req, res) => {
  //   res.send("<h1>Home Page</h1>");
  res.sendFile(path.join(process.cwd(), "views", "index.html"));
};
module.exports = homeController;
