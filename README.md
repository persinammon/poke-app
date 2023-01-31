# Pokémon Social App

This web application allows users to sign up and play competitively with Pokémon.
It is currently being built.

### Functionality

1. Create a trainer account with a unique ID. 
2. Send a real-time request to another trainer to form a team.
3. Collaboratively create a team roster of 6 pokémon in real-time.
3. Search and enter tournaments.
4. Host a tournament with grand prize.

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

`GET /`
- Fetches landing page with account creation/login option through Auth0

`GET /home`
- Fetches home page populated by trainers to create team with and tournaments to sign up for, and button
to get a new pokemon or item

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
- Returns a JSON with trainer stats

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

There are five classes - trainers, pokemon, items, tournaments, teams.<br />
-> = owns<br />

Trainers -> pokemon -> items (fed by trainer)<br />
         -> tournaments<br />
         -> teams<br />
         -> items<br />
         
Admin trainer -> Tournaments -> List of trainers<br />


Teams -> Two trainers<br />
      -> Up to six pokemon<br />
      
Many to many relationship between trainers and teams,<br />
One to many relationship between trainers and Pokemon,<br />
One to many relationship between trainers/pokemon and items,<br />

### Note on App Features

For modifying team resources, `socket.io` is used for real-time collaboration.

For creating React components, functions and hooks were used over classes, after 
reading [this article](https://overreacted.io/how-are-function-components-different-from-classes/).

One end goal is to set up deployment to GCP K8s, then connect that to a CI/CD pipeline in Github.
These instructions on local Kubernetes deployment are my current progress:
https://www.digitalocean.com/community/tutorials/how-to-migrate-a-docker-compose-workflow-to-kubernetes

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

Note that PokéAPI does not require developer credentials to use.

3. Run using `node` or `nodemon`. `nodemon` automatically restarts server upon saved changes to local code.

```
nodemon server.js
```

4. Navigate to `localhost:3000` to interact with web application.

5. Use `curl` to test endpoints. Examples:

```
curl -d @test/testcase.json -H "Content-Type: application/json" http://localhost:8000
curl -v http://localhost:8000
curl -v http://localhost:3000
```

