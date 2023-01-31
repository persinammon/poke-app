# Pokémon Social App

This web application allows users to sign up, create teams, and collaboratively
create team rosters.

### Dependencies

- Node.js
- Express.js
- React.js
- MongoDB
- Socket.io
- Chakra-UI
- Webpack to bundle assets
- [PokéAPI](https://pokeapi.co/)
- Full list of middleware accessible through reading `server/server.js` and `server/routes/*.js`

### API Endpoints

### Data Models

### Note on App Features

### Running Locally in Docker

To start the services:

```
docker compose up -d
```

To end the services and clean up containers:

```
docker compose down
```

### Local Development Setup

1. Install Node.js on computer. Check installation:

```
node --version
```

2. Install packages using `npm`. `nodemon` only works with a global install. 

```
cd server
npm i 
cd ../client
npm i 
npm i -g nodemon
```

No external set up of developer credentials is needed. The container version of
MongoDB is used, and PokéAPI has no required credentials or rate limiting.

3. Run using `node` or `nodemon`. `nodemon` allows for hot deployment, or automatic server restart on code changes.

```
nodemon server.js
```

4. Navigate to `localhost:3000` to interact with web application UI.

5. Use `curl` to test endpoints. Examples:

```
curl -d @test/testcase.json -H "Content-Type: application/json" http://localhost:8000
curl -v http://localhost:8000
curl -v http://localhost:3000
```

