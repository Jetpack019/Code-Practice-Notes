const express = require("express");
const app = express();
const router = app.router;
const my_data = [
  {
    name: "Jade",
    job: "FrontEnd Dev",
  },
];

app.get("/", (req, res) => {
  res.send("hello testing");
});

app.get("/post", (req, res) => {
  res.send(my_data);
});

app.listen(3000, () => {
  console.log(`Server is running in PORT 3000`);
});
