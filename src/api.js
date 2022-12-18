const express = require("express");
const serverless = require("serverless-http");
const fs = require('fs');

const app = express();
const router = express.Router();

router.get("/", (req, res) => {
  var data = fs.readFileSync('./data.json')
  res.json({
    hello: "hi!",
    nice: 'nice',
    data: data
  });
});

app.use(`/.netlify/functions/api`, router);

module.exports = app;
module.exports.handler = serverless(app);