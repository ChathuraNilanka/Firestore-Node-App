var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
var routeSaya = require('./route/route')

const PORT = process.env.PORT || 5000
var app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(routeSaya)

app.get('/', (req, res)=>{
    res.send('<h1>Express & Firestore</h1>')
})

app.listen(PORT, ()=>{
    console.log(`Server @port ${ PORT }`)
})