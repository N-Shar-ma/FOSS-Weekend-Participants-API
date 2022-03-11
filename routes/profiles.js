const data = require('../profiles.json')
const express = require("express")
const router = express.Router()

router.get('/:roll_number', (req, res) => { // returns profile with the requested roll number
    if(req.params.roll_number==="hobbies"){
        var hobbies=[]
        for (var i=0;i<data.length;i++){
           for (var j=0;j<data[i]["hobbies"].length;j++){
               if(! hobbies.includes(data[i]["hobbies"][j])){
                   hobbies.push(data[i]["hobbies"][j])
               }
           }
        }
        res.send(hobbies)
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