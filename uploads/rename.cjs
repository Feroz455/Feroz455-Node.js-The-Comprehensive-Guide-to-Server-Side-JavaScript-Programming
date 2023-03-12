const fs = require("fs");

fs.rename("uploads/file.txt", "uploads/1/file.txt", (err) => {
  if (err) throw err;
  console.log("File renamed!");
});
