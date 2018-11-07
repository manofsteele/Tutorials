const express = require("express");
const mongoose = require("mongoose");
let bodyParser = require("body-parser");
const app = express();
const db = require("./config/keys").mongoURI;

mongoose
  .connect(db)
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.get("/", (req, res) => {
//   res.send("Hello world");
// });

app.post("/", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.get("/test", (req, res) => {
  console.log(res);
});

// app.listen(3000, () => console.log("Hello"));
