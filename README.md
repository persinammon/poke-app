# Pokémon Social App

This web application allows users to sign up and play competitively with Pokémon.

### Functionality

1. Create a trainer account with a unique ID. 
2. Send a real-time request to another trainer to form a team.
3. Collaboratively create a team roster of 6 pokémon.
3. Search and enter tournaments.
4. Host a tournament with grand prize.

### Dependencies

- Node.js
- Express.js
- React.js
- MongoDB
- CORS
- Socket.io
- Chai test framework
- Webpack build tool to manage website assets
- [PokéAPI](https://pokeapi.co/)

Middleware:
- Body-parser


### API Endpoints

### Data Models

### Special Gameplay Features

### Note on App Features

### Local Development Setup

1. Install Node.js on local computer. Check installation:

```
node --version
```

2. Install packages using `npm`.

```
cd server
npm i express cors body-parser mongodb dotenv
cd ../client
npm i react react-dom path ts-loader typescript webpack webpack-cli bootstrap react-router-dom
npm i -g nodemon
```

Note that PokéAPI does not require developer credentials for use.

3. Create a MongoDB database following this [tutorial](https://www.mongodb.com/docs/atlas/getting-started/).
3. Create a `config.env` in `server` with the URI from MongoDB. Sample URI below. 

```
ATLAS_URI=mongodb+srv://<username>:<password>@sandbox.jadwj.mongodb.net/employees?retryWrites=true&w=majority
PORT=8000
```

4. Run using `node` or `nodemon`. `nodemon` automatically restarts server upon saved changes to local code.

```
nodemon server.js
```

5. Navigate to `localhost:8000` to interact with web application.

6. Use `curl` to test endpoints. Example that tests out a default POST request to home page:

```
curl -X POST http://localhost:8000
```


