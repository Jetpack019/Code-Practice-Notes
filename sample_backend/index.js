const express = require("express");
const app = express();
const router = app.router;

app.get("/", (req, res) => {
  res.send("hello testing");
});

app.listen(3000, () => {
  console.log(`Server is running in PORT 3000`);
});
