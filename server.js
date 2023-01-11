// Require dependencies
const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const reload = require('reload');

// Start up an instance of app
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use(express.static('client'));

/* Routes */
app.get('/', function (req, res) {
    res.send('hello world');
  })

const data = []
app.post('/', function (req, res) {
    data.push(req.body)
    res.send('POST received')
})
  

// Create server
const port = 8000;
const server = app.listen(port, ()=>{
    console.log("server running")
    // Create as link to localhost port
    console.log(`running on localhost:${port}`)})

