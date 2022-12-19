import express, { Router } from "express";
import serverless from "serverless-http";
const fs = require('fs');

const app = express();
const router = Router();

router.get("/", (req, res) => {
  //var raw_data = fs.readFileSync('./src/' + req.params.subject + '.json');
  //var data = JSON.parse(raw_data);
  res.send('functions');
});

app.use(`/.netlify/functions/api`, router);

export default app;
export const handler = serverless(app);