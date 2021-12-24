const express = require("express");
const mongoose = require("mongoose");
const Post = require("./models/Post");

const app = express();
const PORT = 8080;

//start the database
mongoose.connect(
  "mongodb://localhost/clean-blog",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, data) => {
    if (!err) console.log("Database baglantisi basari ile saglandi");
  }
);

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", async (req, res) => {
  const posts = await Post.find({});
  res.render("index", { posts });
});

app.get("/about", (req, res) => {
  console.log("yeni istek");
  res.render("about");
});

app.get("/add", (req, res) => {
  console.log("yeni istek");
  res.render("add_post");
});

app.post("/add_post", async (req, res) => {
  const post = Post.create(req.body);
  res.redirect("/");
});

app.get("/post", (req, res) => {
  console.log("yeni istek");
  res.render("post");
});

app.listen(PORT, () => {
  console.log(`${PORT} portundan gelen istekler dinleniyor`);
});
