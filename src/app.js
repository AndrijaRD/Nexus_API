import express, { Router } from "express";
import serverless from "serverless-http";

const app = express();
const router = Router();

router.get("/", (req, res) => {
  res.json({
    hello: "hi!"
  });
});

app.use(`/.netlify/functions/api`, router);

export default app;
export const handler = serverless(app);