// const add = require("./add");

// const result = add(1, 3);
// console.log("Result", result);
const wc = require("./word-count");
const sentence = "Where there is much light, there is also shadow";
const wordCount = wc(sentence);
console.log(sentence);
for (let i in wordCount) {
  console.log(wordCount[i] + " x " + i);
}
