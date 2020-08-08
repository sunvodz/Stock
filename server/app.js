const product = require("./data");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
// const uuidv4 = require('uuid/v1');
const { v4: uuidv4 } = require("uuid");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  next();
});
app.use(express.json());
app.get("/api/products", function (req, res) {
  if (product.length > 0) {
    res.send(product);
  } else {
    res.status(400).send("Not found any product");
  }
});
app.get("/api/products/:id", function (req, res) {
  const id = req.params.id;
  const product = product.find((item) => item.id === id);
  if (product) {
    res.send(product);
  } else {
    res.status(400).send(`Not found product for id ${id}`);
  }
});
const port = process.env.port || 3001;
app.listen(port, function () {
  console.log("Listening on port", port);
});
