import express from "express";
import bodyParser from "body-parser";
import pg from "pg"

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "Nveurvtjh147",
  port: "5432",
});

db.connect(); 

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async (req, res) => {
  
  let countries = []
  const result = await db.query("SELECT country_code FROM visited_countries")
  result.rows.forEach((country) => {
    countries.push(country.country_code)
  })
  res.render("index.ejs", {countries: countries, total: countries.length})
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
