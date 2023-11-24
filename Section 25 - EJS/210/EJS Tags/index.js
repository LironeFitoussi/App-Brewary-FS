import express from "express";

const app = express();
const port = 3000;
let bowl = ["Apples", "Oranges", "Pears"];

app.get("/", (req, res) => {
  res.render("index.ejs", {
    fruits: bowl
  });
});

app.listen(port, () => {
  console.log(`Server is tuning on port ${port}`);
});
