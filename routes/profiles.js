const data = require('../profiles.json')
const express = require("express")
const router = express.Router()

router.get('/hobbies', (req, res) => {
    const result = [...new Set(data.flatMap(profile => profile.hobbies))] // flatMap return multiple values unlike map which only returns one
    if(result) res.send(result)
    else res.sendStatus(404)
})

router.get('/:roll_number', (req, res) => { // returns profile with the requested roll number
    const result = data.find(profile => profile.roll_number.toLowerCase() === req.params.roll_number.toLowerCase())
    if(result) res.send(result)
    else res.sendStatus(404)
})

router.get('/', (req, res) => { // returns profiles of all the participants
    res.send(data)
})

module.exports = router