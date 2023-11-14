import express from "express"
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Server is runing on port ${port}`);
})

app.get("/", (req, res) => {
    res.send("<h1>Home Page</h1>")
})

app.post("/register", (req, res) => {
    // Do something with data
    res.sendStatus(201)
})

app.put("/user/lirone", (req, res) => {
    res.sendStatus(200)
})

app.patch("/user/lirone", (req, res) => {
    // Delete user
    res.sendStatus(200)
})

app.delete("/user/lirone", (req, res) => {
    res.sendStatus(200)
})