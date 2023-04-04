const aboutcontroller = (req, res) => {
  const data = {
    name: "Firoz",
    id: 10,
  };
  res.render("about", data);
};
export { aboutcontroller };
