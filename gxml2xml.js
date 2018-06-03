const fs = require('fs')

fs.readFile('static/key-text.gxml', function (err, data) {
    if (err) throw err
    gxml = data.toString()
    arNodeList = getNode(gxml)
    getAttributes(arNodeList)
})

function getNode(_gxml) {
    var re = /<[0-9]+ [[a-zA-Z0-9]+=".*"]*>/g
    return _gxml.match(re)
    // console.log(arNodeList)
}