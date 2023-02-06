/* REFACTOR ME */

const MongoClient = require('mongodb').MongoClient;

/* For development, use a Cloud MongoDB cluster set up through MongoDB Atlas.
   For production, use a Docker container with mongodb installed for better security
   (don't want URI in multiple containers). */
const uri = process.env.ATLAS_URI;
//const Db = process.env.ME_CONFIG_MONGODB_URL; //for docker services login


const client = new MongoClient(uri, {useNewUrlParser: true});
 
var _db;
 
module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      // Verify we got a good "db" object
      if (db)
      {
        _db = db.db("pokemon");
        console.log("Successfully connected to MongoDB."); 
      }
      return callback(err);
         });
  },
 
  getDb: function () {
    return _db;
  },
};
