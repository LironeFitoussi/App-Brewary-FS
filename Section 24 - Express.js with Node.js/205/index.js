import express from "express"
const app = express();
const port = 3000

app.listen(port, () => {
    console.log(`Server is runing at port ${port}`);
})

app.get("/", (req, res) => {
    res.send("<h1>Lesson 205</h1>")
})