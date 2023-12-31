import express from "express";
// import bodyParser from "body-parser";
import axios from  "axios";


const app = express();
const port = 3000;
// app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'))

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

app.get("/", async (req, res) => {
    try {
        const response = await axios.get(`https://api.blockchain.com/v3/exchange/tickers/BTC-USD`);
        const result = response.data;
        console.log(result);
        res.render("index.ejs", { data: result });
    } catch (error) {
        console.log(error.response);
        res.status(500).send("Internal Server Error");
    }    
});