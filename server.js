var gpx = require('./gxml2json')
var express = require('express')
var app = express()
const port = 3000

app.use('/', express.static(__dirname + '/public'))

app.get('/keyText', function (req, res) {
    res.send(gpx.keyText)
})

app.get('/languagetable', function (req, res) {
    res.send(gpx.languageTable)
})

app.get('/gpx', function (req, res) {
    res.send(gpx)
})

app.listen(port, function (err) {
    if (err) throw err
    console.log("server is built at http://localhost:%d/", port)
    console.log("server is built at http://localhost:%d/keytext", port)
    console.log("server is built at http://localhost:%d/languagetable", port)
})