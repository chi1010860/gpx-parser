const fs = require('fs')

fs.readFile('static/key-text.gxml', function (err, data) {
    if (err) throw err
    var gxml = data.toString()
    var xml = gxml2xml(gxml)
    console.log(xml)
    fs.writeFile('static/key-text.xml', xml, function (err) {
        if (err) throw err
        console.log('File is saved!')
    })
})

function gxml2xml(_gxml) {
    var keyText = modifyParentTag(_gxml)
    var arNodeList = getNodeList(_gxml)
    var newNodeList = modifyNodeTag(arNodeList)
    var _xml = remix(newNodeList)
    return _xml
}

function modifyParentTag(str) {
    var re = /<key-text>[\s\S]*<\/><\/>/g
    var _keyText = str.match(re)[0].replace('</></>', '</></key-text>')
    return _keyText
}

function getNodeList(_gxml) {
    var re = /<[0-9]+ [[a-zA-Z0-9]+=".*"]*><\/>/g
    return _gxml.match(re)
}

function modifyNodeTag(_arNodeList) {
    var tempNodeList = []
    for (let i = 0; i < _arNodeList.length; i++) {
        tempNodeList[i] = _arNodeList[i].replace('<', '<k')
    }
    var temp = []
    var _newNodeList = []
    for (let i = 0; i < tempNodeList.length; i++) {
        temp[i] = tempNodeList[i].match(/<k[0-9]+/)[0]
        var newTag = '</' + temp[i].slice(1) + '>'
        _newNodeList[i] = tempNodeList[i].replace('</>', newTag)
    }
    return _newNodeList
}

function remix(_newNodeList) {
    var temp = '<key-text>'
    for (let i = 0; i < _newNodeList.length; i++) {
        temp = temp.concat(_newNodeList[i])
    }
    temp = temp.concat('</key-text>')
    return temp
}