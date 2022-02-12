import express from "express";

const app = express();
const PORT = 8080;

app.get("/", (req, res) => {
  res.send("Getting started");
});

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});