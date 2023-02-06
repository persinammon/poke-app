const express = require('express')
const router = express.Router()
const dbo = require("../db/conn");
var cors = require('cors')


// define the home page route
router.get('/', (req, res) => {
    //access db and send necessary data
    res.end()
})
  
module.exports = router