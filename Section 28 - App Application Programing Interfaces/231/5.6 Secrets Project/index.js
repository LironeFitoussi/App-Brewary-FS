// HINTS:
// 1. Import express and axios
import express, { response } from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.listen(port, () => {
  console.log(`Server is runing on port ${port}`);
});

app.get("/", async (req, res) => {
  try {
    const response = await axios.get(API_URL + "/random");
    console.log(response.data);
    res.render("index.ejs", {
      secret: response.data.secret,
      user: response.data.username
    });
  } catch (error) {
    console.error(error.response.data);
    res.status(500)
  }
});

