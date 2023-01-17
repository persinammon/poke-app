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
- Webpack to manage website assets
- [PokéAPI](https://pokeapi.co/)

Middleware:
- Body-parser


### API Endpoints

`GET /`
- Fetches landing page with account creation and login options
- Request arguments: None

`POST /`
- Creates a new trainer or logs in

`GET /home`
- Fetches home page populated by trainers to create team with and
tournaments to sign up for, and button to get a new pokemon

`GET /pokemon?page=<page_number>`
- Fetches the data of all pokemon
- Defaults to page 1 if no page specified

`GET /pokemon/<id>`
- Fetches the data of a pokemon
- Request arguments: None
- Returns: A JSON with keys X

`GET /trainer/<id>`
- Fetches the data of a trainer
- Request arguments: None
- Returns a JSON with keys X

`GET /trainer/<id>/pokemon`
- Fetches data for trainer to view their pokemon

`PATCH /trainer/<id>/pokemon`
- Modifies trainer's pokemon

`GET /team/<id>`
- Fetches the data of a team
- Request arguments: None
- Returns a JSON with keys X

`POST /team/`
- Creates new team

`PATCH /team/<id>`
- Modifies existing team to change team roster

`DELETE /team/<id>`
- Dissolve team association

`GET /tournament?page=<page_number>`
- Fetches the data of all tournament
- Page number defaults to 1 if not specified

`GET /tournament/<id>`
- Fetches the data of a tournament
- Request arguments: None
- Returns a JSON with keys X

`POST /tournament/`
- Creates new tournament

### Data Models

### Note on App Features

For modifying team resources, `socket.io` is used for real-time collaboration.

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

1. Install Node.js on local computer. Check installation:

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

The following dependencies should be installed.

```
server-side: express cors body-parser mongodb dotenv socket.io
client-side: react react-dom path ts-loader typescript webpack webpack-cli bootstrap react-router-dom
```

Note that PokéAPI does not require developer credentials to use.

3. Run using `node` or `nodemon`. `nodemon` automatically restarts server upon saved changes to local code.

```
nodemon server.js
```

4. Navigate to `localhost:8000` to interact with web application.

5. Use `curl` to test endpoints. Example that tests out a default POST request to home page:

```
curl -X POST http://localhost:8000
```

