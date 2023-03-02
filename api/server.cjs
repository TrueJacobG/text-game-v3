const express = require("express");
const app = express();
const port = 3000;

app.get("/api/v1/test", (req, res) => {
  res.send({ hello: "world" });
});

app.listen(port, () => {
  console.log("its working");
});
