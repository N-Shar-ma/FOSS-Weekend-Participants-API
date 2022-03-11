const data = require('../profiles.json')
const express = require("express")
const router = express.Router()

router.get('/hobbies', (req, res) => { // returns profiles of all the participants
    let responce = [... new Set(data.flatMap(e => e.hobbies))];  // [... new Set()] is used to filter out unique elements
    res.send(responce)
});

router.get('/:roll_number', (req, res) => { // returns profile with the requested roll number
    const result = data.find(profile => profile.roll_number.toLowerCase() === req.params.roll_number.toLowerCase())
    if(result) res.send(result)
    else res.sendStatus(404)
})

router.get('/', (req, res) => { // returns profiles of all the participants
    res.send(data)
})

module.exports = router