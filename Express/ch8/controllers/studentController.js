const allstudent = (req, res, next) => {
  res.send("All student");
};

const deleteStudent = (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  console.log(id);
  if (id == 10) {
    res.send("This is sonam's id, This shouldn't be deleted");
  } else res.send("Student deleted", id);
};
module.exports = { allstudent, deleteStudent };
