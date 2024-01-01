# 1. Create a new directory for your Express app
mkdir my-express-app

# 2. Change into the newly created directory
cd my-express-app

# 3. Initialize a new Node.js project (creates a package.json file)
npm init -y

# 4. Install Express and body-parser as dependencies and EJS as a view engine
npm install express body-parser ejs nodemon


# 6. Create the main file for your app (e.g., app.js)
touch app.js



# 8. In your app.js file, set up a basic Express server with body-parser
# Example code for app.js:
import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

*// Use body-parser middleware to parse incoming request bodies*
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.listen(port, () => {
  console.log(\`Server is running on port \${port}\`);
});" > app.js

# 9. Run your Express app
nodemon app.js