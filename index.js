
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/login", (req, res) => {
  res.send("you are logged in");
});

app.get("/logout", (req, res) => {
  res.send("you are logged out");
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
console.log("piyush");
