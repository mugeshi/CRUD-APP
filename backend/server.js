//import Express
const express = require('express');
const cors = require = require("cors");
const mysql = require("mysql");


const app = express();

app.use(cors());

// MySQL connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});


// Start the server and listen on port 3000
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
  });