// Require dependencies
const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 8000;
const dbo = require("./db/conn");


// Start up an instance of app
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use(require("./routes/record"));

const baseUrl = 'https://pokeapi.co/api/v2/';

/* Routes */
// Use const res = await fetch('url')

//send data through JSON for home page
app.get('/home', function (req, res) {
    res.send('home page');
  })

app.get('/', (req, res) => {
  res.json({"user" : "Ditto"})
})

const data = []
app.post('/', function (req, res) {
    data.push(req.body)
    res.send('POST received')
})
  
// Create server
const server = app.listen(port, ()=>{
    dbo.connectToServer(function (err) {
      if (err) console.error(err);

    });
    console.log("server running")
    console.log(`running on localhost:${port}`)})

