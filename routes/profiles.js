const data = require('../profiles.json')
const express = require("express")
const router = express.Router()

router.get('/:roll_number', (req, res) => { // returns profile with the requested roll number
    const result = data.find(profile => profile.roll_number.toLowerCase() === req.params.roll_number.toLowerCase())
    if(result) res.send(result)
    else res.sendStatus(404)
})

router.get('/', (req, res) => {
    // If GET parameter hobby is present then return matching profiles
    if (req.query.hobby != undefined) {
        res.send(data.filter(e => e["hobbies"].includes(req.query.hobby)));
        return;
    }

    // Or else returns profiles of all the participants
    res.send(data)
})

module.exports = router
