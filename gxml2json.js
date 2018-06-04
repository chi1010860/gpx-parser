const fs = require('fs')
var keyText = []

fs.readFile('static/key-text.gxml', function (err, data) {
    if (err) throw err
    var gxml = data.toString()
    var json = gxml2json(gxml)
})

function gxml2json(_gxml) {
    getProps(_gxml)
    return JSON.stringify(keyText)
}

function getProps(_gxml) {
    var list = _gxml.match(/<[0-9]+ [[a-zA-Z0-9]+=".*"]*><\/>/g)
    for (let i = 0; i < list.length; i++) {
        var _original = list[i].match(/original=".*?"/g)[0]
        var _zhTw = list[i].match(/zh-tw=".*?"/g)[0]
        keyText[i] = {
            id: list[i].match(/[0-9]+/g)[0],
            original: _original.slice(10, _original.lastIndexOf('"')),
            zhTw: _zhTw.slice(7, _zhTw.lastIndexOf('"'))
        }
    }
}

module.exports = keyText;