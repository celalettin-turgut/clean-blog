const express = require("express");

const app = express();
const PORT = 8080;

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  console.log("yeni istek");
  res.render("index");
});

app.get("/about", (req, res) => {
  console.log("yeni istek");
  res.render("about");
});

app.get("/add", (req, res) => {
  console.log("yeni istek");
  res.render("add_post");
});

app.listen(PORT, () => {
  console.log(`${PORT} portundan gelen istekler dinleniyor`);
});
