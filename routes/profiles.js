const data = require('../profiles.json')
const express = require("express")
const router = express.Router()

router.get('/:roll_number', (req, res) => { // returns profile with the requested roll number
    const result = data.find(profile => profile.roll_number.toLowerCase() === req.params.roll_number.toLowerCase())
    if(result) res.send(result)
    else res.sendStatus(404)
})

router.get('/', (req, res) => {
    if (req.query.hobby){
    let hobby = req.query.hobby;
    const result = data.filter(val => val.hobbies.includes(hobby));
    if (result.length != 0) res.send(result)
    else res.sendStatus(404)
    } else {
        res.send(data)
    }
})

module.exports = router