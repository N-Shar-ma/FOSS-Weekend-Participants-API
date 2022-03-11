const data = require('../profiles.json')
const express = require("express")
const router = express.Router()

router.get('/hobbies', (req, res) => { // returns a list of all the possible hobbies in the participants list
    const unique = (element, index, self) => self.indexOf(element) === index;
    const result = data.flatMap(e => e["hobbies"]).filter(unique);

    res.send(result);
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
