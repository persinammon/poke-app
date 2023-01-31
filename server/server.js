// DEPENDENCIES

// express.js framework
const express = require('express');

// this is for passing environment variables during development
// (no docker container running) - currently unused 
require("dotenv").config({ path: "./config.env" });

// need this to parse HTTP requests
const bodyParser = require('body-parser');

const cors = require('cors');
const port = process.env.PORT || 8000;
const dbo = require("./db/conn");
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

// start up instance of app
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

/* Routes */
// Use const res = await fetch('url'), process.env.BASE_URL

//send data through JSON for home page
app.get('/', (req, res) => {
  res.json({"user" : "Ditto"})
})

const data = []
app.post('/', (req, res) => {
    data.push(req.body)
    res.send('POST received')
})

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});
  
server.listen(port, ()=>{
    // access database to log successful connection
    dbo.connectToServer(function (err) {
      if (err) console.error(err);
    });
    console.log("server running")
    console.log(`running on localhost:${port}`)
})

