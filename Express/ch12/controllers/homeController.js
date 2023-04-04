const homeController = (req, res) => {
  //   res.sendFile(join(process.cwd(), "views", "index.ejs"));
  //   res.send("<h1>Home page</h1>");
  res.render("index", { name: "Firoz" });
};
export { homeController };
