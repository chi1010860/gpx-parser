var keyText = require('./gxml2json')
var express = require('express')
var app = express()
const port = 3000

app.get('/keyText', function (req, res) {
    res.send(keyText)
})

app.listen(port, function (err) {
    if (err) throw err
    console.log("server is built at http://localhost:%d/keytext", port)
})