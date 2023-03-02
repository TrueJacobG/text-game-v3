const express = require("express");
const app = express();
const port = 3000;

var map = require("./story/pl/map.json");

app.get("/api/v1/test", (req, res) => {
  res.send({ status: "works" });
});

app.get("/api/v1/:location", (req, res, next) => {
  let location = req.params.location;

  if (!Object.keys(map).includes(location)) {
    res.status(404).send(`Error! Location {${location}} does not exist!`);
  }

  res.send(map[location]);
});

app.listen(port, () => {
  console.log("its working");
});
