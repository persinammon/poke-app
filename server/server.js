// Require dependencies
const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 8000;
const dbo = require("./db/conn");
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

// Start up an instance of app
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
    // Database access is here to check that it was successful, usage in routes folder
    dbo.connectToServer(function (err) {
      if (err) console.error(err);
    });
    console.log("server running")
    console.log(`running on localhost:${port}`)
})

