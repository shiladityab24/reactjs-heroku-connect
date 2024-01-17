const express = require('express')
const bodyParser = require("body-parser")
const path = require('path');
const cors = require('cors')
require('dotenv').config();
const app = express()
var corsOptions = {
    origin: "*",
  };
app.use(cors(corsOptions))

// parse requests of content-type - application/json
app.use(express.json())


// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
});

PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Listening to port 3000")
})