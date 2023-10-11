import express from "express"
const app = express()
const port = 3000
app.get("/", () => {
    console.log("This is index page");
})
app.listen(3000,() => {
    console.log(`Server is runing at port ${port}`);
})