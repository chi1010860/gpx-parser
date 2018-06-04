const fs = require('fs')
const filePath = 'static/ControlLink.gxml'
var gpx = {}

// main
fs.readFile(filePath, function (err, data) {
    if (err) throw err
    var gxml = data.toString()  // get the raw data

    // get the data object
    gpx.keyText = getKeyText(gxml)
})

// module.exports
module.exports = gpx;

function getKeyText(_gxml) {
    var _keyText = []
    var tagetTag = _gxml.match(/<key-text>[\s\S]*?(<\/>){2}/)[0]
    var list = tagetTag.match(/<[0-9]+ [[a-zA-Z0-9]+=".*"]*><\/>/g)
    for (let i = 0; i < list.length; i++) {
        var _original = list[i].match(/original=".*?"/g)[0]
        var _zhTw = list[i].match(/zh-tw=".*?"/g) ? list[i].match(/zh-tw=".*?"/g)[0] : list[i].match(/original=".*?"/g)[0]
        _keyText[i] = {
            id: list[i].match(/[0-9]+/g)[0],
            original: _original.slice(10, _original.lastIndexOf('"')),
            zhTw: _zhTw.slice(7, _zhTw.lastIndexOf('"'))
        }
    }
    return _keyText
}