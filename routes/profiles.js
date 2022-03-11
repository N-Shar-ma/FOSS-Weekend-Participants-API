const data = require('../profiles.json')
const express = require("express")
const router = express.Router()

router.get('/:roll_number', (req, res) => { // returns profile with the requested roll number
    const result = data.find(profile => profile.roll_number.toLowerCase() === req.params.roll_number.toLowerCase())
    if(result) res.send(result)
    else res.sendStatus(404)
})

router.get('/', (req, res) => { // returns profiles of all the participants
    if(req.query.hobby){
        res.send(data.filter(function (obj){
            return obj.hobbies.includes(req.query.hobby);
        }))
    }
    else{
    res.send(data)
    }
})

module.exports = router