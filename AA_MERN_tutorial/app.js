const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const users = require("./routes/api/users");
const posts = require("./routes/api/posts");

const db = require("./config/keys").mongoURI;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose
  .connect(db)
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server is running on port ${port}`));

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.get("/test", (req, res) => {
  console.log(res);
});

app.use("/api/users", users);
app.use("/api/posts", posts);

// app.listen(3000, () => console.log("Hello"));
