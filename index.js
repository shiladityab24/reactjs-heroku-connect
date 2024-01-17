const express = require('express')
const bodyParser = require("body-parser")
const path = require('path');
const cors = require('cors')

const app = express()
var corsOptions = {
    origin: "*",
  };
app.use(cors(corsOptions))

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
});

PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Listening to port 3000")
})