var gpx = require('./gxml2json')
var express = require('express')
var app = express()
const port = 3000

app.get('/keyText', function (req, res) {
    res.send(gpx.keyText)
})

app.get('/languagetable', function (req, res) {
    res.send(gpx.languageTable)
})

app.listen(port, function (err) {
    if (err) throw err
    console.log("server is built at http://localhost:%d/keytext", port)
    console.log("server is built at http://localhost:%d/languagetable", port)
})