import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import BodyParser from "body-parser";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
let bandName = ""

function bandNameGenerator (req, res, next) {
  console.log(req.body);
  bandName = req.body["pet"] + req.body["street"] + "🔥"
  next();
}

app.use(BodyParser.urlencoded({ extended: true }));

app.use(bandNameGenerator)

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  res.send(`<h1>Your band name is:</h1><h2>${bandName}</h2>`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
