var router = require('express').Router()
var fire = require('./fire')
var bodyParser = require('body-parser')
var db = fire.firestore()
router.use(bodyParser.json())

router.get('/data', (req, res)=>{
    db.settings({
        timestampsInSnapshots: true
    })
    var allData = []
    db.collection('Indoor_temperature')
    .orderBy('time','desc').get()
    .then(snapshot => {
        snapshot.forEach((hasil)=>{
            allData.push(hasil.data())
        })
        console.log(allData)
        res.send(allData)
    }).catch((error)=>{
        console.log(error)
    })
})

router.post('/indoor', (req, res)=>{
    db.settings({
        timestampsInSnapshots: true
    })
    db.collection('Indoor_temperature').add({
        temp: req.query.temp,
        time: new Date()
    })
    res.send({
        temp: req.query.temp,
        waktu: new Date()
    })
})



module.exports = router
