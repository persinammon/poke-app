# Pokémon Social App

This web application allows users to sign up, create teams, and collaboratively
create team rosters. 

It is unfinished, but in the process I did cover (as in programmed) tutorials on how to set up a Node.js
web application to a database backend, and used React for the front-end of the project.
I decided to focus on different technical skills instead of fleshing out a good, unique app. 
Below I wrote some run instructions and general things I used and issues I faced. 

### Issue Faced When Deploying 2 Services

Originally, I structured the project as two Docker environments - one for the MongoDB database
and one running the Node.js web application. I had figured that for scaling up, I could keep
one database instance while having multiple instances of the web application. Unfortunately,
I ran into an issue when deploying two services to the cloud (I tried both Amazon EKS and
Google Cloud Platform). Both were saved as separate repositories with one image mapping to one repository.
I was unable to use Docker-Compose to start up both instances in tandem, despite writing everything
to successfully connect the database to the application on my local setup. I looked to Google forums and StackOverflow
for previous run-ins with this issue, and was unable to find anything or solve it myself. I tried using [Kompose](https://kompose.io/]()
to deploy services to Kubernetes.

So, unfortunately I've had to move the old Dockerfiles and Docker compose YAML to a new folder and start anew.
Being proud of my docker-compose file, it was a bit unfortunate.

### Dependencies

- Node.js
- Express.js
- React.js
- MongoDB
- Socket.io
- Chakra-UI
- Webpack to bundle assets
- [PokéAPI](https://pokeapi.co/)
- Common middleware associated with Express.js (found in `server/package.json`)
- Mocha and Chai test frameworks


### Running Locally in Docker, if Using 2 Services

Move Dockerfiles to correct codebases, and docker compose file to the top-level folder.

To start the services:

```
docker compose up -d
```

To end the services and clean up containers:

```
docker compose down
```

### Local Development Setup

1. Install Node.js on computer and clone directory. Check installation:

```
node --version
```

2. Install packages using `npm`. 

```
cd server
npm i 
cd ../client
npm i 
```

For development, a cloud MongoDB database was used, requiring developer credentials.
PokéAPI has no required credentials or rate limiting.

3. Run using `node` or `nodemon`. `nodemon` allows for hot deployment, or automatic server restart on code changes.
Both are included in the `npm` scripts defined in `package.json`.

Deployment:
```
npm start
```

Hot deployment:
```
npm run devstart
```

4. Navigate to `localhost:3000` to interact with web application UI.

5. Use `curl` to test endpoints. Examples:

```
curl -d @test/testcase.json -H "Content-Type: application/json" http://localhost:8000
curl -v http://localhost:8000
curl -v http://localhost:3000
```

Run tests in `server/test` folder.

