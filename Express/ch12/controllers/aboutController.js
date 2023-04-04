const aboutController = (req, res) => {
  //   res.sendFile(join(process.cwd(), "views", "index.ejs"));
  //   res.send("<h1>about page</h1>");
  res.render("about", { email: "Fmahmud455@gmail.com" });
};
export { aboutController };
