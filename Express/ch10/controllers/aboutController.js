const path = require("path");
const aboutController = (req, res) => {
  //   res.sendFile("E:\\Nodejs\\Express\\ch10\\views\\about.html");
  res.sendFile(path.join(process.cwd(), "views", "about.html"));
};
module.exports = aboutController;
