const express = require("express");

const app = express();

app.use("/test", (req, res) => {
  res.send("Test! test! test!");
});
app.use("/hello", (req, res) => {
  res.send("Hello! Hello! Hello!");
});

app.listen(7777, () => {
  console.log("server stated listeing to port 7777");
});
