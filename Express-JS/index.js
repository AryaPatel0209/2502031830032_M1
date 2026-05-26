const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("Successfully server created");
});

app.get("/", (req, res) => {
  res.send(`hello world`);
});
app.get("/adi", (req, res) => {
  res.send(`Panda baby `);
});


