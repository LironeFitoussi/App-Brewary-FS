import express from "express";
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log("Server is runing on port 3000");
});

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
  console.log(req.rawHeaders);
});

app.get("/about", (req, res) => {
    res.send("<h1>About Me</h1><p>My Name is Lirone</p>");
});

app.get("/contact", (req, res) => {
    res.send("<h1>Contact Me</h1><p>My Phone number is +972585109829");
});
