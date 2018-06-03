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

function getAttributes(_arNodeList) {
    var re = /[[a-zA-Z0-9]+=]*/g
    var arAttributeList = []
    for (let i = 0; i < _arNodeList.length; i++) {
        arAttributeList[i] = _arNodeList[i].match(re)
    }

    console.log(arAttributeList)
}