const data = require('../profiles.json')
const express = require("express")
const router = express.Router()
router.get('/:roll_number', (req, res) => { // returns roll numbers of all participants
    let var1=req.params.roll_number;
    if(var1=="roll-numbers"){
        var allRollNo = data.map(obj => obj.roll_number);
        res.send(allRollNo)
    }
    else{
        const result = data.find(profile => profile.roll_number.toLowerCase() === req.params.roll_number.toLowerCase())
        if(result) res.send(result)
        else res.sendStatus(404)
    }
})



router.get('/', (req, res) => { // returns profiles of all the participants
    res.send(data)
})



module.exports = router