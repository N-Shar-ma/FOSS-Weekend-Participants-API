const data = require('../profiles.json')
const express = require("express")
const router = express.Router()

router.get('/:roll_number', (req, res) => { // returns profile with the requested roll number
    const result = data.find(profile => profile.roll_number.toLowerCase() === req.params.roll_number.toLowerCase())
    if(result) res.send(result)
    else res.sendStatus(404)
})

router.get('/', (req, res) => {
    // If GET parameter age is present then return matching profiles
    if (req.query.age != undefined) {
        res.send(data.filter(e => e["age"] == req.query.age));
        return;
    }

    // Or else returns profiles of all the participants
    res.send(data)
})

module.exports = router
