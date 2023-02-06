const express = require('express')
const router = express.Router()
const dbo = require("../db/conn");

// define the home page route
router.get('/', (req, res) => {
    // DECIDE WHAT TO SEND BACK TO FRONT-END
    // top 5 of pokemon, teams, and trainers?
    res.end()
})
  
module.exports = router