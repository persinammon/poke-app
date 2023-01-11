# Pokémon Social App

This web application allows users to sign up and play Pokémon.

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
npm install express cors body-parser reload
npm install -g nodemon
```

3. Run using `node` or `nodemon`. `nodemon` automatically restarts server upon saved changes to local code.

```
nodemon server.js
```

4. Navigate to `localhost:8000` to interact with web application.

5. Use `curl` to test endpoints. Example that tests out a default POST request to home page:

```
curl -X POST http://localhost:8000
```
