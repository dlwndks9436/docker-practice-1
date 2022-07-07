import express from "express";
import mongoose from "mongoose";

const app = express();

mongoose
  .connect("mongodb://juann:mypassword@mongo:27017/?authSource=admin")
  .then(() => console.log("successfully connected to database"))
  .catch((e) => console.log(e));

app.get("/", (_, res) => {
  res.send("<h2>Hi There</h2>");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
