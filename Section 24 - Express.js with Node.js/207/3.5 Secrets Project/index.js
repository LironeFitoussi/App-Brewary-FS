import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import BodyParser from "body-parser";
import { log } from "console";
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

const pswd = "ILoveProgramming";
let userPswd = "";

function checkPswd(req, res, next) {
  userPswd = req.body["password"];
  next();
}

app.use(BodyParser.urlencoded({ extended: true }));
app.use(BodyParser.json());

app.use(checkPswd);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
  try {
    const password = req.body.password;
    if (password === pswd) {
      console.log("succefullly logged in");
      res.sendFile(__dirname + "/public/secret.html");
    } else {
      throw new Error("Alert!!");
    }
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
});

app.listen(port, () => {
  console.log(`Server is runing on port ${port}`);
});
