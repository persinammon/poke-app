const express = require('express')
const router = express.Router()
const dbo = require("../db/conn");
var cors = require('cors')


router.get('/', (req, res) => {
    res.redirect('/all')
})

router.get('/all', (req, res) => {
    res.redirect('/all/1')
})

router.get('/all/:pageId', (req, res) => {
    let db_connect = dbo.getDb();
    //find the right collection, error handle if collection empty
    //return the first ten pokemon and then a number of pages 
    res.json({})
})

// use .all() for one db connect
router.route('/pokemon/:pokemonId')
    .get((req, res) => {
        let db_connect = dbo.getDb();
        //get right pokemon for collection
        res.end()
    })
    .patch((req, res) => {
        res.end()
    })
    .delete((req, res) => {
        res.end()
    })

  
module.exports = router