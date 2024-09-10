//import Express
const express = require('express');
const cors = require = require("cors");
const mysql = require("mysql");


const app = express();

app.use(cors());


// Start the server and listen on port 3000
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
  });