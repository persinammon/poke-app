// modularized and exported so routes and main server can share


const { MongoClient } = require("mongodb");

/* For development, using a Cloud MongoDB cluster set up through MongoDB Atlas.
   For production, plan on using a Docker container with mongodb installed. */
//const Db = process.env.ATLAS_URI;
const Db = process.env.ME_CONFIG_MONGODB_URL; //for docker services login


const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
 
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
