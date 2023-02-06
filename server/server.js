/* Dependencies */

// express.js framework
const express = require('express');

// this is for passing environment variables during development
// (no docker container running) - currently unused 
require("dotenv").config({ path: "./config.env" });

// need this to parse HTTP requests with a body
const bodyParser = require('body-parser');

const cors = require('cors');
const port = process.env.PORT || 8000;
const dbo = require("./db/conn");

// start up instance of app
const app = express();

//REFACTOR ME
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// set to accept incoming requests for any origin, across all endpoints
app.use(cors());
app.use(express.json());

const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const homeRouter = require('./routes/home')
const teamsRouter = require('./routes/team')
const pokemonRouter = require('./routes/pokemon')
const trainersRouter = require('./routes/trainer')


/* Routes */
app.use('/home', homeRouter)
app.use('/team', teamsRouter)
app.use('/pokemon', pokemonRouter)
app.use('/trainer', trainersRouter)


//a test endpoint
app.get('/', (req, res) => {
  res.status(200)
  res.send("Landing page")
  //Auth0 handles login/signup - otherwise serve static content
})

// IMPLEMENT ERROR HANDLING - catch 404 and forward to error handler

// io.on('connection', (socket) => {
//   console.log('a user connected');
//   socket.on('disconnect', () => {
//     console.log('user disconnected');
//   });
// });


  
server.listen(port, ()=>{
    // REFACTOR ME
    //access database to test connection for rest of app
    dbo.connectToServer(function (err) {
      if (err) console.error(err);
    });
    console.log("server running")
    console.log(`running on localhost:${port}`)
})

