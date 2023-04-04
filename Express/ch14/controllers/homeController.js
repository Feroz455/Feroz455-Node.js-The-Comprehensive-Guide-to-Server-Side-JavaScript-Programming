const homecontroller = (req, res) => {
  const data = {
    name: "Firoz",
    id: 10,
  };
  res.render("index", data);
};
export { homecontroller };
