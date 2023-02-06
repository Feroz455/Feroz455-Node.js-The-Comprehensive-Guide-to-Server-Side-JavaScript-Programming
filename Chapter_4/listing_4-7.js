// Node.js program to demonstrate
// the fs.readFile() method

// Include fs module
var fs = require("fs");

// Use fs.readFile() method to read the file
fs.readFile("Chapter_4/input.txt", function (err, data) {
  // Display the file content
  console.log(data.toString());
});

console.log("readFile called");
