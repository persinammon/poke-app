const express = require('express')
const router = express.Router()
const dbo = require("../db/conn");
var cors = require('cors')


router.route('/:teamId')
    .get((req, res) => {
        //connect to db and return correct team
        //req.params.teamId
        res.end()
    })
    .patch((req, res) => {
        res.end()
    })
    .post((req, res) => {
        res.end()
    })
    .delete((req, res) => {
        res.end()
    })

    
router.get('/team/create', (req, res) => {
    res.end()
})

router.post('/team/create', (req, res) => {
    res.end()
})

module.exports = router