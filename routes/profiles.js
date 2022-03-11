const data = require('../profiles.json')
const express = require("express")
const router = express.Router()

router.get('/:roll_number', (req, res) => { // returns profile with the requested roll number
    let rollNumber = req.params.roll_number;
    let result;
    if (rollNumber == "hobbies"){
        result = new Set()
        for (let p of data){
            for (let h of p.hobbies){
                result.add(h)
            }
        }
        result = [...result]
    } else {
        result = data.find(profile => profile.roll_number.toLowerCase() === rollNumber.toLowerCase())
    }
    if(result) res.send(result)
    else res.sendStatus(404)
})

router.get('/', (req, res) => { // returns profiles of all the participants
    res.send(data)
})

module.exports = router