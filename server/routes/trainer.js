const express = require('express')
const router = express.Router()
const dbo = require("../db/conn");
var cors = require('cors')


router.get('/:trainerId', (req, res) => {
    res.end()
})

router.get('/:trainerId/pokemon', (req, res) => {
    res.end()
})

router.patch('/:trainerId/pokemon', (req, res) => {
  res.end()
})

module.exports = router