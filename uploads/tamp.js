const cheerio = require("cheerio");
const html =
  "<html><body><h1>Hello, world!</h1><p>This is a paragraph.</p></body></html>";

const $ = cheerio.load(html);

$("h1").text("Welcome!");
$("p").addClass("paragraph");

console.log($.html());
