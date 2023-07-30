//initialize with test data in database, runs as mongosh commands
//later on can create a user and give it a lower privilege role, if relevant

const collection1 = 'pokemon';
const collection2 = 'trainers';
const collection3 = 'teams';

db.createCollection(collection1);
db.createCollection(collection2);
db.createCollection(collection3);


