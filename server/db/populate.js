// const dbo = require("./conn")
// const db = dbo.getDb()


// const populateDB = (db) =>
// {
   
//    //clear database 
//    db.dropDatabase()

//    try {
//       db.createCollection("pokemon")
//       db.createCollection("trainers")
//       db.createCollection("teams")
//    } catch(e) {
//       console.log("Collections failed to be created!")
//    } 

//    let url = process.env.BASE_URL

//    //hacked together data population
//    let docsPokemon = []
//    let idCount = 0
//    let initPokemon = 5

//    for (let i = 0; i < initPokemon; i++) {
//       docsPokemon.push({"_id": idCount, "pokemon": "ditto"})
//       idCount++
//    }

//    const trainerIdStart = idCount;

//    const docsTrainers = [
//       {"name": "Hector Pylori", "pokemon": [], "teams": []},
//       {"name": "Anne Greenefable", "pokemon": [], "teams": []},
//       {"name": "Marion Ketchum", "pokemon": [], "teams": []},
//       {"name": "Penelope Ophelium", "pokemon": [], "teams": []},
//       {"name": "Forrest Ketchum", "pokemon": [], "teams": []},
//       {"name": "Helen Tsui", "pokemon": [], "teams": []},
//       {"name": "Pradeep Vishnakumar", "pokemon": [], "teams": []},
//       {"name": "Michelangelo T.", "pokemon": [], "teams": []},
//    ]

//    for (const element in docsTrainers) {
//       element["_id"] = idCount
//       idCount++
//    }

//    const trainerIdEnd = idCount-1;

//    const docsTeams = [ 
//       {"trainer_1": trainerIdStart, "trainer_2": trainerIdEnd},
//    ]

//    try {
//       /* REFACTOR IDE: Re-implement with async and await*/
//       const insertManyresultPokemon = db.getCollection("pokemon").insertMany(docsPokemon);
//       const insertManyresultTrainers = db.getCollection("trainers").insertMany(docsTrainers);
//       const insertManyresultTeams = db.getCollection("teams").insertMany(docsTeams);

//       let ids = [...insertManyresultPokemon.insertedIds, ...insertManyresultTrainers.insertIds, ...insertManyresultTeams.insertIds];

//       console.log(`${ids.length} documents were inserted.`);
//       for (let id of Object.values(ids)) {
//          console.log(`Inserted a document with id ${id}`);
//       }
//    } catch(e) {
//       console.log(`A MongoBulkWriteException occurred, clearing database.`);
//       db.dropDatabase();
//    } finally {
//       db.close();
//    }
// }

// module.exports = {
//    populateDB
// }
